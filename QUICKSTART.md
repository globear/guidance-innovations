# Quick Start Guide - Contact Form Integration

## 🚀 Get Started in 3 Steps

### Step 1: Configure Environment (2 minutes)

```bash
# Copy the example file
cp env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://xjmsgaegwvhgxdsvtnwk.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Where to find these:**
👉 https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/settings/api

### Step 2: Create Database Table (1 minute)

1. Go to: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/sql/new
2. Copy the contents of `supabase/migrations/20260124_create_contact_submissions.sql`
3. Paste and click **Run**

### Step 3: Restart Dev Server

```bash
npm run dev
```

## ✅ That's It!

Your contact form now saves to Supabase! 

Test it by:
1. Going to your website's contact section
2. Filling out the form
3. Checking submissions: https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/editor/public/contact_submissions

## 📧 Want Email Notifications?

See the full setup guide: `SUPABASE_SETUP.md`

Quick version:
```bash
# Sign up at resend.com, get API key, then:
supabase secrets set RESEND_API_KEY=your_key
supabase functions deploy send-contact-email
```

## 📚 Documentation

- **Full Setup Guide**: `SUPABASE_SETUP.md`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Edge Function Guide**: `supabase/functions/send-contact-email/README.md`

## ❓ Troubleshooting

**"Configuration Error" when submitting form?**
- Check that `.env.local` exists and has valid values
- Restart dev server

**Form submits but no data in database?**
- Verify migration was run successfully
- Check browser console for errors

**Need help?**
- Check `SUPABASE_SETUP.md` for detailed troubleshooting
