# Maximo Design - Build Plan

**Budget:** < €500 | **Timeline:** ASAP

---

## Tech Stack

| Layer | Choice | Cost |
|-------|--------|------|
| Framework | Next.js 14 (App Router) | Free |
| Styling | Tailwind CSS | Free |
| Fonts | Montserrat (Google) + Abril Display (self-hosted) | Licensed |
| Hosting | Vercel | Free tier |
| **Total** | | **€0** (excluding font license) |

---

## Project Structure

```
maximo_design/
├── public/
│   ├── fonts/
│   │   └── abril-display.woff2
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   └── catalog/
│   └── locales/
│       ├── nl.json
│       └── en.json
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── catalogus/
│   │   │   │   └── page.tsx       # Catalog
│   │   │   └── contact/
│   │   │       └── page.tsx       # Contact
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Hero.tsx
│   │   ├── CatalogViewer.tsx
│   │   ├── CatalogFilter.tsx
│   │   ├── Pagination.tsx
│   │   └── Button.tsx
│   ├── lib/
│   │   ├── i18n.ts
│   │   └── catalog-data.ts
│   └── styles/
│       └── fonts.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Development Phases

### Phase 1: Setup (Day 1)
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS with design tokens
- [ ] Set up font loading (Montserrat + Abril Display)
- [ ] Create color/typography CSS variables
- [ ] Set up basic i18n structure

### Phase 2: Components (Day 2)
- [ ] Header component with logo & navigation
- [ ] Language switcher (NL/EN)
- [ ] Button component (primary style)
- [ ] Basic page layout wrapper

### Phase 3: Homepage (Day 3)
- [ ] Hero section with image placeholder
- [ ] Brand title with Abril Display
- [ ] Tagline & description
- [ ] "Bekijk catalogus" CTA button
- [ ] Responsive layout (desktop/tablet)

### Phase 4: Catalog Page (Days 4-5)
- [ ] Catalog page layout
- [ ] Filter sidebar (finish types)
- [ ] Catalog image viewer (two-panel)
- [ ] Pagination component
- [ ] Page counter display
- [ ] Connect filter to viewer

### Phase 5: Contact Page (Day 6)
- [ ] Contact page layout
- [ ] Contact information display
- [ ] Two-column variant with image

### Phase 6: Polish & Deploy (Day 7)
- [ ] Add subtle hover animations
- [ ] Test responsive layouts
- [ ] Test both languages
- [ ] Deploy to Vercel
- [ ] Final review

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#121111',
        foreground: '#EFEFEF',
        primary: '#2E00E5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Abril Display', 'serif'],
      },
      fontSize: {
        // Customize as needed
      },
    },
  },
  plugins: [],
}

export default config
```

---

## CSS Variables

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #121111;
    --foreground: #EFEFEF;
    --primary: #2E00E5;
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: 'Montserrat', sans-serif;
  }
}

/* Font faces */
@font-face {
  font-family: 'Abril Display';
  src: url('/fonts/abril-display.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## Translation Structure

```json
// public/locales/nl.json
{
  "nav": {
    "home": "Home",
    "catalog": "Catalogus",
    "contact": "Contact"
  },
  "home": {
    "tagline": "Kranen met kwaliteit",
    "cta": "Bekijk catalogus"
  },
  "contact": {
    "title": "Contact",
    "message": "Wilt u een bestelling plaatsen of heeft u een vraag? Wij staan voor u klaar.",
    "email": "E-mail: sanisupply@info.nl"
  },
  "catalog": {
    "title": "Catalogus",
    "filters": {
      "gunmetal": "Gun Metal",
      "gold": "Goud",
      "bronze": "Brons"
    },
    "page": "Pagina",
    "of": "van"
  }
}
```

```json
// public/locales/en.json
{
  "nav": {
    "home": "Home",
    "catalog": "Catalog",
    "contact": "Contact"
  },
  "home": {
    "tagline": "Quality taps",
    "cta": "View catalog"
  },
  "contact": {
    "title": "Contact",
    "message": "Would you like to place an order or do you have a question? We are here for you.",
    "email": "Email: sanisupply@info.nl"
  },
  "catalog": {
    "title": "Catalog",
    "filters": {
      "gunmetal": "Gun Metal",
      "gold": "Gold",
      "bronze": "Bronze"
    },
    "page": "Page",
    "of": "of"
  }
}
```

---

## Assets Checklist

### From Client/Figma
- [ ] Logo SVG (export from Figma "Logo" layer)
- [ ] Abril Display font file (.woff2)
- [ ] Hero product image(s)
- [ ] Catalog page images (exported from PDF)

### To Generate
- [ ] Favicon from logo
- [ ] Open Graph image (optional)

---

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Auto-detect Next.js
3. Deploy

**Environment Variables:** None required for basic site

**Domain:** Can use free `.vercel.app` domain or connect custom domain

---

## Post-Launch (Future)

These can be added later if needed:
- Analytics (Vercel Analytics - free tier)
- Contact form
- Additional language support
- SEO optimization
- Performance monitoring
