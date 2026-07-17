import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <EyebrowBadge label="Welcome back" />
          <WordReveal
            as="h1"
            text="Sign in to your account"
            className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
          />
          <p className="mt-5 max-w-sm font-body text-base text-ivory/60">
            One account for buying, selling, listing, and managing properties on 50 Bigha —
            whether you&apos;re a buyer, owner, or builder.
          </p>

          <div className="mt-12 rounded-[1.5rem] border border-ivory/10 bg-surface p-7 sm:p-10">
            <LoginForm />
          </div>
        </div>

        <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
            alt="Interior of a verified property"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10" />
        </div>
      </div>
    </div>
  );
}
