"use client";

import { CheckCircle2, ClipboardCheck, ImagePlus, LogIn, ShieldCheck } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import ListPropertyForm from "@/components/ListPropertyForm";

const steps = [
  { icon: LogIn, title: "Create an account", body: "Sign up as a seller in under a minute." },
  {
    icon: ClipboardCheck,
    title: "Add property details",
    body: "Price, area, category, and location.",
  },
  { icon: ImagePlus, title: "Upload photos", body: "At least 6 photos — we'll guide you on angles." },
  {
    icon: ShieldCheck,
    title: "Admin verification",
    body: "Our team checks documents and ownership.",
  },
  { icon: CheckCircle2, title: "Go live", body: "Your listing reaches verified buyers." },
];

export default function SellPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Sell with 50 Bigha" />
        <WordReveal
          as="h1"
          text="List your property, reach verified buyers"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ivory/60 sm:text-lg">
          Listing is free. Every submission is verified by our team before it goes live, so buyers
          trust what they see — and you only hear from serious enquiries.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center sm:text-left">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold sm:mx-0">
                <step.icon size={18} strokeWidth={1.75} />
              </div>
              <p className="mt-3 font-body text-[11px] uppercase tracking-[0.1em] text-ivory/40">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-display text-base text-ivory sm:text-lg">{step.title}</h3>
              <p className="mt-1 font-body text-xs leading-relaxed text-ivory/55">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">
              Get started — no account needed yet
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/60 sm:text-base">
              Tell us about your property below. Our team will reach out to walk you through
              creating a seller account, verifying documents, and getting your listing live.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-ivory/10 bg-surface p-7 sm:p-10">
            <ListPropertyForm />
          </div>
        </div>
      </div>
    </div>
  );
}
