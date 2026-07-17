import PropertyListing, { LAND_FIRST } from "@/components/PropertyListing";

export default function BuyPage() {
  return (
    <PropertyListing
      initialPurpose="buy"
      lockPurpose
      categoryOrder={LAND_FIRST}
      eyebrow="Buy"
      heading="Land and property to buy, across India"
      intro="From plots and farmland to houses and commercial spaces — every listing is site-verified before it goes live."
    />
  );
}
