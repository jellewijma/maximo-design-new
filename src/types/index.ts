/**
 * Global Type Definitions
 *
 * Shared TypeScript types used throughout the application.
 */

/**
 * Re-export locale types from i18n config
 */
export type { Locale } from "@/lib/i18n/config";

/**
 * Common component props with className
 */
export interface WithClassName {
  className?: string;
}

/**
 * Common component props with children
 */
export interface WithChildren {
  children: React.ReactNode;
}

/**
 * Catalog filter types
 */
export type CatalogFinish =
  | "all"
  | "gunmetal"
  | "gold"
  | "bronze"
  | "chrome"
  | "matte_black";

/**
 * Catalog page data structure
 */
export interface CatalogPage {
  /** Page number */
  number: number;
  /** Image URL for the page */
  imageUrl: string;
  /** Finishes featured on this page */
  finishes: CatalogFinish[];
}
