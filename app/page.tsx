import Link from "next/link";
import Image from "next/image";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { testimonialsByCity } from "@/lib/testimonials";
import { TestimonialCard } from "./components/TestimonialCard";
import { JsonLd, getLocalBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  const featuredTestimonials = [
    testimonialsByCity.valinhos[0],
    testimonialsByCity.campinas[0],
    testimonialsByCity.jundiai[0],
  ];

  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-coral">
            Especialista em nanopigmentação
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight tracking-wide text-navy md:text-5xl">
            Sobrancelhas com naturalidade, todos os dias.
          </h1>
          <p className="mt-5 max-w-md text-navy/70">
            A nanopigmentação fio a fio realça a beleza que já existe, com
            biossegurança e um design pensado pra cada rosto. Atendimento em
            estúdio próprio em Valinhos-SP.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/micropigmentacao-sobrancelhas"
              className="rounded-full bg-coral px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-coral-dark"
            >
              Conhecer a nanopigmentação
            </Link>
            <Link
              href="/sobre"
              className="rounded-full border border-navy/20 px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wide text-navy transition hover:border-navy/40"
            >
              Sobre a Aléxia
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy/5">
          <Image
            src="/hero-alexia.jpg"
            alt="Resultado de nanopigmentação de sobrancelha feita pela Aléxia"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
            Onde a Aléxia atende
          </h2>
          <p className="mt-2 max-w-lg text-navy/70">
            Estúdio próprio em Valinhos-SP, recebendo clientes que vêm também
            de:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== "valinhos")
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

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
          Outros cuidados
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="border border-navy/10 p-6 transition hover:border-coral"
            >
              <p className="font-heading text-lg font-semibold text-navy">{s.name}</p>
              <p className="mt-2 text-sm text-navy/60">{s.shortDescription}</p>
              <p className="mt-3 text-sm font-medium text-coral">
                {s.priceDisplay}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy/[0.03] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
            Quem já fez conta
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
