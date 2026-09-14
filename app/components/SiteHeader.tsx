import Link from "next/link";
import { business } from "@/lib/business";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink">
          Alléxia Sobrancelhas
        </Link>
        <nav className="hidden gap-8 text-sm text-ink/80 md:flex">
          <Link href="/micropigmentacao-sobrancelhas" className="hover:text-terracota">
            Nanopigmentação
          </Link>
          <Link href="/servicos/design-estrategico" className="hover:text-terracota">
            Serviços
          </Link>
          <Link href="/sobre" className="hover:text-terracota">
            Sobre a Aléxia
          </Link>
        </nav>
        <a
          href={business.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-terracota px-5 py-2 text-sm font-medium text-cream transition hover:bg-terracota-dark"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
