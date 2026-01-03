# Maximo Design - Website Discovery Document

**Project:** Maximo Design Website Frontend
**Date:** 2026-01-03
**Source:** Design Specification Analysis
**Figma:** https://www.figma.com/design/Ltuxg6pC7VELD9U1hG7cot/Maximo-Design

---

## Executive Summary

Maximo Design is a premium bathroom faucet brand requiring a product catalog website with three core pages: Homepage, Catalog, and Contact. The site emphasizes visual product presentation with a clean, minimalist design approach featuring high-quality product imagery and an intuitive filtering system.

**Key Characteristics:**
- **Purpose:** Product catalog and brand showcase
- **Target Audience:** B2B (retailers/distributors) and premium consumers
- **Core Functionality:** Browse products by finish, view catalog, contact for orders
- **Technical Approach:** Responsive design (desktop-first, 1920px and 768px breakpoints)
- **Content Type:** Image-heavy product catalog with minimal text

---

## 1. Site Structure & Navigation

### 1.1 Site Map

```
Maximo Design Website
│
├── Home (/)
│   ├── Hero Section
│   ├── Brand Introduction
│   └── Product Category Preview
│
├── Catalog (/catalogus)
│   ├── Filter Sidebar (by finish)
│   ├── Product Grid/Thumbnails
│   └── Product Detail Viewer
│
└── Contact (/contact)
    ├── Contact Information
    └── Call-to-Action
```

### 1.2 Navigation System

**Desktop Navigation (1920px):**
- Logo: Top-left position (30px from edge, 32px from top)
- Primary Navigation Button: 310px x 49px (top-right)
- Secondary Navigation Button: 180px x 49px (top-right)
- Header Height: 119px with full-width divider

**Tablet/Mobile Navigation (768px):**
- Hamburger menu icon (condensed navigation)
- Logo remains visible
- Responsive header maintained

**Navigation Links:**
- Home (logo clickable)
- Catalogus (primary nav)
- Contact (primary nav)
- Additional navigation item (secondary nav - **NOT SPECIFIED**)

---

## 2. Page Inventory & Content

### 2.1 Homepage

**Layout:** Two-column split (50/50)

**Left Column:**
- Brand Title: "Maximo Design" (H1)
- Tagline: "Kranen met kwaliteit" (Subtitle)
- Brand Description: Introductory paragraph (**CONTENT NOT PROVIDED**)
- Product Category Preview Grid

**Right Column:**
- Hero Image: Large lifestyle/product imagery (960px x 961px)

**Product Category Cards:**
- Grid layout (responsive: 2-column desktop, 1-column tablet)
- Each card contains:
  - Category image (930px x 480px desktop, 768px x 480px tablet)
  - Category name (e.g., "Brons kranen", "Gun Metal kranen", "Goud kranen")
  - Page reference (e.g., "pg 05 - 11")
  - Clickable to navigate to catalog filtered by that finish

**Estimated Content Requirements:**
- 3-5 product finish categories
- Hero image: 1 high-quality lifestyle photo
- Category images: 3-5 category-specific images
- Brand description: ~100-150 words (**NEEDS COPY**)

### 2.2 Catalog Page

**Layout:** Sidebar + Main Content

**Header:**
- Title: "Catalogus" (H2)

**Left Sidebar (Filter System):**
- Width: ~160px
- Finish Categories (vertically stacked):
  - Gun Metal
  - Goud (Gold)
  - Brons (Bronze)
  - **Additional finishes not specified**
- Product thumbnail grid under each category:
  - 2-column grid layout
  - Thumbnail size: ~75px x 96-98px
  - Product numbers displayed
  - Clickable to view in main viewer
  - Visual highlight for current selection

**Main Content Area (Product Viewer):**
- Two-column layout (side-by-side product images)
- Left panel: 586px width
- Right panel: 595px width
- Height: 840px
- Displays catalog pages (simulating physical catalog experience)

