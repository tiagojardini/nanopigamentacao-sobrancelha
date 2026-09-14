import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";

export function SiteHeader() {
  return (
    <header className="border-b border-navy/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt={business.name}
            width={175}
            height={69}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden gap-8 font-heading text-xs font-semibold uppercase tracking-wide text-navy/80 md:flex">
          <Link href="/micropigmentacao-sobrancelhas" className="hover:text-coral">
            Nanopigmentação
          </Link>
          <Link href="/servicos/design-estrategico" className="hover:text-coral">
            Serviços
          </Link>
          <Link href="/sobre" className="hover:text-coral">
            Sobre a Aléxia
          </Link>
        </nav>
        <a
          href={business.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-coral px-5 py-2 font-heading text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-coral-dark"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
