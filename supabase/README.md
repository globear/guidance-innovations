# Supabase Setup

This directory contains database migrations and edge functions for the GuidanceInnovations project.

## Database Migration

### Option 1: Using Supabase Dashboard (Recommended for beginners)

1. Go to [Supabase SQL Editor](https://supabase.com/dashboard/project/xjmsgaegwvhgxdsvtnwk/sql/new)
2. Copy the contents of `migrations/20260124_create_contact_submissions.sql`
3. Paste it into the SQL editor
4. Click "Run" to execute the migration

### Option 2: Using Supabase CLI

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref xjmsgaegwvhgxdsvtnwk

# Run migrations
supabase db push
```

## Edge Functions

Edge functions are located in the `functions/` directory. See individual function READMEs for deployment instructions.

## Verification

After running the migration, verify the table was created:

```sql
-- Check if table exists
SELECT * FROM information_schema.tables WHERE table_name = 'contact_submissions';

-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename = 'contact_submissions';
```
