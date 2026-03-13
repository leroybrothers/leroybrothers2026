-- Fix: Remove overly permissive SELECT policy on newsletter_subscribers
-- This prevents any authenticated user from reading all subscriber emails

DROP POLICY IF EXISTS "Allow authenticated read" ON public.newsletter_subscribers;