**Footer/Pagination:**
- Page indicator: "40 / 92" format (current page / total pages)
- Navigation controls: Previous/Next buttons (~258px x 72px)

**Interaction Flow:**
1. User clicks category from homepage OR uses sidebar filter
2. Catalog displays filtered products
3. User clicks thumbnail to view in main viewer
4. User navigates through catalog pages with pagination
5. User can switch finishes using sidebar filters

**Content Requirements:**
- Product images: Multiple high-resolution images per product
- Product numbers/SKUs: Complete catalog numbering system
- Total catalog pages: 92 pages (as indicated in pagination)
- Products per finish: Variable (**NEEDS INVENTORY COUNT**)

### 2.3 Contact Page

**Layout Options:** Two variants specified

**Variant 1: Centered Text Layout**
- Title: "Contact" (H2) - centered
- Message text: "Wilt u een bestelling plaatsen of heeft u een vraag? Wij staan voor u klaar."
- Contact information: sanisupply@info.nl (email link)
- Additional contact details (**NOT SPECIFIED**)

**Variant 2: Two-Column Layout**
- Left column: Contact content (same as Variant 1)
- Right column: Contact image (960px x 961px)

**Content Requirements:**
- Email: sanisupply@info.nl (mailto link)
- Phone number: **NOT PROVIDED**
- Physical address: **NOT PROVIDED**
- Business hours: **NOT PROVIDED**
- Contact form: **NOT SPECIFIED** (yes/no?)
- Social media links: **NOT PROVIDED**
- Contact image: 1 high-quality image (if using two-column variant)

---

## 3. Component Inventory

### 3.1 Global Components

**Header Component:**
- Logo image (58px x 49px)
- Navigation buttons (2 sizes: 310px x 49px, 180px x 49px)
- Full-width divider line (1px at y=119)
- Responsive: Transforms to hamburger menu on tablet/mobile

**Footer Component:**
- Full-width divider line (1px at y=1080)
- **Content not specified** (copyright, links, etc.)

### 3.2 Homepage Components

**Hero Section:**
- Two-column container
- Text content block (left)
- Image container (right, 960px x 961px)
- Responsive: Stacks vertically on tablet/mobile

**Product Category Card:**
- Desktop: 930px x 480px
- Tablet: 768px x 480px (full-width)
- Image container
- Category title overlay/label
- Page reference label
- Hover state (**NOT SPECIFIED**)
- Click action: Navigate to catalog with filter applied

### 3.3 Catalog Components

**Filter Sidebar:**
- Container: ~160px width, full height
- Vertical dividers
- Section headers (finish names)
- Horizontal section dividers
- Product thumbnail grid:
  - 2-column grid
  - ~75px x 96-98px per thumbnail
  - Product number label
  - Selection highlight indicator
  - Hover state (**NOT SPECIFIED**)

**Product Viewer:**
- Two-panel container (split layout)
- Left panel: 586px x 840px
- Right panel: 595px x 840px
- Image display areas
- **Zoom functionality: NOT SPECIFIED**
- **Image loading states: NOT SPECIFIED**

**Pagination Component:**
- Page indicator text: "XX / 92" format
- Previous button (~258px x 72px)
- Next button (~258px x 72px)
- Button states: normal, hover, disabled (**STYLING NOT SPECIFIED**)

### 3.4 Contact Components

**Contact Info Block:**
- Title (H2)
- Message text
- Email link (mailto:)
- **Additional fields as needed**

**Contact Image Container:**
- 960px x 961px (optional, for two-column variant)

---

## 4. Technical Requirements

### 4.1 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Desktop | 1920px | Two-column layouts, full sidebar, large images |
| Tablet | 768px | Single-column stacks, full-width cards, hamburger menu |
| Mobile | **NOT SPECIFIED** | Assumed < 768px, needs definition |

