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
      {items.map((item) =>
        item.kind === "video" ? (
          <div key={item.id} className="space-y-1">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-navy/5">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={item.video.replace(/\.mp4$/, ".webm")} type="video/webm" />
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <p className="font-heading text-center text-xs font-semibold uppercase tracking-wide text-navy/40">
              Resultado
            </p>
          </div>
        ) : (
          <div key={item.id} className="space-y-1">
            <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-sm">
              <div className="relative aspect-[3/4] bg-navy/5">
                <Image
                  src={item.beforeImage}
                  alt={`Sobrancelha antes da nanopigmentação — atendimento para clientes de ${cityName}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 16vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] bg-navy/5">
                <Image
                  src={item.afterImage}
                  alt={`Resultado de nanopigmentação de sobrancelha — atendimento para clientes de ${cityName}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 16vw, 25vw"
                />
              </div>
            </div>
            <p className="font-heading text-center text-xs font-semibold uppercase tracking-wide text-navy/40">
              Antes / Depois
            </p>
          </div>
        )
      )}
    </div>
  );
}
