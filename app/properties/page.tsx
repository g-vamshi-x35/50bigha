import PropertyListing from "@/components/PropertyListing";

export default function PropertiesPage() {
  return (
    <PropertyListing
      initialPurpose="all"
      eyebrow="All listings"
      heading="Properties across India"
      intro="Filter by purpose and category to find verified houses, apartments, plots, and land currently listed on 50 Bigha."
    />
  );
}
