import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio";

export function PortfolioGallery({
  items,
  cityName,
}: {
  items: PortfolioItem[];
  cityName: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="space-y-1">
          <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-sm">
            <div className="relative aspect-[3/4] bg-ink/5">
              <Image
                src={item.beforeImage}
                alt={`Sobrancelha antes da nanopigmentação — atendimento para clientes de ${cityName}`}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 16vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] bg-ink/5">
              <Image
                src={item.afterImage}
                alt={`Resultado de nanopigmentação de sobrancelha — atendimento para clientes de ${cityName}`}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 16vw, 25vw"
              />
            </div>
          </div>
          <p className="text-center text-xs uppercase tracking-wide text-ink/40">
            Antes / Depois
          </p>
        </div>
      ))}
    </div>
  );
}
