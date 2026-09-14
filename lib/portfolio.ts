import { cities } from "./cities";
import type { CitySlug } from "./testimonials";

export type PortfolioItem = {
  id: string;
  /** Path under /public/portfolio/ — replace placeholders with real photos before publishing. */
  beforeImage: string;
  afterImage: string;
};

// 9 anonymized before/after sets. Swap these placeholder paths for the real
// files once they're exported from Drive into /public/portfolio/.
export const portfolio: PortfolioItem[] = Array.from({ length: 9 }, (_, i) => {
  const n = i + 1;
  return {
    id: `cliente-${n}`,
    beforeImage: `/portfolio/cliente-${n}-antes.jpg`,
    afterImage: `/portfolio/cliente-${n}-depois.jpg`,
  };
});

/**
 * Returns the full portfolio, rotated to a different starting point per city,
 * so each city page shows the same 9 results in a different order (avoids
 * identical DOM order across pages while keeping full duplicate-content risk
 * off the table, since Google doesn't read image order as text content).
 */
export function getPortfolioForCity(slug: CitySlug): PortfolioItem[] {
  const cityIndex = cities.findIndex((c) => c.slug === slug);
  const offset = cityIndex >= 0 ? cityIndex * 2 : 0;
  const n = portfolio.length;
  return Array.from({ length: n }, (_, i) => portfolio[(i + offset) % n]);
}
