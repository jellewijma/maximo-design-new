"use client";

/**
 * Header Component
 *
 * Main navigation header with logo and navigation links.
 * Includes language switcher for Dutch/English.
 *
 * Features:
 * - Logo image (logo.svg) on left
 * - Navigation links (Home, Catalogus, Contact) in center/right
 * - Language switcher (NL/EN) on far right
 * - Responsive design with mobile hamburger menu
 * - Sticky positioning with backdrop blur
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Navigation link configuration
 */
interface NavLink {
  /** Translation key for the link label */
  labelKey: "home" | "catalog" | "contact";
  /** URL path */
  href: "/" | "/catalogus" | "/contact";
}

/**
 * Navigation links configuration
 */
const navLinks: NavLink[] = [
  { labelKey: "home", href: "/" },
  { labelKey: "catalog", href: "/catalogus" },
  { labelKey: "contact", href: "/contact" },
];

/**
 * Props for the Header component
 */
interface HeaderProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Main header component with navigation
 */
export function Header({ className = "" }: HeaderProps) {
  const t = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-background/95 backdrop-blur-sm
        border-b border-foreground/10
        ${className}
      `}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-16 tablet:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center"
            aria-label="Maximo Design - Home"
          >
            <Image
              src="/images/logo.svg"
              alt="Maximo Design"
              width={58}
              height={49}
              className="h-10 tablet:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden tablet:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm font-medium uppercase tracking-wider
                  text-foreground/80 hover:text-foreground
                  transition-colors duration-200
                "
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Right side: Language switcher + Mobile menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              className="tablet:hidden p-2 text-foreground"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          className="
            tablet:hidden
            bg-background/98 backdrop-blur-md
            border-t border-foreground/10
            animate-slideUp
          "
        >
          <div className="container-padding py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      block py-3 px-4
                      text-lg font-medium
                      text-foreground/80 hover:text-foreground
                      hover:bg-foreground/5 rounded
                      transition-colors duration-200
                    "
                    onClick={closeMobileMenu}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
