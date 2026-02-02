# FixMyText - AI Message Rewriter

FixMyText is an AI-powered message rewriter designed for non-native English speakers. It helps improve grammar, clarity, and naturalness while preserving the original meaning.

## Features

- **AI-Powered Rewriting**: Uses DeepSeek V3 for natural, human-like text improvements
- **Customizable Output**:
  - 8 tone options (Neutral, Casual, Professional, Formal, etc.)
  - 3 length options (Shorter, Same, Longer)
  - Optional translation to 6 languages
- **Usage Tiers**:
  - Guest: 3 rewrites (session-based)
  - Free Account: 20 rewrites/month + persistent history
  - Paid: Unlimited rewrites (future implementation)
- **History Management**: Save and review past rewrites

## Architecture

### Frontend
- React + TypeScript
- Tailwind CSS + shadcn/ui components
- ModernMT-inspired design (Purple & Yellow theme)

### Backend
- Supabase for:
  - PostgreSQL database
  - Authentication
  - Edge Functions (serverless API)
- DeepSeek V3 API for AI processing

### Database Schema

**rewrite_history**
- Stores all rewrites for authenticated users
- Includes original text, rewritten text, translation, settings

**user_usage**
- Tracks monthly rewrite counts
- Manages subscription tiers
- Auto-resets monthly via cron job

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Setup

Run the migration:

```bash
supabase migration up
```

Or manually execute:
```bash
supabase db push
```

### 3. DeepSeek API Setup

1. Get API key from [DeepSeek](https://platform.deepseek.com/)
2. Add to Supabase Dashboard:
   - Go to Project Settings > Edge Functions
   - Add secret: `DEEPSEEK_API_KEY`

### 4. Deploy Edge Function

```bash
supabase functions deploy rewrite-message
```

### 5. Run Development Server

```bash
npm run dev
```

Access at: `http://app.localhost:8080/FixMyText`

## Usage

### Guest Users
1. Visit `/FixMyText`
2. Paste text and click "Rewrite Message"
3. Get 3 free rewrites
4. History stored in browser (clears on refresh)

### Registered Users
1. Click "Login" to create account
2. Get 20 rewrites/month
3. History saved permanently
4. Access across devices

## Component Structure

```
src/
├── pages/
│   └── FixMyText.tsx         # Main page component
├── components/
│   ├── RewriteInput.tsx      # Text input with character count
│   ├── ControlPanel.tsx      # Tone/Length/Language selectors
│   ├── RewriteOutput.tsx     # Display rewritten text + translation
│   ├── HistorySection.tsx    # History list with expand/delete
│   └── AuthModal.tsx         # Sign up/Sign in modal
├── hooks/
│   └── useGuestUsage.ts      # Guest usage tracking (localStorage)
└── types/
    └── database.ts           # TypeScript types for DB
```

## API Reference

### Edge Function: `rewrite-message`

**Request:**
```json
{
  "text": "Your message here",
  "tone": "professional",
  "length": "same",
  "language": "zh"
}
```

**Response:**
```json
{
  "rewritten": "Improved message...",
  "translation": "Translation (if requested)...",
  "usage": {
    "remaining": 19,
    "limit": 20,
    "tier": "free"
  }
}
```

## Future Enhancements

- [ ] Stripe integration for paid tier
- [ ] Batch rewriting (multiple messages)
- [ ] Custom tone profiles
- [ ] Browser extension
- [ ] Mobile app
- [ ] Real-time collaboration
- [ ] More languages

## Troubleshooting

### Edge Function Not Working
- Check `DEEPSEEK_API_KEY` is set in Supabase Dashboard
- Verify function is deployed: `supabase functions list`
- Check logs: `supabase functions logs rewrite-message`

### History Not Saving
- Ensure user is logged in
- Check RLS policies are enabled
- Verify migration was applied

### Guest Usage Not Clearing
- Clear browser localStorage
- Or use dev tools: `localStorage.clear()`

## Support

For issues or questions:
1. Check Supabase logs
2. Check browser console
3. Review Edge Function logs

## License

MIT
