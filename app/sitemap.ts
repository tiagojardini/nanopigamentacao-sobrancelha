import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

const SITE_URL = "https://micropigmentacao.alexiasobrancelhas.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/micropigmentacao-sobrancelhas", "/sobre"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const cityRoutes = cities.map((c) => ({
    url: `${SITE_URL}/micropigmentacao-sobrancelhas/${c.slug}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/servicos/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...cityRoutes, ...serviceRoutes];
}
