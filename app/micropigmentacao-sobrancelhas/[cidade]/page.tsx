import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/lib/cities";
import { testimonialsByCity, type CitySlug } from "@/lib/testimonials";
import { getPortfolioForCity } from "@/lib/portfolio";
import { TestimonialCard } from "../../components/TestimonialCard";
import { PortfolioGallery } from "../../components/PortfolioGallery";
import { NanopigmentacaoPriceCard } from "../../components/NanopigmentacaoPriceCard";
import { JsonLd, getNanopigmentacaoServiceSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return cities.map((c) => ({ cidade: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { cidade: string };
}): Metadata {
  const city = getCityBySlug(params.cidade);
  if (!city) return {};

  return {
    title: `Nanopigmentação de Sobrancelhas em ${city.name}`,
    description: `Nanopigmentação de sobrancelhas fio a fio para clientes de ${city.name}-SP, feita no estúdio da Aléxia em Valinhos. Técnica hiper-realista, R$890, resultado de 8 a 12 meses.`,
    alternates: {
      canonical: `/micropigmentacao-sobrancelhas/${city.slug}`,
    },
  };
}

export default function CidadePage({
  params,
}: {
  params: { cidade: string };
}) {
  const city = getCityBySlug(params.cidade);
  if (!city) notFound();

  const testimonials = testimonialsByCity[city.slug as CitySlug];
  const portfolio = getPortfolioForCity(city.slug as CitySlug);

  return (
    <>
      <JsonLd data={getNanopigmentacaoServiceSchema(`${city.name}, SP`)} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm uppercase tracking-wide text-terracota">
          Atendimento para {city.name}
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink">
          Nanopigmentação de sobrancelhas em {city.name}
        </h1>
        <p className="mt-5 max-w-xl text-ink/70">{city.intro}</p>
        <p className="mt-3 max-w-xl text-sm text-ink/50">
          De {city.name} até o estúdio em Valinhos: {city.approxTravelTime}.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-16 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-ink/80">
          <div>
            <h2 className="font-serif text-xl text-ink">
              O que esperar da sessão
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Antes da nanopigmentação, é feita uma simulação com anamnese e
              avaliação de pele, pra montar o design certo pra você. A técnica
              é fio a fio, hiper-realista, respeitando a cor natural dos seus
              pelos.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl text-ink">
              Depoimentos de clientes
            </h2>
            <div className="mt-4 space-y-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.author} {...t} />
              ))}
            </div>
          </div>
        </div>
        <NanopigmentacaoPriceCard />
      </section>

      <section className="border-y border-ink/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-serif text-2xl text-ink">
            Resultados de clientes de {city.name} e região
          </h2>
          <div className="mt-8">
            <PortfolioGallery items={portfolio} cityName={city.name} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-2xl text-ink">Onde fica o estúdio</h2>
        <p className="mt-2 max-w-lg text-ink/70">{business.address.full}</p>
        <a
          href={business.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-terracota px-6 py-3 text-sm font-medium text-cream transition hover:bg-terracota-dark"
        >
          Agendar simulação pelo WhatsApp
        </a>
        <div className="mt-10">
          <p className="text-sm text-ink/50">Outras cidades atendidas:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/micropigmentacao-sobrancelhas/${c.slug}`}
                  className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/80 transition hover:border-terracota hover:text-terracota"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