**Missing Specifications:**
- Mobile breakpoint (suggest 375px or 390px)
- Intermediate breakpoints (1024px, 1440px)
- Behavior between 768px and 1920px

### 4.2 Layout System

**Grid Specifications:**
- Desktop: 12-column grid
- Content max-width: 1920px
- Gutter size: 30px left padding from edge
- **Column gaps: NOT SPECIFIED**
- **Row gaps: NOT SPECIFIED**

**Layout Approach Recommendation:**
- CSS Grid for main page layouts
- Flexbox for component internals
- CSS Grid for product category cards and thumbnail grids

### 4.3 Typography System

**Headings:**
| Element | Container Height | Notes | **Font Family Missing** |
|---------|-----------------|-------|------------------------|
| H1 (Brand Title) | 110px | "Maximo Design" | Font not specified |
| H2 (Section Title) | 110px | "Catalogus", "Contact" | Font not specified |
| Tagline | 52px | "Kranen met kwaliteit" | Font not specified |

**Body Text:**
| Element | Container Height | Usage | **Font Family Missing** |
|---------|-----------------|-------|------------------------|
| Description | Standard | Intro paragraphs | Font not specified |
| Labels | 23px | Category labels, page numbers | Font not specified |
| Navigation | Standard | Menu items | Font not specified |

**Critical Missing Information:**
- Font family/families (primary, secondary)
- Font weights (light, regular, medium, bold)
- Exact font sizes (only container heights provided)
- Line heights
- Letter spacing
- Font fallback stacks

### 4.4 Color System

**Status:** Severely underspecified

**Known Information:**
- Background: Light/White (assumed)
- Text: Dark (likely black or dark gray)
- Lines/Dividers: Thin lines throughout

**Product Finish Colors (for reference, not UI):**
- Gun Metal (dark metallic)
- Goud/Gold (golden/brass)
- Brons/Bronze (bronze)

**Missing Critical Information:**
- Exact hex/RGB values for all colors
- Primary brand color
- Accent colors
- Link colors (normal, hover, visited)
- Button colors (background, text, hover, disabled)
- Selection/highlight colors
- Border colors
- Shadow colors (if used)
- Error/success states

**Recommendation:** Extract from Figma design files or establish brand color palette.

### 4.5 Interactive States

**Missing Specifications for:**
- Hover states (links, buttons, cards, thumbnails)
- Active states
- Focus states (keyboard navigation)
- Disabled states
- Loading states
- Error states
- Transition timings and easing functions

### 4.6 Performance Requirements

**Specified Considerations:**
- Lazy loading for catalog images
- Optimized image formats (WebP with fallbacks)
- Responsive image srcsets

**Additional Requirements Needed:**
- Target page load time
- Target Time to Interactive (TTI)
- Image optimization guidelines (quality, compression)
- CDN requirements
- Browser support matrix
- Minimum supported browser versions

### 4.7 Accessibility Requirements

**Specified Considerations:**
- Sufficient color contrast
- Alt text for all product images
- Keyboard navigation support
- ARIA labels for interactive elements

**Additional Standards:**
- WCAG compliance level (A, AA, AAA) - **NOT SPECIFIED**
- Screen reader testing requirements
- Focus management for modals/overlays
- Skip navigation links
- Semantic HTML requirements

### 4.8 SEO Requirements

**Specified Considerations:**
- Semantic HTML structure
- Product structured data (Schema.org)
- Descriptive page titles and meta descriptions

**Additional Requirements Needed:**
- OpenGraph tags for social sharing
- Canonical URLs
- XML sitemap
- robots.txt configuration
- 404 page design and content
- URL structure/slugs (language: Dutch or bilingual?)

---

## 5. Image & Asset Requirements

### 5.1 Image Inventory

