import { Mail, MapPin, Phone } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import ContactForm from "@/components/ContactForm";

const details = [
  { icon: MapPin, label: "Office", value: "Civil Lines, Raipur, Chhattisgarh 492001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@50bigha.com" },
];

export default function ContactPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Get in touch" />
        <WordReveal
          as="h1"
          text="Let's talk about your next property"
          className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div>
            <div className="space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <d.icon size={16} />
                  </span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-ivory/40">
                      {d.label}
                    </p>
                    <p className="mt-1 font-body text-sm text-ivory/75">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Placeholder map panel — swap for an embedded Google/Mapbox map before launch */}
            <div className="mt-10 flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-ivory/10 bg-surface">
              <div className="text-center">
                <MapPin className="mx-auto text-gold" size={24} />
                <p className="mt-3 font-body text-sm text-ivory/50">Civil Lines, Raipur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
