# FixMyText - Deployment Guide

Complete step-by-step guide to deploy FixMyText to production.

## Prerequisites

- Supabase project set up
- Node.js 18+ installed
- Supabase CLI installed: `npm install -g supabase`
- DeepSeek API account

## Step 1: Database Setup

### 1.1 Apply Migrations

```bash
# Login to Supabase CLI
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Push database migrations
supabase db push
```

Or manually run the SQL:

```bash
# Copy contents of supabase/migrations/20260130_create_fixmytext_tables.sql
# Paste into Supabase Dashboard > SQL Editor
# Click "Run"
```

### 1.2 Verify Tables Created

Check in Supabase Dashboard > Table Editor:
- `rewrite_history` ✓
- `user_usage` ✓

### 1.3 Verify RLS Policies

Check in Supabase Dashboard > Authentication > Policies:
- Both tables should have RLS enabled
- Policies for SELECT, INSERT, DELETE should be visible

## Step 2: Edge Function Deployment

### 2.1 Set DeepSeek API Key

1. Go to [DeepSeek Platform](https://platform.deepseek.com/)
2. Sign up / Login
3. Generate API key
4. In Supabase Dashboard:
   - Go to Project Settings > Edge Functions
   - Click "Add secret"
   - Name: `DEEPSEEK_API_KEY`
   - Value: Your API key
   - Click "Save"

### 2.2 Deploy Function

```bash
# Deploy the rewrite-message function
supabase functions deploy rewrite-message

# Verify deployment
supabase functions list
```

Expected output:
```
┌─────────────────┬────────┬─────────────────┬─────────┐
│ NAME            │ STATUS │ VERSION         │ CREATED │
├─────────────────┼────────┼─────────────────┼─────────┤
│ rewrite-message │ active │ v1              │ ...     │
└─────────────────┴────────┴─────────────────┴─────────┘
```

### 2.3 Test Function

```bash
# Test with curl
curl -L -X POST 'https://your-project-ref.supabase.co/functions/v1/rewrite-message' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "hello how r u",
    "tone": "professional",
    "length": "same"
  }'
```

Expected response:
```json
{
  "rewritten": "Hello, how are you?",
  "usage": {
    "remaining": 3,
    "limit": 3,
    "tier": "guest"
  }
}
```

## Step 3: Frontend Configuration

### 3.1 Set Environment Variables

```bash
# Create .env.local file
cp env.example .env.local

# Edit .env.local with your values
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 3.2 Build for Production

```bash
# Install dependencies
npm install

# Build
npm run build

# Preview build
npm run preview
```

### 3.3 Test Locally

```bash
# Run dev server
npm run dev

# Access at: http://app.localhost:8080/FixMyText
# Note: Make sure app subdomain routing is working
```

## Step 4: Deploy to Hosting

### Option A: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel Dashboard:
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_ANON_KEY

# Deploy production
vercel --prod
```

### Option B: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist

# Add environment variables in Netlify Dashboard
```

### Option C: Custom Server

```bash
# Build
npm run build

# Copy dist/ folder to your server
# Serve with nginx, Apache, or any static host
```

## Step 5: Configure Authentication

### 5.1 Email Auth Settings

In Supabase Dashboard > Authentication > Settings:

1. **Email Templates**
   - Customize "Confirm signup" email
   - Customize "Reset password" email
   - Add your branding

2. **Email Auth**
   - Enable "Enable email confirmations" (recommended)
   - Set "Site URL" to your production URL
   - Add redirect URLs

3. **URL Configuration**
   - Site URL: `https://app.yourdomain.com`
   - Redirect URLs: Add `https://app.yourdomain.com/**`

### 5.2 Optional: Social Auth

Add OAuth providers (Google, GitHub, etc.):

1. Go to Authentication > Providers
2. Enable desired providers
3. Add OAuth credentials
4. Configure redirect URLs

## Step 6: Post-Deployment Verification

### 6.1 Test Guest Flow
1. Visit `/FixMyText` without login
2. Paste text and rewrite
3. Verify 3 rewrites work
4. Verify 4th attempt shows limit message
5. Verify history in browser

### 6.2 Test Auth Flow
1. Click "Login"
2. Sign up with email
3. Verify email (check inbox)
4. Log in
5. Verify 20 rewrites available
6. Test rewrite
7. Verify history is saved
8. Refresh page - verify history persists

### 6.3 Test Edge Function
- Check logs: `supabase functions logs rewrite-message`
- Verify DeepSeek API calls are working
- Check error handling

## Step 7: Monitoring Setup

### 7.1 Supabase Monitoring

Dashboard > Logs:
- Monitor API requests
- Check Edge Function errors
- Review database queries

### 7.2 Usage Tracking

```sql
-- Check total rewrites
SELECT COUNT(*) FROM rewrite_history;

-- Check user usage
SELECT 
  u.email,
  uu.monthly_rewrites,
  uu.subscription_tier
FROM user_usage uu
JOIN auth.users u ON u.id = uu.user_id
ORDER BY uu.monthly_rewrites DESC;

-- Check recent activity
SELECT 
  u.email,
  rh.created_at,
  rh.settings->>'tone' as tone
FROM rewrite_history rh
JOIN auth.users u ON u.id = rh.user_id
ORDER BY rh.created_at DESC
LIMIT 20;
```

### 7.3 Set Up Alerts

Create alerts for:
- Edge Function errors (>5% error rate)
- Database performance issues
- High API usage

## Step 8: Monthly Maintenance

### 8.1 Reset Usage Counts

Set up a cron job to run monthly:

```sql
-- Run on the 1st of each month
SELECT reset_monthly_usage();
```

In Supabase Dashboard:
1. Go to Database > Functions
2. Schedule `reset_monthly_usage` to run monthly
3. Or use GitHub Actions / external cron service

### 8.2 Backup Database

```bash
# Backup via CLI
supabase db dump -f backup.sql

# Or use Supabase Dashboard > Database > Backups
```

## Troubleshooting

### Edge Function 500 Error
- Check `DEEPSEEK_API_KEY` is set
- View logs: `supabase functions logs rewrite-message`
- Verify DeepSeek API quota

### History Not Saving
- Check RLS policies are enabled
- Verify user is authenticated
- Check browser console for errors

### Authentication Redirect Issues
- Verify Site URL in Supabase Dashboard
- Check redirect URLs are whitelisted
- Ensure CORS is configured

### DeepSeek API Rate Limits
- Check your API usage on DeepSeek Platform
- Implement client-side rate limiting
- Add retry logic in Edge Function

## Performance Optimization

### Caching
- Consider caching common rewrites
- Use Redis for session management

### Database
- Monitor query performance
- Add indexes if needed
- Archive old history (>6 months)

### Edge Functions
- Monitor cold start times
- Optimize DeepSeek prompts
- Implement request batching

## Security Checklist

- [ ] RLS policies enabled on all tables
- [ ] Environment variables not exposed
- [ ] CORS configured correctly
- [ ] Rate limiting implemented
- [ ] Input validation in place
- [ ] XSS protection enabled
- [ ] HTTPS enforced
- [ ] Regular security audits

## Cost Monitoring

Monitor costs for:
- Supabase (database, auth, storage)
- DeepSeek API calls
- Hosting (Vercel/Netlify)

Estimated costs:
- Free tier: ~$0/month (Supabase + DeepSeek free tiers)
- Low usage (<1000 users): ~$25/month
- Medium usage (1000-10000 users): ~$100-200/month

## Next Steps

After successful deployment:
1. Set up monitoring and alerts
2. Create admin dashboard (optional)
3. Implement paid tier with Stripe
4. Add analytics (PostHog, Mixpanel, etc.)
5. Create marketing landing page
6. Set up customer support (Intercom, etc.)

## Support

For deployment issues:
- Supabase Docs: https://supabase.com/docs
- DeepSeek Docs: https://platform.deepseek.com/docs
- GitHub Issues: Create an issue in your repo
