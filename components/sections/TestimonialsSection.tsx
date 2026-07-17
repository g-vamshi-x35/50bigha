import TestimonialSlider from "@/components/TestimonialSlider";
import { testimonials } from "@/data/misc";

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="grain" />
      <div className="mx-auto max-w-6xl px-6">
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
