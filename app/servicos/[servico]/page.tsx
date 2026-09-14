import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return services.map((s) => ({ servico: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { servico: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.servico);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
  };
}

export default function ServicoPage({
  params,
}: {
  params: { servico: string };
}) {
  const service = services.find((s) => s.slug === params.servico);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-terracota">Serviço</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink">
        {service.name}
      </h1>
      <p className="mt-5 text-ink/70">{service.description}</p>

      <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-ink/10 py-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink/40">Valor</p>
          <p className="mt-1 font-serif text-2xl text-ink">
            {service.priceDisplay}
          </p>
        </div>
        {service.sessionDuration && (
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/40">
              Duração
            </p>
            <p className="mt-1 text-ink/80">{service.sessionDuration}</p>
          </div>
        )}
        {service.resultDuration && (
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/40">
              Resultado dura
            </p>
            <p className="mt-1 text-ink/80">{service.resultDuration}</p>
          </div>
        )}
      </div>

      <a
        href={business.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-terracota px-6 py-3 text-sm font-medium text-cream transition hover:bg-terracota-dark"
      >
        Agendar pelo WhatsApp
      </a>

      <div className="mt-12">
        <Link href="/micropigmentacao-sobrancelhas" className="text-sm text-terracota hover:underline">
          Ver também: Nanopigmentação de sobrancelhas →
        </Link>
      </div>
    </section>
  );
}
