"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Project } from "@/types";

const statusLabels: Record<Project["status"], string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

export default function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (reduce || isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const scrollDistance = track.scrollWidth - container.offsetWidth;
      if (scrollDistance <= 0) return;

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-6 px-6 will-change-transform sm:gap-8 sm:px-10">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            data-cursor="View"
            className="group relative h-[70vh] w-[86vw] shrink-0 overflow-hidden rounded-[2rem] sm:w-[52vw] lg:w-[38vw]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute left-7 top-7 rounded-full bg-ink/60 px-3 py-1 font-body text-[11px] uppercase tracking-[0.15em] text-gold backdrop-blur">
              {statusLabels[project.status]}
            </div>
            <div className="absolute inset-x-7 bottom-7">
              <span className="font-body text-xs text-ivory/50">{project.number}</span>
              <h3 className="mt-1 font-display text-3xl text-ivory sm:text-4xl">{project.title}</h3>
              <p className="mt-1 font-body text-sm text-ivory/60">
                {project.location}, {project.city}
              </p>
              <p className="mt-3 font-display text-xl text-gold">{project.priceRange}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
