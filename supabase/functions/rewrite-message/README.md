# Rewrite Message Edge Function

This Supabase Edge Function handles AI-powered message rewriting using DeepSeek V3 API.

## Features

- Rewrites text with grammar improvements and natural phrasing
- Supports multiple tones (neutral, casual, professional, formal, etc.)
- Supports length adjustments (shorter, same, longer)
- Optional translation to 6 languages (Chinese, Spanish, Thai, German, Japanese, French)
- Usage tracking and limits (Guest: 3, Free: 20/month, Paid: unlimited)
- History storage for authenticated users

## Environment Variables

Set these in your Supabase Dashboard under Project Settings > Edge Functions:

```
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

## Deployment

```bash
supabase functions deploy rewrite-message
```

## Usage

### Authenticated Request

```typescript
const { data, error } = await supabase.functions.invoke('rewrite-message', {
  body: {
    text: "Your original message here",
    tone: "professional",
    length: "same",
    language: "zh" // optional
  }
});
```

### Guest Request

Guest users can make requests without authentication, but are limited to 3 rewrites total (tracked client-side).

## Response Format

```json
{
  "rewritten": "Your improved message here",
  "translation": "Translated version (if requested)",
  "usage": {
    "remaining": 19,
    "limit": 20,
    "tier": "free"
  }
}
```

## Error Responses

- 400: Invalid request (missing text)
- 429: Monthly limit reached
- 500: Internal server error
