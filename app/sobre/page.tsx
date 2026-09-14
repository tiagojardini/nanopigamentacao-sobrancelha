import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Sobre a Aléxia",
  description:
    "Conheça a Aléxia, especialista em nanopigmentação de sobrancelhas em Valinhos-SP, e o espaço onde ela atende.",
};

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-terracota">Perfil</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink">
        Sobre a Aléxia
      </h1>
      <p className="mt-6 text-ink/80">
        “Naturalidade está no realce da beleza que já existe. Pensando nisso,
        a técnica utilizada recupera a estrutura estética da sobrancelha, de
        forma muito natural e realista. Afinal, suas sobrancelhas valorizam e
        harmonizam o seu rosto e emolduram o seu olhar.”
      </p>

      <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-sm bg-ink/5">
        <Image
          src="/estudio-alexia.jpg"
          alt="Espaço de atendimento da Aléxia Sobrancelhas em Valinhos"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="mt-10 font-serif text-2xl text-ink">O espaço</h2>
      <p className="mt-3 text-ink/70">
        O estúdio fica no Porto Seguro Mall & Office, no bairro Jd Paiquerê em
        Valinhos, pertinho do Condomínio Residencial Millenium e do Colégio
        Porto Seguro. {business.address.full}.
      </p>
    </section>
  );
}