| Asset Type | Quantity | Dimensions | Format | Status |
|------------|----------|------------|--------|--------|
| Logo | 1 | 58px x 49px | SVG preferred | Required |
| Hero Images | 1-2 | 960px x 961px | JPG/WebP | Required |
| Category Images | 3-5 | 930px x 480px (desktop) | JPG/WebP | Required |
| Product Thumbnails | **Unknown** | ~75px x 96-98px | JPG/WebP | Required |
| Product Detail Images | **Unknown** | 586px x 840px | JPG/WebP | Required |
| Contact Image | 1 | 960px x 961px | JPG/WebP | Optional |

**Critical Questions:**
- Total number of products in catalog?
- How many images per product?
- Are products photographed from multiple angles?
- Are lifestyle images available for each finish category?
- Image sourcing: existing library or new photography needed?

### 5.2 Image Specifications

**Responsive Image Requirements:**
- 1x, 2x, 3x resolutions for retina displays
- Multiple sizes for responsive srcsets:
  - Thumbnails: 75px, 150px, 225px widths
  - Category cards: 768px, 930px, 1860px widths
  - Hero/Detail: 960px, 1920px widths

**Format Strategy:**
- Primary: WebP (modern browsers)
- Fallback: JPG (older browsers)
- SVG for logo and icons

**Optimization:**
- Compression quality: 80-85% for JPG
- Progressive JPG loading
- Lazy loading implementation (Intersection Observer or native)

### 5.3 Additional Assets Needed

**Icons:**
- Hamburger menu icon (mobile navigation)
- Close icon (mobile menu)
- Navigation arrows (pagination, carousel if added)
- External link icon (if needed)
- Social media icons (**IF APPLICABLE**)

**Placeholder Images:**
- Loading states
- Image not found/error state
- Product image coming soon

**Favicon Package:**
- favicon.ico (32x32)
- apple-touch-icon.png (180x180)
- favicon-16x16.png
- favicon-32x32.png
- android-chrome icons (192x192, 512x512)

---

## 6. Content Requirements

### 6.1 Website Copy Needed

**Homepage:**
- Brand description/introduction (~100-150 words) - **NOT PROVIDED**
- Category card titles (provided: "Brons kranen", etc.)
- Page references (provided: "pg 05 - 11", etc.)

**Catalog:**
- Page title: "Catalogus" (provided)
- Filter labels (provided: Gun Metal, Goud)
- Product numbers/SKUs (referenced but not provided)
- **Product names/descriptions: NOT SPECIFIED** (needed?)

**Contact:**
- Page title: "Contact" (provided)
- Message: "Wilt u een bestelling plaatsen of heeft u een vraag? Wij staan voor u klaar." (provided)
- Email: sanisupply@info.nl (provided)
- **Phone number: NOT PROVIDED**
- **Address: NOT PROVIDED**
- **Business hours: NOT PROVIDED**
- **Additional instructions: NOT PROVIDED**

**Global:**
- Navigation labels
- Footer content (copyright, links, disclaimers) - **NOT PROVIDED**
- 404 page content - **NOT SPECIFIED**
- Loading messages
- Error messages
- Alt text for all images - **NOT PROVIDED**

### 6.2 Metadata Needed

**Per Page:**
- Page titles (SEO)
- Meta descriptions
- OpenGraph titles
- OpenGraph descriptions
- OpenGraph images

**Global:**
- Site name
- Default meta description
- Author information
- Company/organization schema data

### 6.3 Legal/Compliance Content

**Status:** Not specified

**Typical Requirements:**
- Privacy policy - **NOT SPECIFIED**
- Cookie policy/consent - **NOT SPECIFIED**
- Terms and conditions - **NOT SPECIFIED**
- GDPR compliance (if applicable) - **NOT SPECIFIED**
- Accessibility statement - **NOT SPECIFIED**

---

## 7. Functional Requirements

### 7.1 Navigation Functionality

**Desktop:**
- Click logo → navigate to homepage
- Click navigation button → navigate to corresponding page
- Smooth scroll or instant navigation (**NOT SPECIFIED**)

