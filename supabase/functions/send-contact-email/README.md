# Send Contact Email Edge Function

This Supabase Edge Function sends email notifications when a contact form is submitted.

## Features

- Sends beautifully formatted HTML emails to `info@guidanceinnovations.tech`
- Includes all submission details (name, email, company, message, language, timestamp)
- Sets reply-to address to the submitter's email for easy responses
- Works with Resend email service

## Setup

### 1. Install Supabase CLI

```bash
npm install -g supabase
```

### 2. Login and Link Project

```bash
supabase login
supabase link --project-ref xjmsgaegwvhgxdsvtnwk
```

### 3. Set Up Resend (Email Service)

1. Sign up for [Resend](https://resend.com) (free tier includes 100 emails/day)
2. Verify your domain `guidanceinnovations.tech` or use their test domain
3. Get your API key from the dashboard

### 4. Set Environment Variables

```bash
# Set the Resend API key as a secret
supabase secrets set RESEND_API_KEY=re_your_api_key_here
```

### 5. Deploy the Function

```bash
supabase functions deploy send-contact-email
```

## Testing Locally

```bash
# Start the function locally
supabase functions serve send-contact-email --env-file ./supabase/.env.local

# Test with curl
curl -i --location --request POST 'http://localhost:54321/functions/v1/send-contact-email' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Test User","email":"test@example.com","company":"Test Co","message":"This is a test message","language":"en","created_at":"2024-01-24T12:00:00Z"}'
```

## Alternative Email Services

If you prefer a different email service, you can modify the function to use:

- **SendGrid**: Replace Resend API calls with SendGrid
- **AWS SES**: Use AWS SDK for Deno
- **Mailgun**: Replace with Mailgun API
- **SMTP**: Use Deno's SMTP libraries

## Calling from Client

The function is automatically called from the contact form submission. See `src/components/ContactSection.tsx` for implementation details.

## Monitoring

View function logs in the Supabase Dashboard:
https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/functions/send-contact-email/logs
