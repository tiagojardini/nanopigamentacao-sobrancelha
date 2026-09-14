import { getWhatsappLink, nanopigmentacao } from "@/lib/business";

export function NanopigmentacaoPriceCard({ cityName }: { cityName?: string } = {}) {
  const message = cityName
    ? `Olá! Vim pelo site, sou de ${cityName} e quero agendar uma simulação de nanopigmentação de sobrancelhas.`
    : undefined;

  return (
    <div className="border border-navy/10 bg-white p-8">
      <p className="font-heading text-xs font-semibold uppercase tracking-wide text-coral">
        {nanopigmentacao.name}
      </p>
      <p className="mt-2 font-heading text-4xl font-semibold text-navy">
        {nanopigmentacao.priceDisplay}
      </p>
      <p className="text-sm text-navy/60">à vista, ou em {nanopigmentacao.installments}</p>

      <dl className="mt-6 space-y-3 text-sm text-navy/80">
        <div className="flex justify-between gap-4">
          <dt className="text-navy/50">Duração da sessão</dt>
          <dd className="text-right">{nanopigmentacao.sessionDuration}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-navy/50">Duração do resultado</dt>
          <dd className="text-right">{nanopigmentacao.resultDuration}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-navy/50">Taxa de agendamento</dt>
          <dd className="text-right">{nanopigmentacao.bookingFeeDisplay}</dd>
        </div>
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-navy/70">
        {nanopigmentacao.simulationNote}
      </p>

      <a
        href={getWhatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block rounded-full bg-coral px-6 py-3 text-center font-heading text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-coral-dark"
      >
        Agendar simulação pelo WhatsApp
      </a>
    </div>
  );
}
