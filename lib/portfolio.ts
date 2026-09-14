import { cities } from "./cities";
import type { CitySlug } from "./testimonials";

export type PortfolioPhotoItem = {
  kind: "photo";
  id: string;
  /** Path under /public/portfolio/. */
  beforeImage: string;
  afterImage: string;
};

export type PortfolioVideoItem = {
  kind: "video";
  id: string;
  /** Path under /public/portfolio/. Short, silent result clip — no before/after pair. */
  video: string;
};

export type PortfolioItem = PortfolioPhotoItem | PortfolioVideoItem;

// Real before/after photos from Alexia's Drive.
const PHOTO_CLIENT_IDS = [1, 2, 6, 7, 8, 9];

// Clients 3, 4 and 5 only had a video of the finished result (no separate
// before/after stills), so they're shown as short muted result clips instead.
const VIDEO_CLIENT_IDS = [3, 4, 5];

export const portfolio: PortfolioItem[] = [
  ...PHOTO_CLIENT_IDS.map(
    (n): PortfolioPhotoItem => ({
      kind: "photo",
      id: `cliente-${n}`,
      beforeImage: `/portfolio/cliente-${n}-antes.jpg`,
      afterImage: `/portfolio/cliente-${n}-depois.jpg`,
    })
  ),
  ...VIDEO_CLIENT_IDS.map(
    (n): PortfolioVideoItem => ({
      kind: "video",
      id: `cliente-${n}`,
      video: `/portfolio/cliente-${n}-resultado.mp4`,
    })
  ),
];

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