**Mobile/Tablet:**
- Click hamburger icon → open mobile menu
- Click menu item → navigate and close menu
- Click outside menu → close menu
- Menu animation (**NOT SPECIFIED**)

### 7.2 Catalog Functionality

**Filter System:**
- Click finish category in sidebar → filter products by finish
- Visual indication of active filter
- Filter state persists during pagination
- **Default filter on page load: NOT SPECIFIED** (show all or specific finish?)
- **URL parameters for filtering: NOT SPECIFIED** (e.g., /catalogus?finish=gold)

**Product Selection:**
- Click thumbnail in sidebar → display in main viewer
- Visual indication of selected product
- **Auto-navigation to corresponding page: NOT SPECIFIED**
- **Deep linking to specific products: NOT SPECIFIED**

**Pagination:**
- Click next button → advance to next catalog page
- Click previous button → go to previous catalog page
- Disabled state when at first/last page
- **Keyboard navigation (arrow keys): NOT SPECIFIED**
- **Jump to page functionality: NOT SPECIFIED**
- **URL reflects current page: NOT SPECIFIED** (e.g., /catalogus/page/40)

**Product Display:**
- Display two catalog pages side-by-side (simulating physical catalog)
- Maintain aspect ratio and quality
- **Zoom functionality: NOT SPECIFIED**
- **Image gallery/carousel per product: NOT SPECIFIED**
- **Product information overlay: NOT SPECIFIED**

### 7.3 Contact Functionality

**Email Link:**
- Click email → open default email client with mailto: link
- Pre-populate recipient: sanisupply@info.nl

**Contact Form (if implemented):**
- **Form fields: NOT SPECIFIED**
- **Validation: NOT SPECIFIED**
- **Submission handling: NOT SPECIFIED**
- **Success/error messages: NOT SPECIFIED**
- **Email backend service: NOT SPECIFIED**

### 7.4 Missing Functional Requirements

**Critical Questions:**
- Search functionality: Is product search needed?
- Product detail pages: Individual pages per product or catalog viewer only?
- Shopping cart/e-commerce: Is online ordering needed or contact-only?
- Multi-language support: Dutch only or additional languages?
- Print catalog: Download PDF functionality?
- Favorites/wishlist: User ability to save products?
- Product comparison: Side-by-side comparison tool?
- Share functionality: Social sharing of products?

---

## 8. Technical Stack Recommendations

### 8.1 Suggested Technologies

**Frontend Framework:**
- React (with Next.js for SSR/SSG)
- Vue (with Nuxt for SSR/SSG)
- **OR** Vanilla HTML/CSS/JS (simpler, if no complex state management needed)

**Reasoning:** Image-heavy catalog with good SEO requirements suggests static site generation or server-side rendering.

**CSS Approach:**
- Tailwind CSS (utility-first, rapid development)
- CSS Modules (scoped styling)
- Styled Components (if using React)
- **OR** Vanilla CSS/SCSS (full control, no dependencies)

**Image Handling:**
- Next.js Image component (if using Next.js) - automatic optimization
- Sharp (Node.js image processing)
- Cloudinary or imgix (cloud-based image optimization)

**State Management:**
- Context API (if using React, lightweight)
- Redux (if complex state needed)
- Vuex/Pinia (if using Vue)
- **OR** None (vanilla JS state management)

### 8.2 Development Tools

**Version Control:**
- Git + GitHub/GitLab

**Package Manager:**
- npm or yarn or pnpm

**Build Tools:**
- Vite (fast, modern)
- Webpack (comprehensive, if needed)
- Parcel (zero-config)

**Code Quality:**
- ESLint (linting)
- Prettier (formatting)
- Husky (pre-commit hooks)

**Testing:**
- Jest (unit testing)
- React Testing Library (component testing)
- Cypress or Playwright (E2E testing)

### 8.3 Deployment & Hosting

