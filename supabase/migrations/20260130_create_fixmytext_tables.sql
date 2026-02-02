-- Create rewrite_history table
CREATE TABLE IF NOT EXISTS public.rewrite_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  original_text TEXT NOT NULL,
  rewritten_text TEXT NOT NULL,
  translation TEXT,
  settings JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for faster user queries
CREATE INDEX IF NOT EXISTS idx_rewrite_history_user_id ON public.rewrite_history(user_id);
CREATE INDEX IF NOT EXISTS idx_rewrite_history_created_at ON public.rewrite_history(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.rewrite_history ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own history
CREATE POLICY "Users can view own rewrite history"
  ON public.rewrite_history
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own history
CREATE POLICY "Users can insert own rewrite history"
  ON public.rewrite_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own history
CREATE POLICY "Users can delete own rewrite history"
  ON public.rewrite_history
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create user_usage table for tracking limits
CREATE TABLE IF NOT EXISTS public.user_usage (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  monthly_rewrites INTEGER DEFAULT 0,
  last_reset_at TIMESTAMPTZ DEFAULT NOW(),
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'paid')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.user_usage ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own usage
CREATE POLICY "Users can view own usage"
  ON public.user_usage
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can update their own usage
CREATE POLICY "Users can update own usage"
  ON public.user_usage
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Function to auto-create user_usage record on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_usage (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user_usage on new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Function to reset monthly usage (to be run monthly via cron)
CREATE OR REPLACE FUNCTION public.reset_monthly_usage()
RETURNS void AS $$
BEGIN
  UPDATE public.user_usage
  SET 
    monthly_rewrites = 0,
    last_reset_at = NOW(),
    updated_at = NOW()
  WHERE last_reset_at < NOW() - INTERVAL '1 month';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
