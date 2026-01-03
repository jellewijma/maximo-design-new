/**
 * Tailwind CSS Configuration for Maximo Design
 *
 * This configuration extends Tailwind with the design tokens
 * specified in the project specification:
 * - Custom colors (background, foreground, primary)
 * - Custom fonts (Montserrat for body, Abril Display for brand)
 * - Responsive breakpoints for desktop (1920px) and tablet (768px)
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Design System Colors
         * Background: Dark charcoal (#121111)
         * Foreground: Light gray (#EFEFEF) - used for text and brand elements
         * Primary: Electric blue (#2E00E5) - used only for "Bekijk catalogus" button
         */
        background: "#121111",
        foreground: "#EFEFEF",
        primary: "#2E00E5",
      },
      fontFamily: {
        /**
         * Font Families
         * sans: Montserrat - used for all body text
         * display: Abril Display - used exclusively for brand name "Maximo Design"
         */
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        display: ["var(--font-abril-display)", "Abril Display", "serif"],
      },
      fontSize: {
        /**
         * Typography Scale
         * Based on the specification's variable font sizes
         */
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.16" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1.1" }], // 60px
      },
      screens: {
        /**
         * Responsive Breakpoints
         * tablet: 768px (min-width)
         * desktop: 1280px (min-width)
         * wide: 1920px (min-width) - full desktop design
         */
        tablet: "768px",
        desktop: "1280px",
        wide: "1920px",
      },
      transitionDuration: {
        /**
         * Animation Durations
         * Used for subtle animations as specified
         */
        DEFAULT: "200ms",
        fast: "150ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
