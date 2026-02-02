# FixMyText - Quick Start Guide

Get FixMyText up and running in 5 minutes!

## 🚀 Quick Setup (Development)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

```bash
# Copy environment file
cp env.example .env.local

# Edit .env.local with your Supabase credentials
# Get these from: https://supabase.com/dashboard/project/_/settings/api
```

### 3. Set Up Database

```bash
# Option A: Using Supabase CLI (Recommended)
supabase login
supabase link --project-ref your-project-ref
supabase db push

# Option B: Manual
# 1. Go to Supabase Dashboard > SQL Editor
# 2. Copy contents of: supabase/migrations/20260130_create_fixmytext_tables.sql
# 3. Paste and run
```

### 4. Configure DeepSeek API

1. Get API key from [DeepSeek Platform](https://platform.deepseek.com/)
2. Go to Supabase Dashboard > Project Settings > Edge Functions
3. Add secret:
   - Name: `DEEPSEEK_API_KEY`
   - Value: Your DeepSeek API key

### 5. Deploy Edge Function

```bash
# Install Supabase CLI if not installed
npm install -g supabase

# Deploy function
supabase functions deploy rewrite-message
```

### 6. Start Development Server

```bash
npm run dev
```

Visit: `http://app.localhost:8080/FixMyText`

## ✅ Verification Steps

### Test Guest Mode
1. Open `http://app.localhost:8080/FixMyText`
2. Paste: "hello how r u doing today"
3. Select tone: "Professional"
4. Click "Rewrite Message"
5. ✓ Should see improved text
6. ✓ Should see "2 rewrites remaining"

### Test User Registration
1. Click "Login" button
2. Click "Don't have an account? Sign up"
3. Enter email and password
4. Check email for verification link
5. ✓ Should be logged in
6. ✓ Should see "20 rewrites remaining"

### Test Translation
1. Enter text: "How are you doing?"
2. Select language: "Chinese (Simplified)"
3. Click "Rewrite Message"
4. ✓ Should see both English rewrite and Chinese translation

### Test History
1. After making a rewrite, scroll down
2. ✓ Should see entry in History section
3. Click expand button
4. ✓ Should see full original and rewritten text
5. Click copy button
6. ✓ Should copy text to clipboard

## 🎨 UI Components Overview

### Main Page (`/FixMyText`)
- **Header**: Logo, user info, login/logout
- **Usage Alert**: Shows remaining rewrites
- **Input Section**: Text area, tone/length/language selectors
- **Output Section**: Rewritten text and optional translation
- **History Section**: Past rewrites with expand/delete

### Components Created
```
src/components/
├── RewriteInput.tsx      # Text input with character count
├── ControlPanel.tsx      # Tone, length, language selectors
├── RewriteOutput.tsx     # Display results with copy buttons
├── HistorySection.tsx    # Collapsible history list
└── AuthModal.tsx         # Sign up/sign in dialog
```

## 📊 Usage Limits

| User Type | Rewrites | History | Persistence |
|-----------|----------|---------|-------------|
| Guest | 3 | Session only | Clears on refresh |
| Free Account | 20/month | Database | Permanent |
| Paid Account | Unlimited | Database | Permanent |

## 🐛 Common Issues

### "Edge Function Error"
- Check `DEEPSEEK_API_KEY` is set in Supabase Dashboard
- View logs: `supabase functions logs rewrite-message`
- Verify DeepSeek account has credits

### "History Not Saving"
- Make sure user is logged in (not guest)
- Check Supabase RLS policies are enabled
- Verify migration was applied

### "Login Not Working"
- Check `.env.local` has correct Supabase credentials
- Verify email confirmation is enabled in Supabase
- Check redirect URLs in Supabase Dashboard

### "Guest Limit Not Resetting"
- Guest usage is stored in `localStorage`
- Clear browser storage to reset
- Or use incognito/private window

## 📝 Quick Reference

### Default Settings
- **Tone**: Neutral
- **Length**: Same
- **Translation**: None
- **Max Characters**: 5000

### Supported Languages
- Chinese (Simplified)
- Spanish
- Thai
- German
- Japanese
- French

### Tone Options
- Neutral (default)
- Casual
- Professional
- Formal
- Friendly / Warm
- Confident
- Apologetic
- Direct / Concise

## 🔗 Important URLs

### Development
- App: `http://app.localhost:8080/FixMyText`
- Main Site: `http://localhost:8080`

### Supabase Dashboard
- Project: `https://supabase.com/dashboard/project/your-project-ref`
- SQL Editor: `/editor`
- Table Editor: `/editor`
- Edge Functions: `/functions`
- Authentication: `/auth/users`

### External Services
- DeepSeek Platform: https://platform.deepseek.com/
- DeepSeek Docs: https://platform.deepseek.com/docs

## 📚 Next Steps

After basic setup works:

1. **Customize Design**
   - Update colors in Tailwind config
   - Change logo and branding
   - Modify ModernMT-inspired theme

2. **Add Features**
   - Custom tone profiles
   - Batch rewriting
   - Export history as JSON/CSV
   - Keyboard shortcuts

3. **Deploy to Production**
   - See `FIXMYTEXT_DEPLOYMENT.md` for full guide
   - Set up monitoring
   - Configure custom domain

4. **Monetization**
   - Integrate Stripe for paid tier
   - Add subscription management
   - Create pricing page

## 🆘 Need Help?

- **Full Documentation**: See `FIXMYTEXT_README.md`
- **Deployment Guide**: See `FIXMYTEXT_DEPLOYMENT.md`
- **Supabase Issues**: Check Supabase logs and docs
- **DeepSeek Issues**: Check API status and quota

## ⚡️ Pro Tips

1. **Development**: Use `supabase start` for local Supabase instance
2. **Testing**: Create test accounts with `+tag` emails (e.g., `user+test@gmail.com`)
3. **Debugging**: Open browser dev tools and check Console/Network tabs
4. **Performance**: Monitor Edge Function cold starts and optimize prompts
5. **Costs**: Stay within free tiers during development (Supabase + DeepSeek)

---

**Ready to deploy?** → See `FIXMYTEXT_DEPLOYMENT.md`
**Need details?** → See `FIXMYTEXT_README.md`
