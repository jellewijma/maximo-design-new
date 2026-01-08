-- Fix Storage Policies for catalog-images bucket
-- Run this in your Supabase SQL Editor

-- First, let's make sure the bucket exists (this won't error if it already exists)
INSERT INTO storage.buckets (id, name, public)
VALUES ('catalog-images', 'catalog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload catalog images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read catalog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete catalog images" ON storage.objects;

-- Allow authenticated users to upload to catalog-images bucket
CREATE POLICY "Authenticated users can upload catalog images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'catalog-images');

-- Allow authenticated users to update files in catalog-images bucket
CREATE POLICY "Authenticated users can update catalog images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'catalog-images')
WITH CHECK (bucket_id = 'catalog-images');

-- Allow authenticated users to delete files in catalog-images bucket
CREATE POLICY "Authenticated users can delete catalog images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'catalog-images');

-- Allow public (anyone) to read files in catalog-images bucket
CREATE POLICY "Public can read catalog images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'catalog-images');
