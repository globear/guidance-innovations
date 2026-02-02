-- Create contact_submissions table for storing contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL,
    language TEXT NOT NULL CHECK (language IN ('en', 'th', 'zh')),
    user_agent TEXT,
    ip_address TEXT
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions(created_at DESC);

-- Create index on email for potential lookups
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to INSERT (submit forms)
CREATE POLICY "Allow anonymous insert" ON public.contact_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Policy: Allow authenticated users to SELECT (view submissions)
CREATE POLICY "Allow authenticated select" ON public.contact_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy: Deny all UPDATE operations (submissions should be immutable)
CREATE POLICY "Deny all updates" ON public.contact_submissions
    FOR UPDATE
    TO public
    USING (false);

-- Policy: Allow authenticated users to DELETE (for data cleanup if needed)
CREATE POLICY "Allow authenticated delete" ON public.contact_submissions
    FOR DELETE
    TO authenticated
    USING (true);

-- Add comments for documentation
COMMENT ON TABLE public.contact_submissions IS 'Stores contact form submissions from the website';
COMMENT ON COLUMN public.contact_submissions.language IS 'Website language when form was submitted: en, th, or zh';
COMMENT ON COLUMN public.contact_submissions.user_agent IS 'Browser user agent string';
COMMENT ON COLUMN public.contact_submissions.ip_address IS 'IP address of the submitter (if available)';