**Static Hosting Options:**
- Vercel (optimized for Next.js)
- Netlify (excellent for static sites)
- GitHub Pages (free, simple)
- AWS S3 + CloudFront (scalable)

**Requirements Needed:**
- Hosting budget
- Domain name (existing or new?)
- SSL certificate (automatic with Vercel/Netlify)
- CDN requirements
- Analytics integration (Google Analytics, etc.)

---

## 9. Gaps & Questions for Clarification

### 9.1 Critical Gaps (Blockers)

1. **Typography:**
   - Font family/families not specified
   - Font sizes, weights, line heights missing
   - Need Figma inspection or brand guidelines

2. **Color Palette:**
   - No hex/RGB values provided
   - Brand colors not defined
   - Need Figma color extraction or brand guidelines

3. **Product Data:**
   - Total number of products unknown
   - Product SKUs/numbers not provided
   - Product metadata structure undefined
   - Data source/CMS not specified

4. **Interactive States:**
   - Hover, focus, active states not documented
   - Transition/animation specifications missing

5. **Content:**
   - Homepage brand description missing
   - Contact page details incomplete
   - Footer content not specified

### 9.2 High-Priority Questions

**Business & Strategy:**
1. Is this a B2B website (for retailers) or B2C (for consumers) or both?
2. Is e-commerce functionality planned (now or future)?
3. Are product prices displayed or is this contact-for-quote only?
4. Multi-language support needed? (Dutch only or English/other languages?)
5. What is the expected launch timeline?
6. What is the budget range?

**Product Catalog:**
7. How many total products in the catalog?
8. How many product finishes beyond the three mentioned (Gun Metal, Gold, Bronze)?
9. How many images per product?
10. Do products have names, descriptions, specifications?
11. Is product data coming from a database, CMS, or static JSON?
12. Will catalog be updated frequently (monthly, quarterly)?

**Functionality:**
13. Is product search functionality required?
14. Do products need individual detail pages?
15. Is PDF catalog download needed?
16. Are user accounts/login required?
17. Is there a wishlist/favorites feature?
18. Analytics requirements (Google Analytics, heatmaps, etc.)?

**Technical:**
19. Browser support requirements (IE11, last 2 versions of major browsers)?
20. WCAG compliance level (A, AA, AAA)?
21. Hosting preferences or constraints?
22. Existing backend/CMS to integrate with?
23. Form submission handling (email service, CRM integration)?

**Design:**
24. Are interactive prototypes available in Figma?
25. Can design system/component library be extracted from Figma?
26. Are there brand guidelines (logo usage, color usage, etc.)?
27. Animation/transition preferences (subtle, prominent, none)?

### 9.3 Nice-to-Have Clarifications

28. Mobile breakpoint specifics (375px, 390px, 428px?)
29. Intermediate breakpoint behavior (1024px, 1440px)
30. Loading states and skeleton screens
31. 404 and error page designs
32. Print stylesheet requirements
33. Social media presence and integration
34. Blog or news section (future consideration)
35. Video content support
36. Customer testimonials or case studies

---

## 10. Recommendations & Considerations

### 10.1 Design Recommendations

**1. Establish Complete Design System**
- Extract comprehensive design tokens from Figma:
  - Colors (primary, secondary, neutrals, semantic)
  - Typography (scales, weights, line heights)
  - Spacing (consistent spacing scale: 4px, 8px, 16px, etc.)
  - Shadows and elevation
  - Border radius values
  - Transitions and animations

**2. Component Library Approach**
- Build reusable component library before pages
- Document component variants and states
- Create Storybook for component development and documentation

**3. Accessibility First**
- Design focus states for all interactive elements
- Ensure 4.5:1 contrast ratio for normal text (WCAG AA)
- Plan for screen reader support from the start
- Include skip-to-content links

### 10.2 Technical Recommendations

