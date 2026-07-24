import HeroShowreel from "@/components/sections/HeroShowreel";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ArsenalCarousel from "@/components/sections/ArsenalCarousel";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroShowreel />
      <PortfolioGrid />
      <ArsenalCarousel />
      <ContactCTA />
    </>
  );
}
