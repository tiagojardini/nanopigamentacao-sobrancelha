import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { getWhatsappLink } from "@/lib/business";

export function generateStaticParams() {
  return services.map((s) => ({ servico: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servico: string }>;
}): Promise<Metadata> {
  const { servico } = await params;
  const service = services.find((s) => s.slug === servico);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ servico: string }>;
}) {
  const { servico } = await params;
  const service = services.find((s) => s.slug === servico);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-coral">
        Serviço
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold uppercase leading-tight tracking-wide text-navy">
        {service.name}
      </h1>
      <p className="mt-5 text-navy/70">{service.description}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-navy/10 py-6">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-wide text-navy/40">
            Valor
          </p>
          <p className="mt-1 font-heading text-2xl font-semibold text-navy">
            {service.priceDisplay}
          </p>
        </div>
        {service.sessionDuration && (
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-navy/40">
              Duração
            </p>
            <p className="mt-1 text-navy/80">{service.sessionDuration}</p>
          </div>
        )}
        {service.resultDuration && (
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-navy/40">
              Resultado dura
            </p>
            <p className="mt-1 text-navy/80">{service.resultDuration}</p>
          </div>
        )}
      </div>

      <a
        href={getWhatsappLink(`Olá! Vim pelo site e quero agendar o serviço de ${service.name}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-coral px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-coral-dark"
      >
        Agendar pelo WhatsApp
      </a>

      <div className="mt-12">
        <Link href="/micropigmentacao-sobrancelhas" className="text-sm text-coral hover:underline">
          Ver também: Nanopigmentação de sobrancelhas →
        </Link>
      </div>
    </section>
  );
}
