import PropertyListing, { RESIDENTIAL_FIRST } from "@/components/PropertyListing";

export default function RentPage() {
  return (
    <PropertyListing
      initialPurpose="rent"
      lockPurpose
      categoryOrder={RESIDENTIAL_FIRST}
      eyebrow="Rent"
      heading="Homes and spaces to rent, verified"
      intro="Houses, apartments, PG & rooms, and commercial spaces available for rent — every owner and listing checked before it's live."
    />
  );
}
