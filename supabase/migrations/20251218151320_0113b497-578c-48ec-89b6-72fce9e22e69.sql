-- Create newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (subscribe)
CREATE POLICY "Allow anonymous subscribe" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to read subscribers
CREATE POLICY "Allow authenticated read" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (true);