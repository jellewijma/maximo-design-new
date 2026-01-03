"use client";

/**
 * Catalog Sidebar Component
 *
 * A sidebar filter component for the catalog page.
 * Allows users to filter catalog pages by product finish type.
 *
 * Features:
 * - Filter buttons for each finish category
 * - Visual indicator for active filter
 * - Page range display for each category
 * - Clicking a filter jumps to that section's first page
 *
 * @example
 * ```tsx
 * <CatalogSidebar
 *   activeFilter="all"
 *   onFilterChange={(filter) => setActiveFilter(filter)}
 *   onJumpToPage={(page) => setCurrentPage(page)}
 * />
 * ```
 */

import { useTranslations } from "next-intl";
import {
  catalogCategories,
  type FinishType,
  getFirstPageForFinish,
} from "@/lib/catalog-data";

/**
 * Props for the CatalogSidebar component
 */
interface CatalogSidebarProps {
  /** Currently active filter */
  activeFilter: FinishType;
  /** Callback when filter changes */
  onFilterChange: (filter: FinishType) => void;
  /** Callback to jump to a specific page */
  onJumpToPage: (page: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Catalog sidebar with finish type filters
 */
export function CatalogSidebar({
  activeFilter,
  onFilterChange,
  onJumpToPage,
  className = "",
}: CatalogSidebarProps) {
  const t = useTranslations("catalog");

  /**
   * Handle filter button click
   * Changes the active filter and jumps to the first page of that category
   */
  const handleFilterClick = (filter: FinishType) => {
    onFilterChange(filter);
    const firstPage = getFirstPageForFinish(filter);
    onJumpToPage(firstPage);
  };

  return (
    <aside className={`w-full ${className}`}>
      <div className="sticky top-24">
        {/* Sidebar title */}
        <h2 className="text-lg font-semibold mb-4 text-foreground">
          {t("filters.title")}
        </h2>

        {/* Filter list */}
        <ul className="space-y-1">
          {/* All filter */}
          <li>
            <button
              onClick={() => handleFilterClick("all")}
              className={`
                w-full text-left px-4 py-3 rounded
                transition-all duration-200
                flex items-center justify-between
                ${
                  activeFilter === "all"
                    ? "bg-foreground/10 text-foreground border-l-2 border-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }
              `}
            >
              <span>{t("filters.all")}</span>
              <span className="text-xs text-foreground/50">1 - 117</span>
            </button>
          </li>

          {/* Category filters */}
          {catalogCategories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleFilterClick(category.id)}
                className={`
                  w-full text-left px-4 py-3 rounded
                  transition-all duration-200
                  flex items-center justify-between
                  ${
                    activeFilter === category.id
                      ? "bg-foreground/10 text-foreground border-l-2 border-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }
                `}
              >
                <span>{t(`filters.${category.labelKey}`)}</span>
                <span className="text-xs text-foreground/50">
                  {category.startPage} - {category.endPage}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Instructions */}
        <p className="mt-6 text-xs text-foreground/50 leading-relaxed">
          {t("filters.title")}:{" "}
          <span className="text-foreground/70">
            {t(`filters.${activeFilter}`)}
          </span>
        </p>
      </div>
    </aside>
  );
}

export default CatalogSidebar;
