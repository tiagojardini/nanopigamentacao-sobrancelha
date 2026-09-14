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
import { business, getWhatsappLink } from "@/lib/business";

export function generateStaticParams() {
  return cities.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string }>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const city = getCityBySlug(cidade);
  if (!city) return {};

  return {
    title: `Nanopigmentação de Sobrancelhas em ${city.name}`,
    description: `Nanopigmentação de sobrancelhas fio a fio para clientes de ${city.name}-SP, feita no estúdio da Aléxia em Valinhos. Técnica hiper-realista, R$890, resultado de 8 a 12 meses.`,
    alternates: {
      canonical: `/micropigmentacao-sobrancelhas/${city.slug}`,
    },
  };
}

export default async function CidadePage({
  params,
}: {
  params: Promise<{ cidade: string }>;
}) {
  const { cidade } = await params;
  const city = getCityBySlug(cidade);
  if (!city) notFound();

  const testimonials = testimonialsByCity[city.slug as CitySlug];
  const portfolio = getPortfolioForCity(city.slug as CitySlug);

  return (
    <>
      <JsonLd data={getNanopigmentacaoServiceSchema(`${city.name}, SP`)} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-coral">
          Atendimento para {city.name}
        </p>
        <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-wide text-navy">
          Nanopigmentação de sobrancelhas em {city.name}
        </h1>
        <p className="mt-5 max-w-xl text-navy/70">{city.intro}</p>
        <p className="mt-3 max-w-xl text-sm text-navy/50">
          De {city.name} até o estúdio em Valinhos: {city.approxTravelTime}.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-16 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-navy/80">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
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
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
              Depoimentos de clientes
            </h2>
            <div className="mt-4 space-y-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.author} {...t} />
              ))}
            </div>
          </div>
        </div>
        <NanopigmentacaoPriceCard cityName={city.name} />
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
            Resultados de clientes de {city.name} e região
          </h2>
          <div className="mt-8">
            <PortfolioGallery items={portfolio} cityName={city.name} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
          Onde fica o estúdio
        </h2>
        <p className="mt-2 max-w-lg text-navy/70">{business.address.full}</p>
        <a
          href={getWhatsappLink(
            `Olá! Vim pelo site, sou de ${city.name} e quero agendar uma simulação de nanopigmentação de sobrancelhas.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-coral px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-coral-dark"
        >
          Agendar simulação pelo WhatsApp
        </a>
        <div className="mt-10">
          <p className="text-sm text-navy/50">Outras cidades atendidas:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/micropigmentacao-sobrancelhas/${c.slug}`}
                  className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy/80 transition hover:border-coral hover:text-coral"
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
