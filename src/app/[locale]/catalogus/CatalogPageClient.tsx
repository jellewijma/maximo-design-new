"use client";

/**
 * Catalog Page Client Component
 *
 * Client-side component for the catalog page that manages:
 * - Current page state
 * - Active filter state
 * - Page navigation
 * - Filter interactions
 *
 * This component is wrapped by the server component for SSR/static generation.
 */

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { CatalogViewer, CatalogSidebar } from "@/components/catalog";
import { TOTAL_PAGES, type FinishType } from "@/lib/catalog-data";

/**
 * Props for the CatalogPageClient component
 */
interface CatalogPageClientProps {
  /** Initial page number (defaults to 1) */
  initialPage?: number;
  /** Initial filter (defaults to "all") */
  initialFilter?: FinishType;
}

/**
 * Catalog page client component with state management
 */
export function CatalogPageClient({
  initialPage = 1,
  initialFilter = "all",
}: CatalogPageClientProps) {
  const t = useTranslations("catalog");
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [activeFilter, setActiveFilter] = useState<FinishType>(initialFilter);

  /**
   * Handle page change from the catalog viewer
   */
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  /**
   * Handle filter change from the sidebar
   */
  const handleFilterChange = useCallback((filter: FinishType) => {
    setActiveFilter(filter);
  }, []);

  /**
   * Handle jump to a specific page
   */
  const handleJumpToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="pt-16 tablet:pt-20 min-h-screen">
      {/* Page Header */}
      <section className="container-padding py-8 tablet:py-12">
        <h1 className="text-4xl tablet:text-5xl font-display mb-2 animate-slideUp">
          {t("title")}
        </h1>
        <p
          className="text-foreground/60 animate-slideUp"
          style={{ animationDelay: "100ms" }}
        >
          {t("page")} {currentPage} {t("of")} {TOTAL_PAGES}
        </p>
      </section>

      {/* Main Catalog Layout */}
      <section className="container-padding pb-16">
        <div className="flex flex-col tablet:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shown on tablet+ */}
          <CatalogSidebar
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            onJumpToPage={handleJumpToPage}
            className="hidden tablet:block w-64 shrink-0"
          />

          {/* Mobile filter dropdown */}
          <div className="tablet:hidden">
            <label
              htmlFor="mobile-filter"
              className="block text-sm font-medium text-foreground/70 mb-2"
            >
              {t("filters.title")}
            </label>
            <select
              id="mobile-filter"
              value={activeFilter}
              onChange={(e) => {
                const filter = e.target.value as FinishType;
                handleFilterChange(filter);
                handleJumpToPage(
                  filter === "all"
                    ? 1
                    : {
                        gunmetal: 6,
                        gold: 26,
                        bronze: 46,
                        chrome: 66,
                        matte_black: 86,
                      }[filter] || 1
                );
              }}
              className="
                w-full px-4 py-3 rounded
                bg-foreground/5 border border-foreground/10
                text-foreground
                focus:outline-none focus:ring-2 focus:ring-primary
                transition-colors duration-200
              "
            >
              <option value="all">{t("filters.all")}</option>
              <option value="gunmetal">{t("filters.gunmetal")}</option>
              <option value="gold">{t("filters.gold")}</option>
              <option value="bronze">{t("filters.bronze")}</option>
              <option value="chrome">{t("filters.chrome")}</option>
              <option value="matte_black">{t("filters.matte_black")}</option>
            </select>
          </div>

          {/* Catalog Viewer */}
          <div className="flex-1">
            <CatalogViewer
              currentPage={currentPage}
              totalPages={TOTAL_PAGES}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CatalogPageClient;
