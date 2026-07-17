"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, User, X } from "lucide-react";
import { discoverLinks, utilityLinks, primaryNavLinks } from "@/lib/utils";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-[120] flex justify-center px-4 sm:top-5">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.9 }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-colors duration-500 sm:px-6 ${
            scrolled
              ? "border-ivory/10 bg-ink/80"
              : "border-ivory/10 bg-ink/40"
          }`}
        >
          <Link href="/" data-cursor="Home" className="flex items-center gap-2.5">
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/40 sm:h-9 sm:w-9"
            >
              <Image src="/brand/icon.png" alt="" fill sizes="36px" className="object-cover" priority />
            </motion.span>
            <span className="font-display text-lg tracking-wide text-ivory sm:text-xl">
              50 Bigha
            </span>
          </Link>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 2.15 } },
            }}
            className="hidden items-center gap-1 lg:flex"
          >
            {primaryNavLinks.map((link) => (
              <motion.li
                key={link.label}
                variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  data-cursor="Go"
                  className="group relative block whitespace-nowrap rounded-full px-4 py-2 font-body text-[13px] uppercase tracking-[0.15em] text-ivory/75 transition-colors duration-300 hover:text-ivory"
                >
                  <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-white/[0.07] opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <Link
              href="/login"
              aria-label="Sign in"
              data-cursor="Sign in"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-gold/50 hover:text-gold lg:flex sm:h-10 sm:w-10"
            >
              <User size={16} />
            </Link>

            <div className="hidden sm:block">
              <Button href="/contact" variant="primary" cursorLabel="Enquire" className="!py-2.5 !px-5 text-[12px]">
                Enquire now
              </Button>
            </div>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              data-cursor="Menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:border-gold/50 hover:text-gold sm:h-10 sm:w-10"
            >
              <Menu size={18} />
            </button>
          </motion.div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[130] flex flex-col bg-ink px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-gold/40">
                  <Image src="/brand/icon.png" alt="" fill sizes="32px" className="object-cover" />
                </span>
                <span className="font-display text-lg text-ivory">50 Bigha</span>
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-8 flex flex-1 flex-col justify-center overflow-y-auto py-6 sm:mx-auto sm:w-full sm:max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-body text-[11px] uppercase tracking-[0.3em] text-gold"
              >
                Discover
              </motion.p>

              <nav className="mt-4">
                {discoverLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-ivory/10 py-3 font-display text-3xl text-ivory transition-colors hover:text-gold sm:text-4xl"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
              >
                {utilityLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-sm text-ivory/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="sm:mx-auto sm:w-full sm:max-w-2xl"
            >
              <Button href="/contact" variant="primary" onClick={() => setOpen(false)} className="w-full">
                Enquire now
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
