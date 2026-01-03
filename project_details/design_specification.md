# Maximo Design - Website Frontend Specification

**Figma Source:** https://www.figma.com/design/Ltuxg6pC7VELD9U1hG7cot/Maximo-Design

---

## 1. Overview

**Brand:** Maximo Design
**Industry:** Premium bathroom faucets/taps (kranen)
**Tagline:** "Kranen met kwaliteit" (Taps with quality)
**Contact:** sanisupply@info.nl

The website is a product catalog and brand showcase for Maximo Design, featuring high-quality bathroom faucets in various finishes.

---

## 2. Page Structure

### 2.1 Homepage
- **Hero Section:** Full-width layout with product imagery on the right side (approx. 50% width)
- **Brand Title:** "Maximo Design" prominently displayed
- **Tagline:** "Kranen met kwaliteit" as a subtitle
- **Description:** Introductory text describing the brand/products
- **Catalog Preview:** Grid of product category cards with:
  - Category image
  - Category name (e.g., "Brons kranen" - Bronze faucets)
  - Page reference (e.g., "pg 05 - 11")

### 2.2 Catalog Page
- **Header:** "Catalogus" title
- **Left Sidebar:** Filter system with:
  - Product finish categories (Gun Metal, Goud/Gold)
  - Grid of product thumbnails organized by finish
  - Product numbers displayed in cells
- **Main Content Area:** Two-column product viewer
  - Large product images (586px and 595px width each)
  - Page navigation at bottom (e.g., "40 / 92")
  - Pagination components

### 2.3 Contact Page
- **Title:** "Contact"
- **Content:** Contact information and call-to-action text
- **Message:** "Wilt u een bestelling plaatsen of heeft u een vraag? Wij staan voor u klaar."
- **Layout Options:**
  - Centered text layout
  - Two-column layout with image on right side

---

## 3. Layout Specifications

### 3.1 Breakpoints
| Breakpoint | Width | Notes |
|------------|-------|-------|
| Desktop | 1920px | Primary desktop layout |
| Tablet | 768px | Responsive tablet layout |

### 3.2 Grid System
- **Desktop:** 12-column grid with two-column content areas
- **Content Area:** Maximum width ~1920px
- **Gutters:** 30px left padding from edge
- **Header Height:** 119px

### 3.3 Key Measurements
| Element | Dimension |
|---------|-----------|
| Header height | 119px |
| Logo area | 58px x 49px |
| Navigation buttons | 180px x 49px, 310px x 49px |
| Hero image area | 960px x 961px |
| Catalog card height | 480px |
| Product thumbnail | ~75px x 96-98px |
| Large product view | 586px / 595px width |

---

## 4. Typography

### 4.1 Headings
| Element | Size (estimated) | Usage |
|---------|-----------------|-------|
| H1 / Brand Title | Large (110px height container) | "Maximo Design" |
| H2 / Section Title | Large (110px height container) | "Catalogus", "Contact" |
| Tagline | Medium (~52px height) | "Kranen met kwaliteit" |

### 4.2 Body Text
| Element | Size (estimated) | Usage |
|---------|-----------------|-------|
| Description | Standard | Intro paragraphs |
| Labels | Small (~23px height) | Category labels, page numbers |
| Navigation | Standard | Menu items |

---

## 5. Color Palette

### 5.1 Product Finishes
These are key product categories that may influence UI accent colors:
- **Gun Metal** - Dark metallic finish
- **Goud (Gold)** - Golden/brass finish
- **Brons (Bronze)** - Bronze finish

### 5.2 UI Colors (Inferred)
| Usage | Color Notes |
|-------|-------------|
| Background | Light/White |
| Lines/Dividers | Thin horizontal and vertical lines throughout |
| Text | Dark (likely black or dark gray) |

---

## 6. Components

### 6.1 Header/Navigation
- **Logo:** Positioned top-left (30px from edge, y=32)
- **Navigation Items:** Two button groups in top-right
  - Primary nav button: 310px x 49px
  - Secondary nav button: 180px x 49px
