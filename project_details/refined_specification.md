# Maximo Design - Refined Website Specification

**Last Updated:** Based on client answers to discovery questions

---

## 1. Project Summary

| Attribute | Value |
|-----------|-------|
| **Business Type** | B2B |
| **Primary Goal** | Showcase catalog, generate quote requests |
| **Languages** | Dutch & English |
| **Timeline** | ASAP |
| **Budget** | < €500 |
| **E-commerce** | No |

---

## 2. Design System

### 2.1 Colors

```css
:root {
  /* Background */
  --color-bg: #121111;

  /* Text & Brand */
  --color-text: #EFEFEF;
  --color-brand: #EFEFEF;

  /* Primary Action */
  --color-primary: #2E00E5;  /* Used only for "Bekijk catalogus" button */
}
```

| Usage | Color | Hex |
|-------|-------|-----|
| Background | Dark charcoal | `#121111` |
| Text / Brand | Light gray | `#EFEFEF` |
| Primary Button | Electric blue | `#2E00E5` |

### 2.2 Typography

| Usage | Font Family | Notes |
|-------|-------------|-------|
| Brand Name ("Maximo Design") | **Abril Display** | Licensed font |
| All Other Text | **Montserrat** | Google Font |

**Font Sizes (Variable/Adjustable):**
```css
:root {
  --font-xs: 0.75rem;    /* 12px */
  --font-sm: 0.875rem;   /* 14px */
  --font-base: 1rem;     /* 16px */
  --font-lg: 1.125rem;   /* 18px */
  --font-xl: 1.25rem;    /* 20px */
  --font-2xl: 1.5rem;    /* 24px */
  --font-3xl: 1.875rem;  /* 30px */
  --font-4xl: 2.25rem;   /* 36px */
  --font-5xl: 3rem;      /* 48px */
  --font-6xl: 3.75rem;   /* 60px */
}
```

### 2.3 Animations
- **Style:** Subtle
- **Use Cases:** Page transitions, hover states, button interactions

---

## 3. Site Structure

```
Maximo Design
├── Homepage (/ or /nl, /en)
│   ├── Header with navigation
│   ├── Hero section with product imagery
│   ├── Brand title & tagline
│   ├── Description (placeholder for now)
│   └── "Bekijk catalogus" CTA button
│
├── Catalog Page (/catalogus or /catalog)
│   ├── Header
│   ├── Catalog viewer (PDF pages as images)
│   ├── Filter sidebar (by finish)
│   ├── Page navigation
│   └── Pagination
│
└── Contact Page (/contact)
    ├── Header
    ├── Contact title
    ├── Contact information
    └── Quote request CTA
```

**Note:** No footer required.

---

## 4. Pages

### 4.1 Homepage
- Hero section with product imagery
- "Maximo Design" brand title (Abril Display font)
- "Kranen met kwaliteit" tagline
- Placeholder description text
- **"Bekijk catalogus"** button (primary color #2E00E5)

### 4.2 Catalog Page
- Display catalog pages as images
- Filter by product finish (Gun Metal, Gold, Bronze, etc.)
- Page navigation (previous/next)
- Page counter (e.g., "40 / 92")
- **No individual product pages** - just catalog page viewer

### 4.3 Contact Page
- Contact information
- "Contact for quote" messaging
- Email: sanisupply@info.nl

---

## 5. Features

### 5.1 Included
| Feature | Details |
|---------|---------|
| Multi-language | Dutch (primary) & English |
| Responsive | Desktop (1920px) & Tablet (768px) |
| Catalog viewer | Browse PDF catalog pages as images |
| Filtering | Filter catalog by finish type |
| Contact | Display contact info for quotes |
| Subtle animations | Hover states, transitions |

### 5.2 Not Included
| Feature | Reason |
|---------|--------|
| E-commerce | B2B model - contact for quotes |
| Newsletter | Not required |
| Blog | Not required |
| User accounts | Not required |
| Search | Not required |
| Chat/Support widget | Not required |
| Analytics | Basic only if any |
| Social media links | Not required |
| SEO optimization | Not prioritized |
| Cookie consent | Not required |
| Sitemap | Not required |
| Forms | Not required (email contact only) |

---

## 6. Assets

### 6.1 Required from Client
| Asset | Status | Notes |
|-------|--------|-------|
| Brand logo | Available in Figma | Named "Logo" |
| Abril Display font | Licensed | Client has license |
| Catalog page images | Needed | Export from catalog PDF |
| Hero product images | Needed | From Figma or photos |

### 6.2 Fonts to Load
- **Abril Display** - Self-hosted (licensed)
- **Montserrat** - Google Fonts (free)

---

## 7. Technical Decisions

### 7.1 Recommended Stack (Budget-Friendly)
| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | **Next.js 14** | Free, great for static sites, easy i18n |
| Styling | **Tailwind CSS** | Fast development, small bundle |
| Language | **TypeScript** | Type safety, better DX |
| Hosting | **Vercel** | Free tier, perfect for Next.js |
| Fonts | Self-hosted + Google | Performance |

### 7.2 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

*No IE11 or legacy browser support required.*

---

## 8. Content Requirements

### 8.1 To Be Provided Later
- Brand description text (using placeholder for now)
- Final catalog page images

### 8.2 Placeholder Text
```
Lorem ipsum dolor sit amet consectetur. Gravida consequat hendrerit
dui diam eget. Adipiscing eget tempus a pretium condimentum donec
odio mauris. Tellus mauris nunc adipiscing tellus turpis at
ullamcorper turpis.
```

---

## 9. Internationalization (i18n)

### 9.1 Languages
| Language | Code | URL Pattern |
|----------|------|-------------|
| Dutch | `nl` | `/nl/...` or default |
| English | `en` | `/en/...` |

### 9.2 Translation Keys Needed
- Navigation items
- Page titles
- Button labels ("Bekijk catalogus" / "View catalog")
- Contact text
- Placeholder description

### 9.3 Catalog
- Catalog images are single-language (not translated)
- Can change between releases

---

## 10. Summary of Simplifications

Given the budget constraint (< €500), the following simplifications apply:

1. **No footer** - Reduces development time
2. **No forms** - Direct email contact only
3. **No search** - Browse catalog only
4. **No user accounts** - Public site only
5. **No e-commerce** - B2B quote model
6. **Basic animations only** - Subtle hover/transitions
7. **Static catalog** - Images, not dynamic products
8. **Minimal SEO** - Basic meta tags only
9. **No analytics integration** - Can be added later
10. **No cookie consent** - Not tracking users
