/**
 * Language Switcher Component
 *
 * Allows users to switch between Dutch (NL) and English (EN).
 * Displays as compact toggle buttons in the header.
 *
 * @example
 * ```tsx
 * <LanguageSwitcher />
 * ```
 */

"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n/config";

/**
 * Props for the LanguageSwitcher component
 */
interface LanguageSwitcherProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Language switcher component with NL/EN toggle
 */
export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Handle language change
   * Navigates to the same page in the selected locale
   */
  const handleLanguageChange = (locale: Locale) => {
    if (locale !== currentLocale) {
      router.replace(pathname, { locale });
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          <button
            onClick={() => handleLanguageChange(locale)}
            className={`
              px-2 py-1 text-sm font-medium transition-opacity duration-200
              ${
                locale === currentLocale
                  ? "text-foreground opacity-100"
                  : "text-foreground/60 hover:opacity-100"
              }
            `}
            aria-label={`Switch to ${localeLabels[locale]}`}
            aria-current={locale === currentLocale ? "true" : undefined}
          >
            {localeLabels[locale]}
          </button>
          {index < locales.length - 1 && (
            <span className="text-foreground/40 text-sm">/</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
