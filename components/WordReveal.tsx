"use client";

import { motion } from "framer-motion";
import { createElement, Fragment } from "react";

interface WordRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  mode?: "inView" | "onMount";
  startDelay?: number;
  stagger?: number;
  align?: "left" | "center";
}

export default function WordReveal({
  text,
  as = "p",
  className = "",
  mode = "inView",
  startDelay = 0,
  stagger = 0.045,
  align = "left",
}: WordRevealProps) {
  const words = text.split(" ");

  const viewportProps =
    mode === "inView"
      ? { whileInView: "visible", initial: "hidden", viewport: { once: true, margin: "-10% 0px -10% 0px" } }
      : { animate: "visible", initial: "hidden" };

  return createElement(
    as,
    { className: `${className} ${align === "center" ? "text-center" : ""}` },
    <Fragment>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { opacity: 0, y: "40%", filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: "0%",
                filter: "blur(0px)",
                transition: {
                  duration: 0.75,
                  delay: startDelay + i * stagger,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            {...viewportProps}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Fragment>
  );
}
