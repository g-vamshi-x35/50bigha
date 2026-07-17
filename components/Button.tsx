"use client";

import { MouseEvent, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  cursorLabel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light border border-gold shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_8px_30px_-8px_rgba(212,175,55,0.55)]",
  outline:
    "bg-white/5 text-ivory border border-ivory/25 backdrop-blur-md hover:border-gold hover:text-gold",
  ghost: "text-ivory border border-transparent hover:text-gold px-0",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  cursorLabel = "View",
  onClick,
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.5 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const classes = cn(
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-full font-body text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300",
    variant !== "ghost" && "px-7 py-3.5",
    variantStyles[variant],
    className
  );

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorLabel}
      className="inline-block"
    >
      {href ? (
        <Link href={href} onClick={onClick}>
          {content}
        </Link>
      ) : (
        <button type={type} onClick={onClick} className="inline-block">
          {content}
        </button>
      )}
    </div>
  );
}