- **Divider Line:** Full-width horizontal line at y=119

### 6.2 Product Card (Catalog Preview)
- **Dimensions:** 930px x 480px (desktop), 768px x 480px (tablet)
- **Content:**
  - Product category image
  - Category title (e.g., "Brons kranen")
  - Page reference (e.g., "pg 05 - 11")

### 6.3 Catalog Filter Sidebar
- **Width:** ~160px
- **Structure:**
  - Vertical divider lines
  - Color/finish section headers (Gun Metal, Goud)
  - Horizontal section dividers
  - Product number grid (2 columns of thumbnails)
  - Highlight indicator for current selection

### 6.4 Product Viewer
- **Layout:** Two large image panels side by side
- **Left panel:** 586px width
- **Right panel:** 595px width
- **Height:** 840px
- **Footer:** Pagination controls and page indicator

### 6.5 Pagination Component
- **Page indicator:** "40 / 92" format
- **Navigation controls:** ~258px x 72px component buttons

### 6.6 Footer
- **Divider:** Full-width horizontal line
- **Position:** y=1080 (at bottom of viewport)

---

## 7. Responsive Behavior

### 7.1 Desktop (1920px)
- Two-column layouts
- Hero image on right side
- Full catalog sidebar visible
- Large product views

### 7.2 Tablet (768px)
- Single-column stacked layout
- Hero image above content
- Catalog categories stacked vertically
- Full-width product cards
- Condensed navigation (hamburger menu icon)

---

## 8. Interactive Elements

### 8.1 Navigation
- Logo (links to home)
- Navigation menu items
- Mobile menu toggle

### 8.2 Catalog
- Filter sidebar (clickable finish options)
- Product thumbnail grid (selectable)
- Pagination controls (previous/next)
- Product category cards (clickable)

### 8.3 Contact
- Email link (mailto: sanisupply@info.nl)

---

## 9. Image Assets Required

| Asset Type | Description | Dimensions |
|------------|-------------|------------|
| Logo | Company logo "Middel 1100 1" | 58px x 49px |
| Hero Images | Product lifestyle photos | 960px x 961px |
| Category Images | Product category thumbnails | 930px x 480px |
| Product Thumbnails | Catalog grid items | ~75px x 96px |
| Product Detail | Large product images | 586px x 840px |
| Contact Image | Contact page imagery | 960px x 961px |

---

## 10. Implementation Notes

### 10.1 Layout Approach
- Use CSS Grid or Flexbox for main layouts
- Two-column split layouts for hero and contact sections
- Grid for product catalogs

### 10.2 Responsive Strategy
- Mobile-first or desktop-first approach
- Breakpoint at 768px for tablet layouts
- Single-column layouts on smaller screens

### 10.3 Navigation
- Sticky header recommended
- Responsive navigation (hamburger menu on mobile)

### 10.4 Catalog Functionality
- Filter by product finish (Gun Metal, Gold, Bronze, etc.)
- Paginated product viewing
- Product detail modal or page

---

## 11. Figma Frame Reference

| Frame Name | Dimensions | Description |
|------------|------------|-------------|
| Desktop - 18 | 1920x1071 | Homepage with hero |
| Desktop - 19 | 1920x1071 | Homepage variant |
| Desktop - 14 | 768x1297 | Tablet homepage |
| Desktop - 21 | 768x3412 | Tablet full page scroll |
| Desktop - 23 | 1920x1080 | Contact (centered) |
| Desktop - 24 | 1920x1080 | Contact (two-column) |
| Desktop - 27 | 1920x1090 | Catalog page |
| Desktop - 28 | 1920x1090 | Catalog variant |

---

## 12. Additional Considerations

### 12.1 Accessibility
- Ensure sufficient color contrast
- Alt text for all product images
- Keyboard navigation support
- ARIA labels for interactive elements

### 12.2 Performance
- Lazy loading for catalog images
- Optimized image formats (WebP with fallbacks)
- Responsive image srcsets

### 12.3 SEO
- Semantic HTML structure
- Product structured data
- Descriptive page titles and meta descriptions
