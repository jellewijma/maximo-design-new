/**
 * Internationalized Navigation
 *
 * Provides localized navigation utilities using next-intl.
 * Exports Link, redirect, usePathname, and useRouter for i18n-aware navigation.
 */

import { createNavigation } from "next-intl/navigation";
import { locales, defaultLocale } from "./config";

/**
 * Localized pathnames for different pages
 * Maps internal paths to locale-specific URLs
 */
export const pathnames = {
  "/": "/",
  "/catalogus": {
    nl: "/catalogus",
    en: "/catalog",
  },
  "/contact": "/contact",
} as const;

/**
 * Create navigation utilities with locale support
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    defaultLocale,
    pathnames,
  });
