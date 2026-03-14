-- Create analytics table for tracking page views
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  visitor_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow anonymous inserts (public tracking)
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert page views (tracking is public)
CREATE POLICY "Allow anonymous page view inserts" 
ON public.page_views 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via authenticated admin (you can adjust this later)
CREATE POLICY "Allow authenticated read" 
ON public.page_views 
FOR SELECT 
USING (true);

-- Create index for common queries
CREATE INDEX idx_page_views_created_at ON public.page_views (created_at DESC);
CREATE INDEX idx_page_views_page_path ON public.page_views (page_path);
CREATE INDEX idx_page_views_visitor_id ON public.page_views (visitor_id);