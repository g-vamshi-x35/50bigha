import { Mail, MapPin, Phone } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import ContactForm from "@/components/ContactForm";

const details = [
  {
    icon: MapPin,
    label: "Office",
    value: "Shankar Nagar, Raipur, Chhattisgarh",
    href: "https://share.google/bEJbO7ba7LimQ0Him",
  },
  { icon: Phone, label: "Phone", value: "+91 91831 43409", href: "tel:+919183143409" },
  {
    icon: Mail,
    label: "Email",
    value: "bighalandhouse@gmail.com",
    href: "mailto:bighalandhouse@gmail.com",
  },
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
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor="Open"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors group-hover:bg-gold/10">
                    <d.icon size={16} />
                  </span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-ivory/40">
                      {d.label}
                    </p>
                    <p className="mt-1 font-body text-sm text-ivory/75 transition-colors group-hover:text-gold">
                      {d.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://share.google/bEJbO7ba7LimQ0Him"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Open map"
              className="group mt-10 flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-ivory/10 bg-surface transition-colors hover:border-gold/40"
            >
              <div className="text-center">
                <MapPin className="mx-auto text-gold transition-transform group-hover:scale-110" size={24} />
                <p className="mt-3 font-body text-sm text-ivory/50 transition-colors group-hover:text-ivory">
                  Shankar Nagar, Raipur — open in Google Maps
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
