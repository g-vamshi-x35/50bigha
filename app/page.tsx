import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import PropertiesSection from "@/components/sections/PropertiesSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import LocationsCraft from "@/components/sections/LocationsCraft";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <PropertiesSection />
      <CategoriesSection />
      <LocationsCraft />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
