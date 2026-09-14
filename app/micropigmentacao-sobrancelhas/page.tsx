import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { NanopigmentacaoPriceCard } from "../components/NanopigmentacaoPriceCard";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { getPortfolioForCity } from "@/lib/portfolio";
import { JsonLd, getNanopigmentacaoServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nanopigmentação de Sobrancelhas Fio a Fio",
  description:
    "Nanopigmentação de sobrancelhas fio a fio, técnica hiper-realista, biossegurança e design individual. R$890, resultado de 8 a 12 meses. Estúdio em Valinhos-SP.",
};

export default function MicropigmentacaoPage() {
  const portfolio = getPortfolioForCity("valinhos");

  return (
    <>
      <JsonLd data={getNanopigmentacaoServiceSchema()} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-coral">
          Técnica fio a fio
        </p>
        <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold uppercase leading-tight tracking-wide text-navy">
          Nanopigmentação de sobrancelhas
        </h1>
        <p className="mt-5 max-w-xl text-navy/70">
          A nanopigmentação veio pra realçar a beleza natural que já existe,
          trazendo autoestima e praticidade. Antes de agendar, é feita uma
          triagem baseada no histórico clínico da cliente, pra garantir que a
          pele está apta ao procedimento.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-16 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-navy/80">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
              Design estratégico individual
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Cada rosto tem sua própria estrutura de pelos e formato — o
              design é feito em cima dessas medidas, nunca de um molde pronto.
              Falhas e cicatrizes também podem ser preenchidas com a técnica.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
              Fios hiper-realistas
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              A abordagem da Aléxia é fios mega finos, estrategicamente
              desenhados na cor dos seus próprios pelos — inclusive pra fios
              loiros, ruivos ou muito claros, com teste de cor antes da
              aplicação.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy">
              Cuidado e biossegurança
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Pigmentos importados de alta performance, livres de metais
              pesados, e uma cartilha completa de cuidados pós-procedimento
              entregue no dia da sessão.
            </p>
          </div>
        </div>
        <NanopigmentacaoPriceCard />
      </section>

      <section className="border-y border-navy/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
            Resultados reais
          </h2>
          <p className="mt-2 max-w-lg text-navy/70">
            Uma amostra do portfólio de antes e depois da Aléxia.
          </p>
          <div className="mt-8">
            <PortfolioGallery items={portfolio} cityName="Valinhos e região" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy">
          Atendemos também
        </h2>
        <p className="mt-2 max-w-lg text-navy/70">
          Veja detalhes de atendimento, depoimentos e portfólio específicos
          pra cada cidade:
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
      </section>
    </>
  );
}