**1. Static Site Generation (SSG)**
- Since product catalog appears relatively static
- Pre-render all pages for optimal performance and SEO
- Update catalog through build process when products change
- Use Next.js or similar for SSG with dynamic routing

**2. Image Optimization Strategy**
- Implement responsive images with srcset
- Use WebP with JPG fallbacks
- Lazy load images below the fold
- Consider progressive image loading (blur-up technique)
- Implement image CDN for automatic optimization (Cloudinary, imgix)

**3. Performance Budget**
- Target metrics:
  - First Contentful Paint (FCP): < 1.8s
  - Largest Contentful Paint (LCP): < 2.5s
  - Time to Interactive (TTI): < 3.5s
  - Total page size: < 2MB (initial load)

**4. Progressive Enhancement**
- Ensure core functionality works without JavaScript
- Enhance with JavaScript for better UX
- Catalog should be navigable even if JS fails

### 10.3 Content Recommendations

**1. Content Strategy**
- Develop brand voice guidelines for Dutch content
- Create product description templates
- Establish alt text guidelines for product images
- Plan for SEO-optimized product and category descriptions

**2. Product Data Structure**
- Define product schema:
  ```
  {
    sku: string,
    name: string,
    finish: string,
    category: string,
    images: [url, url, ...],
    catalogPage: number,
    description?: string,
    specifications?: {...}
  }
  ```

**3. Content Management**
- Consider headless CMS for easy updates (Contentful, Sanity, Strapi)
- OR structured JSON/YAML for static site
- Version control for product data

### 10.4 SEO Recommendations

**1. URL Structure**
- Clean, descriptive URLs
- Example structure:
  - Homepage: `/`
  - Catalog: `/catalogus`
  - Catalog filtered: `/catalogus/brons` or `/catalogus?finish=brons`
  - Product detail (if added): `/catalogus/[sku]` or `/product/[sku]`
  - Contact: `/contact`

**2. Structured Data**
- Implement Product schema for all products
- Organization schema for company info
- BreadcrumbList for navigation

**3. Metadata**
- Unique title and description per page
- OpenGraph tags for social sharing
- Canonical URLs to prevent duplication

### 10.5 UX Recommendations

**1. Product Discovery Enhancement**
- Add search functionality (future phase)
- Breadcrumb navigation in catalog
- Filter by multiple criteria (future: style, size, etc.)
- Sort options (price, name, popularity - if applicable)

**2. Mobile Experience**
- Consider single-page mobile catalog view (vs. two-page desktop)
- Swipe gestures for pagination
- Mobile-optimized thumbnail grid (1 or 2 columns)

**3. Conversion Optimization**
- Clear calls-to-action on every page
- Contact information easily accessible (sticky header or footer)
- Reduce friction in contact process
- Consider live chat integration (future)

### 10.6 Maintenance Considerations

**1. Documentation**
- Component documentation
- Content update procedures
- Image upload guidelines
- Deployment process documentation

**2. Scalability**
- Plan for catalog growth
- Modular code structure
- Performance monitoring
- Analytics for usage patterns

**3. Future Enhancements**
- E-commerce capability (shopping cart, checkout)
- Customer accounts and order history
- Product reviews and ratings
- Advanced filtering (price ranges, styles, etc.)
- Multi-language support (English, German, French?)
- Blog or inspiration gallery
- Dealer locator

---

## 11. Development Phases Suggestion

### Phase 1: Foundation & Design System
- Extract complete design system from Figma
- Set up development environment
- Create component library
- Establish coding standards and conventions

### Phase 2: Core Pages (Static)
- Build homepage with static content
- Build contact page
- Implement responsive navigation
- Create footer component

### Phase 3: Catalog Functionality
- Build catalog page structure
- Implement filter sidebar
- Create product thumbnail grid
- Build product viewer component
- Implement pagination

### Phase 4: Content Integration
- Integrate product data (JSON/CMS)
- Populate all images and assets
- Add all copy and content
- Implement SEO metadata

