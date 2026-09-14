import { business, nanopigmentacao } from "@/lib/business";

export function NanopigmentacaoPriceCard() {
  return (
    <div className="border border-ink/10 bg-white p-8">
      <p className="text-sm uppercase tracking-wide text-terracota">
        {nanopigmentacao.name}
      </p>
      <p className="mt-2 font-serif text-4xl text-ink">
        {nanopigmentacao.priceDisplay}
      </p>
      <p className="text-sm text-ink/60">à vista, ou em {nanopigmentacao.installments}</p>

      <dl className="mt-6 space-y-3 text-sm text-ink/80">
        <div className="flex justify-between gap-4">
          <dt className="text-ink/50">Duração da sessão</dt>
          <dd className="text-right">{nanopigmentacao.sessionDuration}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/50">Duração do resultado</dt>
          <dd className="text-right">{nanopigmentacao.resultDuration}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink/50">Taxa de agendamento</dt>
          <dd className="text-right">{nanopigmentacao.bookingFeeDisplay}</dd>
        </div>
      </dl>

      <p className="mt-6 text-sm leading-relaxed text-ink/70">
        {nanopigmentacao.simulationNote}
      </p>

      <a
        href={business.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block rounded-full bg-terracota px-6 py-3 text-center text-sm font-medium text-cream transition hover:bg-terracota-dark"
      >
        Agendar simulação pelo WhatsApp
      </a>
    </div>
  );
}
