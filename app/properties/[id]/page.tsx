import { notFound } from "next/navigation";
import {
  BedDouble,
  Bath,
  Car,
  Compass,
  Ruler,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";
import Button from "@/components/Button";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyCard from "@/components/PropertyCard";
import WordReveal from "@/components/WordReveal";
import { properties, purposeLabels } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  const related = properties.filter((p) => p.category === property.category && p.id !== property.id);

  const specs = [
    { icon: Ruler, label: "Area", value: property.area },
    { icon: BedDouble, label: "Bedrooms", value: property.bedrooms ?? "—" },
    { icon: Bath, label: "Bathrooms", value: property.bathrooms ?? "—" },
    { icon: Car, label: "Parking", value: property.parking ? "Available" : "—" },
    { icon: Compass, label: "Facing", value: property.facing ?? "—" },
    {
      icon: Calendar,
      label: "Listed",
      value: new Date(property.listedDate).toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      }),
    },
  ];

  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 font-body text-xs uppercase tracking-[0.15em] text-ivory/45">
          <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">
            {purposeLabels[property.purpose]}
          </span>
          <span>{property.category}</span>
        </div>

        <WordReveal
          as="h1"
          text={property.title}
          className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
        />
        <div className="mt-3 flex items-center gap-1.5 font-body text-sm text-ivory/55">
          <MapPin size={14} className="text-gold" />
          {property.location}, {property.state}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <PropertyGallery images={property.gallery} title={property.title} />

            <div className="mt-14">
              <h2 className="font-display text-2xl text-ivory">About this property</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
                {property.description}
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-ivory">Specifications</h2>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <spec.icon size={16} className="text-gold" strokeWidth={1.75} />
                    <p className="mt-2 font-body text-xs uppercase tracking-[0.1em] text-ivory/40">
                      {spec.label}
                    </p>
                    <p className="mt-1 font-display text-lg text-ivory">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-ivory">Amenities</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-ivory/15 px-4 py-1.5 font-body text-xs text-ivory/70"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-ivory">Location</h2>
              {/* Placeholder map panel — swap for an embedded Google/Mapbox map with the property's lat/long before launch */}
              <div className="mt-5 flex aspect-[16/7] items-center justify-center rounded-2xl border border-ivory/10 bg-surface">
                <div className="text-center">
                  <MapPin className="mx-auto text-gold" size={22} />
                  <p className="mt-2 font-body text-sm text-ivory/50">
                    {property.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-ivory/10 bg-surface p-7">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-ivory/40">Price</p>
              <p className="mt-1 font-display text-4xl text-gold">{property.price}</p>

              <div className="mt-6 space-y-3 border-t border-ivory/10 pt-6 font-body text-sm text-ivory/70">
                <div className="flex items-center justify-between">
                  <span className="text-ivory/45">Owner</span>
                  <span>{property.ownerName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ivory/45">Phone</span>
                  <span>{property.ownerPhone}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <Button href="/contact" variant="primary" cursorLabel="Enquire" className="w-full">
                  <Phone size={14} className="mr-2 inline" />
                  Enquire now
                </Button>
                <Button href="/contact" variant="outline" cursorLabel="Visit" className="w-full">
                  Schedule a visit
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display text-3xl text-ivory">More {property.category} listings</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
