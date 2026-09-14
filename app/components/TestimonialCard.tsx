import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <figure className="border-l-2 border-terracota/40 pl-5">
      <blockquote className="font-serif text-lg leading-snug text-ink/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-3 text-sm text-ink/60">— {author}</figcaption>
    </figure>
  );
}
