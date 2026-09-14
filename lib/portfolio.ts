import { cities } from "./cities";
import type { CitySlug } from "./testimonials";

export type PortfolioItem = {
  id: string;
  /** Path under /public/portfolio/. */
  beforeImage: string;
  afterImage: string;
};

// Real before/after photos from Alexia's Drive. Clients 3, 4 and 5 only had a
// video in that folder (no still photo), so they're left out until stills
// exist for them.
const REAL_CLIENT_IDS = [1, 2, 6, 7, 8, 9];

export const portfolio: PortfolioItem[] = REAL_CLIENT_IDS.map((n) => ({
  id: `cliente-${n}`,
  beforeImage: `/portfolio/cliente-${n}-antes.jpg`,
  afterImage: `/portfolio/cliente-${n}-depois.jpg`,
}));

/**
 * Returns the full portfolio, rotated to a different starting point per city,
 * so each city page shows the same results in a different order (avoids
 * identical DOM order across pages while keeping full duplicate-content risk
 * off the table, since Google doesn't read image order as text content).
 */
export function getPortfolioForCity(slug: CitySlug): PortfolioItem[] {
  const cityIndex = cities.findIndex((c) => c.slug === slug);
  const offset = cityIndex >= 0 ? cityIndex * 2 : 0;
  const n = portfolio.length;
  return Array.from({ length: n }, (_, i) => portfolio[(i + offset) % n]);
}
