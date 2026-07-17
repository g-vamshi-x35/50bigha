import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">Page not found</p>
      <h1 className="mt-4 font-display text-[22vw] leading-none text-ivory sm:text-[10rem]">
        404
      </h1>
      <p className="mt-4 max-w-sm font-body text-sm text-ivory/55">
        This page doesn&apos;t exist, or the listing may have been removed.
      </p>
      <div className="mt-10">
        <Button href="/" variant="primary" cursorLabel="Home">
          Back to home
        </Button>
      </div>
    </div>
  );
}