### Phase 5: Refinement & Testing
- Cross-browser testing
- Responsive testing (all breakpoints)
- Accessibility audit and fixes
- Performance optimization
- User acceptance testing

### Phase 6: Deployment & Launch
- Production build optimization
- Deploy to hosting platform
- Set up analytics
- Monitor performance
- Gather initial user feedback

---

## 12. Success Metrics (Proposed)

### Technical Performance
- Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals pass
- 100% WCAG AA compliance
- Zero critical errors across supported browsers

### Business Goals (Assumptions)
- Contact form submissions / inquiries per month
- Catalog page views and engagement time
- Most viewed product categories
- Mobile vs. desktop usage ratio
- Bounce rate and session duration

### User Experience
- Task completion rate (find product and contact)
- Average time to find specific product
- Filter usage patterns
- Mobile usability metrics

---

## 13. Next Steps

### Immediate Actions Required

1. **Design Clarification Meeting**
   - Review Figma designs with designer/stakeholder
   - Extract missing specifications (colors, fonts, states)
   - Clarify interactive behaviors
   - Document animation preferences

2. **Content Gathering**
   - Collect all product data (SKUs, names, images)
   - Gather brand description copy
   - Complete contact page information
   - Prepare all required images

3. **Technical Decisions**
   - Choose technology stack
   - Select hosting platform
   - Decide on CMS or static data approach
   - Plan deployment strategy

4. **Business Requirements**
   - Clarify target audience (B2B/B2C)
   - Define success metrics
   - Establish timeline and milestones
   - Confirm budget and resources

5. **Create Detailed Project Plan**
   - Break down into development tasks
   - Estimate time and resources
   - Create sprint/milestone structure
   - Assign responsibilities

### Questions for Stakeholder Review

Please review the "Gaps & Questions for Clarification" section (Section 9) and provide answers to all numbered questions, prioritizing:
- Questions 1-6 (Business & Strategy)
- Questions 7-12 (Product Catalog)
- Questions 13-18 (Functionality)
- Questions 19-23 (Technical)

---

## 14. Appendix: Reference Data

### Design Specification Source
- File: `/home/jelle/dev/maximo_design/project_details/design_specification.md`
- Figma: https://www.figma.com/design/Ltuxg6pC7VELD9U1hG7cot/Maximo-Design

### Key Measurements Summary

| Element | Desktop (1920px) | Tablet (768px) |
|---------|-----------------|----------------|
| Header height | 119px | 119px (assumed) |
| Logo | 58px x 49px | 58px x 49px |
| Hero image | 960px x 961px | Full-width |
| Category card | 930px x 480px | 768px x 480px |
| Product thumbnail | ~75px x 96-98px | Same |
| Product viewer panel | 586px / 595px x 840px | Full-width |
| Filter sidebar | ~160px | Hidden/drawer? |
| Pagination button | ~258px x 72px | Responsive |

### Product Finishes Mentioned
1. Gun Metal (dark metallic)
2. Goud / Gold (golden/brass)
3. Brons / Bronze (bronze)
4. **Others not specified**

### Figma Frames Reference
| Frame Name | Dimensions | Page |
|------------|------------|------|
| Desktop - 18 | 1920x1071 | Homepage |
| Desktop - 19 | 1920x1071 | Homepage variant |
| Desktop - 14 | 768x1297 | Tablet homepage |
| Desktop - 21 | 768x3412 | Tablet full scroll |
| Desktop - 23 | 1920x1080 | Contact (centered) |
| Desktop - 24 | 1920x1080 | Contact (two-column) |
| Desktop - 27 | 1920x1090 | Catalog page |
| Desktop - 28 | 1920x1090 | Catalog variant |

---

**Document Prepared By:** Website Discovery Consultant
**Date:** 2026-01-03
**Status:** Awaiting Stakeholder Review & Clarification
**Next Review:** Upon completion of gap analysis questions
