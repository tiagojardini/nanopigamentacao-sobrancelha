import Link from "next/link";
import { business } from "@/lib/business";
import { cities } from "@/lib/cities";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream/90">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-cream">Alléxia Sobrancelhas</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {business.address.full}
            </p>
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-terracota-light hover:underline"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
          <div>
            <p className="text-sm font-medium text-cream">Atendemos também</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              {cities
                .filter((c) => c.slug !== "valinhos")
                .map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/micropigmentacao-sobrancelhas/${c.slug}`}
                      className="hover:text-terracota-light hover:underline"
                    >
                      Micropigmentação em {c.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-cream">Redes</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracota-light hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-terracota-light hover:underline"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-cream/50">
          © {new Date().getFullYear()} Alléxia Sobrancelhas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
