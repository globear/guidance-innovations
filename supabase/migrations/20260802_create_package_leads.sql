-- Package inquiry leads from /package wizard
CREATE TABLE IF NOT EXISTS public.package_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    package TEXT NOT NULL,
    website_status TEXT NOT NULL,
    add_ons TEXT[] NOT NULL DEFAULT '{}',
    name TEXT NOT NULL,
    business_name TEXT NOT NULL,
    website_url TEXT,
    phone TEXT NOT NULL,
    line_id TEXT,
    email TEXT NOT NULL,
    preferred_contact TEXT,
    message TEXT,
    language TEXT NOT NULL CHECK (language IN ('en', 'th', 'zh')),
    user_agent TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost'))
);

CREATE INDEX IF NOT EXISTS package_leads_created_at_idx ON public.package_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS package_leads_email_idx ON public.package_leads(email);
CREATE INDEX IF NOT EXISTS package_leads_status_idx ON public.package_leads(status);

ALTER TABLE public.package_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert on package_leads"
    ON public.package_leads
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "Allow authenticated select on package_leads"
    ON public.package_leads
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated update on package_leads"
    ON public.package_leads
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on package_leads"
    ON public.package_leads
    FOR DELETE
    TO authenticated
    USING (true);

COMMENT ON TABLE public.package_leads IS 'Stores AI package quote requests from the /package wizard';
