"use client";

import { Building2 } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.status !== "completed").slice(0, 5);

export default function ProjectsPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Builder projects" icon={Building2} />
        <WordReveal
          as="h1"
          text="Projects shaping India's next neighborhoods"
          className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-5 max-w-xl font-body text-base text-ivory/60">
          Upcoming and ongoing developments from verified builders — drag or scroll through the
          featured projects below.
        </p>
      </div>

      <div className="mt-14">
        <ProjectsShowcase projects={featured} />
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="font-display text-3xl text-ivory">All projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
