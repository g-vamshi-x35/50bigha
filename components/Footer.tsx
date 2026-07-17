import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, XIcon } from "./SocialIcons";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Buy", href: "/buy" },
      { label: "Rent", href: "/rent" },
      { label: "Sell", href: "/sell" },
      { label: "All properties", href: "/properties" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Builders", href: "/builders" },
      { label: "Engineers", href: "/engineers" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/contact" },
      { label: "Terms of use", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 bg-ink pt-20">
      <div className="grain" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 pb-16 lg:grid-cols-[1.1fr_2.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image src="/brand/icon.png" alt="" fill sizes="36px" className="object-cover" />
              </span>
              <span className="font-display text-xl text-ivory">50 Bigha</span>
            </Link>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ivory/50">
              India&apos;s trusted real estate marketplace — find, build, rent, and invest, all in
              one verified platform.
            </p>
            <div className="mt-8">
              <p className="mb-3 font-body text-[11px] uppercase tracking-[0.25em] text-ivory/40">
                Stay updated
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 font-body text-[11px] uppercase tracking-[0.25em] text-gold">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        data-cursor="Go"
                        className="font-body text-sm text-ivory/60 transition-colors hover:text-ivory"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ivory/10 py-8 sm:flex-row">
          <p className="font-body text-xs text-ivory/40">
            © {new Date().getFullYear()} 50 Bigha Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[InstagramIcon, LinkedinIcon, XIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                data-cursor="Follow"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/60 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
