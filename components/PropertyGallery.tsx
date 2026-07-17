"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div>
      <button
        onClick={() => setLightbox(true)}
        data-cursor="Explore"
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]"
      >
        <Image
          src={images[active]}
          alt={title}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </button>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border transition-colors ${
                active === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[160] flex items-center justify-center bg-ink/95 p-6"
            onClick={() => setLightbox(false)}
          >
            <button
              aria-label="Close gallery"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-[16/10] w-full max-w-4xl"
            >
              <Image src={images[active]} alt={title} fill sizes="90vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
