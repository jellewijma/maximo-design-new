/**
 * next-intl Request Configuration
 *
 * This file is used by next-intl to load messages for the current locale.
 * It's referenced in next.config.ts via the createNextIntlPlugin.
 */

import { getRequestConfig } from "next-intl/server";
import { locales, type Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  let locale = await requestLocale;

  // Validate the locale, fallback to "nl" if invalid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = "nl";
  }

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default,
  };
});
