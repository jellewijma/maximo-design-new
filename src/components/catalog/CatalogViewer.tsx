"use client";

/**
 * Catalog Viewer Component
 *
 * A two-panel catalog viewer that displays catalog pages as spreads.
 * Features:
 * - Two-panel view showing left and right pages (book spread)
 * - Page navigation (previous/next)
 * - Page counter showing current position
 * - Subtle page turn animation
 * - Keyboard navigation support
 *
 * @example
 * ```tsx
 * <CatalogViewer
 *   currentPage={1}
 *   totalPages={117}
 *   onPageChange={(page) => setCurrentPage(page)}
 * />
 * ```
 */

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  getPageImagePath,
  getPageSpread,
  TOTAL_PAGES,
} from "@/lib/catalog-data";

/**
 * Props for the CatalogViewer component
 */
interface CatalogViewerProps {
  /** Current page number (1-117) */
  currentPage: number;
  /** Total number of pages */
  totalPages?: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Catalog viewer with two-panel spread view
 */
export function CatalogViewer({
  currentPage,
  totalPages = TOTAL_PAGES,
  onPageChange,
  className = "",
}: CatalogViewerProps) {
  const t = useTranslations("catalog");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | null
  >(null);

  // Get the current spread (left and right pages)
  const spread = getPageSpread(currentPage);

  /**
   * Navigate to the previous spread
   */
  const goToPrevious = useCallback(() => {
    if (currentPage <= 1 || isAnimating) return;

    setAnimationDirection("left");
    setIsAnimating(true);

    // Navigate back 2 pages for a spread, but not below 1
    const newPage = Math.max(1, currentPage - 2);
    onPageChange(newPage);
  }, [currentPage, isAnimating, onPageChange]);

  /**
   * Navigate to the next spread
   */
  const goToNext = useCallback(() => {
    if (currentPage >= totalPages || isAnimating) return;

    setAnimationDirection("right");
    setIsAnimating(true);

    // Navigate forward 2 pages for a spread, but not above totalPages
    const newPage = Math.min(totalPages, currentPage + 2);
    onPageChange(newPage);
  }, [currentPage, totalPages, isAnimating, onPageChange]);

  // Reset animation state after animation completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setAnimationDirection(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Determine which pages to show based on spread position
  const showLeftPage = spread.left !== null;
  const showRightPage = spread.right !== null;

  // Calculate the display page number (showing the right page number for the counter)
  const displayPage = spread.right ?? spread.left ?? currentPage;

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Two-panel catalog viewer */}
      <div
        className={`
          flex flex-col tablet:flex-row
          bg-foreground/5 rounded-lg overflow-hidden
          border border-foreground/10
          transition-transform duration-300 ease-out
          ${isAnimating && animationDirection === "right" ? "translate-x-[-2%]" : ""}
          ${isAnimating && animationDirection === "left" ? "translate-x-[2%]" : ""}
        `}
      >
        {/* Left page */}
        <div
          className={`
            relative flex-1
            aspect-[3/4]
            ${!showLeftPage ? "hidden tablet:flex tablet:items-center tablet:justify-center tablet:bg-foreground/3" : ""}
          `}
        >
          {showLeftPage && spread.left ? (
            <Image
              src={getPageImagePath(spread.left)}
              alt={`${t("page")} ${spread.left}`}
              fill
              className={`
                object-contain
                transition-opacity duration-300
                ${isAnimating ? "opacity-80" : "opacity-100"}
              `}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={spread.left <= 3}
            />
          ) : (
            <span className="text-foreground/30 text-sm hidden tablet:block">
              {/* Empty left page placeholder */}
            </span>
          )}
        </div>

        {/* Center spine/divider (visible on tablet+) */}
        <div className="hidden tablet:block w-px bg-foreground/20" />

        {/* Right page */}
        <div
          className={`
            relative flex-1
            aspect-[3/4]
            ${!showRightPage ? "hidden tablet:flex tablet:items-center tablet:justify-center tablet:bg-foreground/3" : ""}
          `}
        >
          {showRightPage && spread.right ? (
            <Image
              src={getPageImagePath(spread.right)}
              alt={`${t("page")} ${spread.right}`}
              fill
              className={`
                object-contain
                transition-opacity duration-300
                ${isAnimating ? "opacity-80" : "opacity-100"}
              `}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={spread.right <= 3}
            />
          ) : (
            <span className="text-foreground/30 text-sm hidden tablet:block">
              {/* Empty right page placeholder */}
            </span>
          )}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="mt-6 flex items-center justify-between">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          disabled={currentPage <= 1 || isAnimating}
          className={`
            flex items-center gap-2 px-4 py-2
            text-sm font-medium
            transition-all duration-200
            ${
              currentPage <= 1
                ? "text-foreground/30 cursor-not-allowed"
                : "text-foreground/70 hover:text-foreground"
            }
          `}
          aria-label={t("previous")}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="hidden tablet:inline">{t("previous")}</span>
        </button>

        {/* Page counter */}
        <span className="text-foreground/70 tabular-nums">
          {displayPage} / {totalPages}
        </span>

        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={currentPage >= totalPages || isAnimating}
          className={`
            flex items-center gap-2 px-4 py-2
            text-sm font-medium
            transition-all duration-200
            ${
              currentPage >= totalPages
                ? "text-foreground/30 cursor-not-allowed"
                : "text-foreground/70 hover:text-foreground"
            }
          `}
          aria-label={t("next")}
        >
          <span className="hidden tablet:inline">{t("next")}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CatalogViewer;
