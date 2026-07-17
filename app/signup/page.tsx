import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <EyebrowBadge label="Join 50 Bigha" />
          <WordReveal
            as="h1"
            text="Create your account"
            className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
          />
          <p className="mt-5 max-w-sm font-body text-base text-ivory/60">
            Whether you&apos;re browsing for your next home, listing a property, or managing
            builder projects — one account covers it all.
          </p>

          <div className="mt-12 rounded-[1.5rem] border border-ivory/10 bg-surface p-7 sm:p-10">
            <SignupForm />
          </div>
        </div>

        <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
            alt="Modern property interior"
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
