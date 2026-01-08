-- Complete Fix for All RLS Issues
-- Run this ENTIRE script in your Supabase SQL Editor

-- ============================================================================
-- PART 1: Fix Database Table Policies
-- ============================================================================

-- Drop existing table policies
DROP POLICY IF EXISTS "Enable read access for all users" ON catalogs;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON catalogs;
DROP POLICY IF EXISTS "Enable read access for published catalog pages" ON catalog_pages;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON catalog_pages;
DROP POLICY IF EXISTS "Public can view published catalogs" ON catalogs;
DROP POLICY IF EXISTS "Authenticated users can manage catalogs" ON catalogs;
DROP POLICY IF EXISTS "Public can view published catalog pages" ON catalog_pages;
DROP POLICY IF EXISTS "Authenticated users can manage catalog pages" ON catalog_pages;

-- Create new catalog policies
CREATE POLICY "Public can view published catalogs" ON catalogs
  FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage catalogs" ON catalogs
  FOR ALL TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create new catalog_pages policies
CREATE POLICY "Public can view published catalog pages" ON catalog_pages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM catalogs
      WHERE catalogs.id = catalog_pages.catalog_id
      AND catalogs.is_published = true
    )
  );

CREATE POLICY "Authenticated users can manage catalog pages" ON catalog_pages
  FOR ALL TO authenticated
  USING (auth.uid() IS NOT NULL);

-- ============================================================================
-- PART 2: Fix Storage Bucket Policies
-- ============================================================================

-- Make sure the bucket exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('catalog-images', 'catalog-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Drop existing storage policies
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload catalog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update catalog images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete catalog images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read catalog images" ON storage.objects;

-- Create storage policies
CREATE POLICY "Authenticated users can upload catalog images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'catalog-images');

CREATE POLICY "Authenticated users can update catalog images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'catalog-images')
WITH CHECK (bucket_id = 'catalog-images');

CREATE POLICY "Authenticated users can delete catalog images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'catalog-images');

CREATE POLICY "Public can read catalog images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'catalog-images');

-- ============================================================================
-- Verification Query
-- ============================================================================

-- Run this to verify policies are set correctly
SELECT
  schemaname,
  tablename,
  policyname,
  roles,
  cmd
FROM pg_policies
WHERE schemaname IN ('public', 'storage')
ORDER BY schemaname, tablename, policyname;
