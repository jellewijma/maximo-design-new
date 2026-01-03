/**
 * Not Found Page (404)
 *
 * Displayed when a page cannot be found.
 * Provides a link back to the homepage.
 */

import { Button } from "@/components/ui";

/**
 * 404 Not Found page component
 */
export default function NotFound() {
  return (
    <div className="pt-16 tablet:pt-20">
      <section className="container-padding section-spacing">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl tablet:text-8xl font-display mb-4">404</h1>
          <p className="text-xl tablet:text-2xl text-foreground/80 mb-8">
            Page not found
          </p>
          <Button href="/" variant="secondary">
            Go home
          </Button>
        </div>
      </section>
    </div>
  );
}
