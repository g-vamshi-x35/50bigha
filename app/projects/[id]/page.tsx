import { notFound } from "next/navigation";
import Image from "next/image";
import { BadgeCheck, MapPin } from "lucide-react";
import PropertyGallery from "@/components/PropertyGallery";
import ProjectCard from "@/components/ProjectCard";
import WordReveal from "@/components/WordReveal";
import Button from "@/components/Button";
import { projects } from "@/data/projects";
import { builders } from "@/data/builders";

const statusLabels: Record<string, string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const builder = builders.find((b) => b.id === project.builderId);
  const related = projects.filter((p) => p.id !== project.id && p.city === project.city).slice(0, 3);

  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 font-body text-xs uppercase tracking-[0.15em] text-ivory/45">
          <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">
            {statusLabels[project.status]}
          </span>
        </div>

        <WordReveal
          as="h1"
          text={project.title}
          className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
        />
        <div className="mt-3 flex items-center gap-1.5 font-body text-sm text-ivory/55">
          <MapPin size={14} className="text-gold" />
          {project.location}, {project.city}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <PropertyGallery images={project.gallery} title={project.title} />

            <div className="mt-14">
              <h2 className="font-display text-2xl text-ivory">About this project</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-ivory">Unit types</h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-ivory/10">
                <table className="w-full text-left font-body text-sm">
                  <thead>
                    <tr className="border-b border-ivory/10 text-ivory/45">
                      <th className="px-5 py-3 font-normal uppercase tracking-[0.1em]">Type</th>
                      <th className="px-5 py-3 font-normal uppercase tracking-[0.1em]">Area</th>
                      <th className="px-5 py-3 font-normal uppercase tracking-[0.1em]">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.unitTypes.map((unit) => (
                      <tr key={unit.type} className="border-b border-ivory/5 last:border-0">
                        <td className="px-5 py-3 text-ivory">{unit.type}</td>
                        <td className="px-5 py-3 text-ivory/70">{unit.area}</td>
                        <td className="px-5 py-3 text-gold">{unit.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-ivory">Amenities</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-ivory/15 px-4 py-1.5 font-body text-xs text-ivory/70"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-ivory/10 bg-surface p-7">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-ivory/40">
                Price range
              </p>
              <p className="mt-1 font-display text-3xl text-gold">{project.priceRange}</p>

              {builder && (
                <div className="mt-7 border-t border-ivory/10 pt-6">
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-ivory/40">
                    Developed by
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="relative h-11 w-11 overflow-hidden rounded-full">
                      <Image src={builder.logo} alt="" fill sizes="44px" className="object-cover" />
                    </span>
                    <div>
                      <p className="flex items-center gap-1.5 font-body text-sm text-ivory">
                        {builder.name}
                        {builder.verified && <BadgeCheck size={13} className="text-gold" />}
                      </p>
                      <p className="font-body text-xs text-ivory/45">{builder.city}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-7">
                <Button href="/contact" variant="primary" cursorLabel="Enquire" className="w-full">
                  Enquire about this project
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display text-3xl text-ivory">More in {project.city}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
