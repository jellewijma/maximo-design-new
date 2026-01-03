/**
 * Next.js Configuration for Maximo Design
 *
 * This configuration sets up:
 * - next-intl for internationalization (Dutch and English)
 * - Image optimization settings
 * - Other Next.js 14 App Router optimizations
 */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Image configuration
   * Allows external images if needed for catalog
   */
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * Strict mode for React 18
   * Helps identify potential problems in the application
   */
  reactStrictMode: true,

};

export default withNextIntl(nextConfig);
