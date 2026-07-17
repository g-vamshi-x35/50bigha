import WordReveal from "@/components/WordReveal";
import Button from "@/components/Button";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div className="grain" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <WordReveal
          as="h2"
          align="center"
          text="Ready to find your next property in Raipur?"
          className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mx-auto mt-6 max-w-lg font-body text-base text-ivory/60 sm:text-lg">
          Browse verified listings today, or list your own property with 50 Bigha for free.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/properties" variant="primary" cursorLabel="Explore">
            Explore properties
          </Button>
          <Button href="/contact" variant="outline" cursorLabel="Talk">
            Talk to our team
          </Button>
        </div>
      </div>
    </section>
  );
}
