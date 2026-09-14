import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <figure className="border-l-2 border-coral/40 pl-5">
      <blockquote className="font-accent text-lg italic leading-snug text-navy/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-3 text-sm text-navy/60">— {author}</figcaption>
    </figure>
  );
}
