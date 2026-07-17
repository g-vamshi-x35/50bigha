import Image from "next/image";
import { Compass, ShieldCheck, Target } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import TeamCard from "@/components/TeamCard";
import Button from "@/components/Button";
import { team } from "@/data/misc";

const timeline = [
  {
    year: "2026",
    title: "50 Bigha is founded",
    body: "Launched in Raipur, Chhattisgarh with a simple goal — one verified platform to find, build, rent, and invest in property.",
  },
  {
    year: "Phase 1",
    title: "Residential & land listings",
    body: "Houses, apartments, villas, PGs, plots, and farmland — the first 100 verified properties go live across Raipur.",
  },
  {
    year: "Phase 2",
    title: "Builder & industrial projects",
    body: "Verified builder projects and industrial land parcels join the platform as the owner network grows.",
  },
  {
    year: "Next",
    title: "Beyond Raipur",
    body: "Expanding city by city, applying the same verification standard everywhere 50 Bigha operates.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Verification first",
    body: "Owner identity, documents, and physical condition are checked before any listing goes live.",
  },
  {
    icon: Target,
    title: "One platform",
    body: "Buy, sell, rent, and invest from a single account — no juggling multiple agents or apps.",
  },
  {
    icon: Compass,
    title: "Local expertise",
    body: "Our team knows Raipur's neighborhoods, pricing, and paperwork better than any national portal.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="About 50 Bigha" />
        <WordReveal
          as="h1"
          text="Building Raipur's most trusted real estate ecosystem"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ivory/60 sm:text-lg">
          50 Bigha exists to help people buy, sell, rent, and build property from one verified
          platform — starting in Raipur, Chhattisgarh, and growing city by city.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-ivory/10 bg-surface p-7">
              <value.icon size={20} className="text-gold" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-xl text-ivory">{value.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ivory/55">{value.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
              alt="50 Bigha founder story"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">Our story</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/60 sm:text-base">
              50 Bigha started with a straightforward frustration: finding a trustworthy property
              in Raipur meant relying on word of mouth, unverified listings, and agents with
              competing incentives. We set out to fix that — verifying every owner, document,
              and property before it reaches a buyer or tenant.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/60 sm:text-base">
              Today, that same standard applies to every category we list — from a 2BHK near the
              district court to farmland outside Mana.
            </p>
            <div className="mt-8">
              <Button href="/properties" variant="primary" cursorLabel="Explore">
                Explore properties
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <h2 className="font-display text-3xl text-ivory sm:text-4xl">Our roadmap</h2>
          <div className="mt-10 space-y-0 border-t border-ivory/10">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-ivory/10 py-8 sm:grid-cols-[140px_1fr]"
              >
                <span className="font-display text-lg text-gold">{item.year}</span>
                <div>
                  <h3 className="font-display text-xl text-ivory">{item.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ivory/55">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <EyebrowBadge label="Our team" />
          <h2 className="mt-6 font-display text-3xl text-ivory sm:text-4xl">
            The people behind 50 Bigha
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
