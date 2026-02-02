# Supabase Integration Setup Guide

This guide will help you complete the setup of the contact form integration with Supabase.

## Overview

Your contact form is now integrated with Supabase to:
- ✅ Save all form submissions to a PostgreSQL database
- ✅ Track which language version (EN/TH/ZH) the user was viewing
- ✅ Send email notifications to info@guidanceinnovations.tech
- ✅ Capture user agent and metadata for analytics

## Step 1: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```

2. Get your Supabase credentials:
   - Go to: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/settings/api
   - Copy the **Project URL** (should be: `https://xjmsgaegwvhgxdsvtnwk.supabase.co`)
   - Copy the **anon/public** key (starts with `eyJ...`)

3. Edit `.env.local` and replace the placeholder values:
   ```env
   VITE_SUPABASE_URL=https://xjmsgaegwvhgxdsvtnwk.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGc...your_actual_key_here
   ```

4. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 2: Create the Database Table

### Option A: Using Supabase Dashboard (Recommended)

1. Go to the [SQL Editor](https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/sql/new)
2. Open the file: `supabase/migrations/20260124_create_contact_submissions.sql`
3. Copy the entire contents
4. Paste into the SQL editor
5. Click **Run** to execute

### Option B: Using Supabase CLI

```bash
# Install CLI globally
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref xjmsgaegwvhgxdsvtnwk

# Push migrations
supabase db push
```

## Step 3: Verify Database Setup

Run this query in the SQL Editor to verify:

```sql
-- Check table exists
SELECT * FROM information_schema.tables 
WHERE table_name = 'contact_submissions';

-- Check RLS policies
SELECT * FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- View table structure
\d contact_submissions
```

You should see:
- ✅ Table `contact_submissions` exists
- ✅ 4 RLS policies are active
- ✅ Columns: id, created_at, name, email, company, message, language, user_agent, ip_address

## Step 4: Set Up Email Notifications (Optional but Recommended)

### 4.1 Sign Up for Resend

1. Go to [Resend.com](https://resend.com) and create a free account
2. Verify your domain `guidanceinnovations.tech` (or use their test domain for development)
3. Get your API key from the dashboard

### 4.2 Configure Supabase Edge Function

```bash
# Set the Resend API key as a Supabase secret
supabase secrets set RESEND_API_KEY=re_your_api_key_here
```

### 4.3 Deploy the Edge Function

```bash
# Deploy the email notification function
supabase functions deploy send-contact-email
```

### 4.4 Test the Function

```bash
# Test locally first
supabase functions serve send-contact-email

# In another terminal, test with curl:
curl -i --location --request POST 'http://localhost:54321/functions/v1/send-contact-email' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message",
    "language": "en",
    "created_at": "2024-01-24T12:00:00Z"
  }'
```

## Step 5: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your website

3. Fill out and submit the form

4. Check the following:
   - ✅ Form shows success message
   - ✅ Data appears in Supabase table: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/editor/public/contact_submissions
   - ✅ Email notification received at info@guidanceinnovations.tech

## Troubleshooting

### Form submission fails with "Configuration Error"

**Problem:** Environment variables are not loaded

**Solution:**
1. Ensure `.env.local` exists in the project root
2. Verify the file contains valid values (not placeholders)
3. Restart the dev server: `npm run dev`

### Database error: "permission denied for table contact_submissions"

**Problem:** RLS policies not properly configured

**Solution:**
1. Re-run the migration SQL
2. Verify policies exist: `SELECT * FROM pg_policies WHERE tablename = 'contact_submissions';`
3. Ensure you're using the anon key, not the service role key

### Email notifications not working

**Problem:** Edge function not deployed or Resend not configured

**Solution:**
1. Check if the function is deployed: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/functions
2. Verify Resend API key is set: `supabase secrets list`
3. Check function logs for errors
4. Note: Form submissions will still work even if email fails

### CORS errors when submitting form

**Problem:** Edge function CORS headers not configured

**Solution:**
- The function already includes CORS headers
- If issues persist, check the function logs
- Ensure the function is deployed to production, not just local

## Database Schema

The `contact_submissions` table has the following structure:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `created_at` | TIMESTAMP | Submission timestamp (UTC) |
| `name` | TEXT | Contact name (required) |
| `email` | TEXT | Contact email (required) |
| `company` | TEXT | Company name (optional) |
| `message` | TEXT | Message content (required) |
| `language` | TEXT | Site language: 'en', 'th', or 'zh' |
| `user_agent` | TEXT | Browser user agent string |
| `ip_address` | TEXT | IP address (currently null, requires server-side capture) |

## Security Features

- ✅ **Row Level Security (RLS)** enabled on all tables
- ✅ Anonymous users can only INSERT (submit forms)
- ✅ Only authenticated users can view submissions
- ✅ Updates are disabled (submissions are immutable)
- ✅ Environment variables are validated before use
- ✅ Client-side validation with Zod schemas

## Monitoring & Analytics

### View Submissions

Dashboard: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/editor/public/contact_submissions

### Query Examples

```sql
-- Recent submissions
SELECT * FROM contact_submissions 
ORDER BY created_at DESC 
LIMIT 10;

-- Submissions by language
SELECT language, COUNT(*) as count 
FROM contact_submissions 
GROUP BY language;

-- Submissions by date
SELECT DATE(created_at) as date, COUNT(*) as count 
FROM contact_submissions 
GROUP BY DATE(created_at) 
ORDER BY date DESC;
```

### Function Logs

View Edge Function logs: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/functions/send-contact-email/logs

## Next Steps

1. ✅ Complete Steps 1-3 above to get basic form submission working
2. ✅ Set up email notifications (Step 4) for production use
3. ✅ Test thoroughly in all three languages (EN/TH/ZH)
4. ✅ Monitor the database for submissions
5. ✅ Consider adding a dashboard to view/manage submissions

## Alternative Email Services

If you prefer not to use Resend, you can modify the Edge Function to use:

- **SendGrid**: Popular, generous free tier
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Developer-friendly API
- **Postmark**: Focus on transactional emails

See `supabase/functions/send-contact-email/README.md` for details.

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check Supabase function logs
3. Verify all environment variables are set correctly
4. Ensure the migration was run successfully

For Supabase-specific issues, refer to: https://supabase.com/docs
