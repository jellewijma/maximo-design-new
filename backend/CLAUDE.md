# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Maximo Design CMS is a catalog management system for managing product catalogs with image uploads. Built with Next.js 15 (App Router), Supabase for backend services, and shadcn/ui components with a dark theme.

## Development Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Building
npm run build        # Production build
npm start            # Run production build locally

# Code Quality
npm run lint         # Run ESLint
```

## Environment Setup

### Required Environment Variables

Create `.env.local` with Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Initial Supabase Setup

**Critical:** Run these SQL scripts in order when setting up a new Supabase project:

1. Run `supabase/schema.sql` - Creates tables and initial RLS policies
2. Run `supabase/complete-fix.sql` - Fixes RLS policies for proper authentication (use `auth.uid() IS NOT NULL` not `auth.role()`)
3. Create storage bucket `catalog-images` via Supabase UI (set to public)

**Common Issue:** If uploads fail with "new row violates row-level security policy", run `supabase/complete-fix.sql` which fixes both table and storage bucket policies.

## Architecture

### Authentication Flow

- **Middleware** (`middleware.ts`) protects `/admin/*` routes and redirects `/login` if authenticated
- Uses Supabase SSR for cookie-based auth with server/client separation
- All admin routes require authentication via `auth.uid() IS NOT NULL` RLS policies

### Supabase Client Pattern

**Two separate clients for different contexts:**

```typescript
// Browser-side (client components)
import { createClient } from "@/lib/supabase/client"

// Server-side (server components, API routes)
import { createClient } from "@/lib/supabase/server"
```

**Important:** Server client uses cookies for auth state. Always `await cookies()` in Next.js 15.

### Database Schema

**catalogs** - Main catalog metadata
- Has `is_published` flag for public/private state
- Tracks `created_by` user

**catalog_pages** - Individual page images
- Foreign key to `catalog_id` with CASCADE delete
- `page_number` for ordering
- `storage_path` references Supabase Storage file
- `image_url` is public URL for serving images

**Storage:** `catalog-images` bucket stores all images with path pattern: `{catalogId}/{pageNumber}.{ext}`

### Route Protection

Middleware (`middleware.ts`) handles:
- Redirect `/admin/*` → `/login` if not authenticated
- Redirect `/login` → `/admin` if already authenticated
- Matcher: `["/admin/:path*", "/login"]`

### Component Architecture

**Server Components:**
- `app/admin/page.tsx` - Fetches catalogs list
- `app/admin/catalogs/[id]/page.tsx` - Fetches catalog + pages
- `app/admin/layout.tsx` - Checks auth, wraps with header

**Client Components:**
- All components in `components/admin/*` use `"use client"` for interactivity
- `CatalogList`, `PageGrid` - Handle delete/update operations with optimistic UI
- `PageUploader` - Multi-file upload with progress tracking
- `CreateCatalogButton` - Dialog-based create form

### Upload Flow

1. User selects files in `PageUploader`
2. For each file:
   - Upload to Supabase Storage (`catalog-images/{catalogId}/{pageNumber}.{ext}`)
   - Get public URL
   - Create `catalog_pages` row with URL and metadata
   - Update progress state (0% → 70% upload → 100% complete)
3. Auto-refresh and clear after 2 seconds

## Styling & Theme

- **Dark mode by default** - `<html className="dark">` in root layout
- Uses Tailwind CSS with semantic tokens: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`
- shadcn/ui components styled for dark theme
- Custom CSS variables defined in `app/globals.css`

## Common Patterns

### Adding New shadcn/ui Components

```bash
cd backend
npx shadcn@latest add component-name
```

Components are added to `components/ui/` and can be imported via `@/components/ui/component-name`

### Database Queries

Always use Supabase client methods, not raw SQL:

```typescript
// Create
const { data, error } = await supabase.from('catalogs').insert({ ... }).select().single()

// Read with relations
const { data } = await supabase
  .from('catalogs')
  .select('*, catalog_pages(*)')
  .eq('is_published', true)

// Update
const { error } = await supabase.from('catalogs').update({ ... }).eq('id', id)

// Delete (cascades to catalog_pages)
const { error } = await supabase.from('catalogs').delete().eq('id', id)
```

### File Uploads

```typescript
// Upload file
const { error } = await supabase.storage
  .from('catalog-images')
  .upload(path, file, { cacheControl: '3600', upsert: false })

// Get public URL
const { data: { publicUrl } } = supabase.storage
  .from('catalog-images')
  .getPublicUrl(path)

// Delete file
const { error } = await supabase.storage
  .from('catalog-images')
  .remove([path])
```

## Key Implementation Details

### RLS Policies

**Critical:** Supabase RLS policies use `auth.uid() IS NOT NULL` for authenticated checks, NOT `auth.role() = 'authenticated'` (this doesn't work).

Policies:
- Public can SELECT published catalogs/pages
- Authenticated users can do ALL operations on catalogs/pages
- Storage bucket allows authenticated INSERT/UPDATE/DELETE, public SELECT

### Progress Tracking

`PageUploader` tracks per-file upload state:
- `uploading` (0-70%) - File being sent to storage
- `processing` (70-100%) - Creating database entry
- `complete` (100%) - Success
- `error` - Shows error message

### Next.js 15 App Router

- All routes use async server components
- `params` are now Promises and must be awaited
- Use `router.refresh()` to revalidate server component data
- Middleware runs on edge runtime

## Troubleshooting

### Authentication Issues

- **"Error: No user found"** - User not created in Supabase Auth dashboard
- **"Invalid JWT"** - Clear cookies and re-login
- Check `.env.local` has correct Supabase URL and anon key

### Upload Failures

- **"new row violates row-level security policy"** - Run `supabase/complete-fix.sql`
- **Storage 404** - Ensure `catalog-images` bucket exists and is public
- Check browser console for detailed Supabase errors

### Development Server

- Server runs on port 3000 by default
- Hot reload works for most changes
- Middleware changes may require server restart
- Environment variable changes always require restart
