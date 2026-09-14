import { business, nanopigmentacao } from "./business";
import { cities } from "./cities";

const SITE_URL = "https://micropigmentacao.alexiasobrancelhas.com.br";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: `+${business.whatsapp}`,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, ${c.state}`,
    })),
    url: SITE_URL,
    sameAs: [business.instagram],
  };
}

export function getNanopigmentacaoServiceSchema(cityName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: nanopigmentacao.name,
    provider: {
      "@type": "BeautySalon",
      name: business.name,
    },
    areaServed: cityName
      ? { "@type": "City", name: cityName }
      : cities.map((c) => ({ "@type": "City", name: c.name })),
    offers: {
      "@type": "Offer",
      price: nanopigmentacao.price,
      priceCurrency: "BRL",
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
