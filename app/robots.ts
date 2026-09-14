import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://micropigmentacao.alexiasobrancelhas.com.br/sitemap.xml",
  };
}
