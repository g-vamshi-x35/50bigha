import { notFound } from "next/navigation";
import Image from "next/image";
import { BadgeCheck, Calendar, Mail, MapPin, Phone } from "lucide-react";
import WordReveal from "@/components/WordReveal";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { builders } from "@/data/builders";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return builders.map((b) => ({ id: b.id }));
}

export default async function BuilderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const builder = builders.find((b) => b.id === id);
  if (!builder) notFound();

  const builderProjects = projects.filter((p) => p.builderId === builder.id);

  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem]">
          <Image
            src={builder.coverImage}
            alt={builder.name}
            fill
            priority
            sizes="90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        <div className="-mt-14 flex flex-wrap items-end justify-between gap-6 px-2">
          <div className="flex items-center gap-4">
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-ink">
              <Image src={builder.logo} alt="" fill sizes="80px" className="object-cover" />
            </span>
            <div>
              <WordReveal
                as="h1"
                text={builder.name}
                className="font-display text-3xl text-ivory sm:text-4xl"
              />
              <div className="mt-1 flex items-center gap-1.5 font-body text-sm text-ivory/55">
                <MapPin size={13} className="text-gold" />
                {builder.city}
                {builder.verified && (
                  <span className="ml-2 flex items-center gap-1 text-gold">
                    <BadgeCheck size={13} /> Verified
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button href="/contact" variant="primary" cursorLabel="Enquire">
            Enquire with builder
          </Button>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="font-display text-2xl text-ivory">About {builder.name}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
              {builder.description}
            </p>
          </div>
          <aside className="rounded-[1.5rem] border border-ivory/10 bg-surface p-7">
            <div className="space-y-4 font-body text-sm text-ivory/70">
              <div className="flex items-center gap-3">
                <Calendar size={15} className="text-gold" />
                Since {builder.since}
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold" />
                {builder.phone}
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-gold" />
                {builder.email}
              </div>
            </div>
          </aside>
        </div>

        {builderProjects.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl text-ivory">
              Projects by {builder.name}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {builderProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
