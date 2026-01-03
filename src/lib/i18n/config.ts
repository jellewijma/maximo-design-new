/**
 * Internationalization Configuration
 *
 * Defines the supported locales and default locale for the application.
 * Dutch (nl) is the primary language, English (en) is secondary.
 */

/**
 * Supported locale codes
 */
export const locales = ["nl", "en"] as const;

/**
 * Type representing valid locale codes
 */
export type Locale = (typeof locales)[number];

/**
 * Default locale used when no locale is specified
 */
export const defaultLocale: Locale = "nl";

/**
 * Locale display names for the language switcher
 */
export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
};

/**
 * Short locale labels for compact language switcher
 */
export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
};
