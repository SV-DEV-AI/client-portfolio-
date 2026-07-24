import HeroShowreel from "@/components/sections/HeroShowreel";
import dynamic from "next/dynamic";

const PortfolioGrid = dynamic(() => import("@/components/sections/PortfolioGrid"), { ssr: true });
const ArsenalCarousel = dynamic(() => import("@/components/sections/ArsenalCarousel"), { ssr: true });
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA"), { ssr: true });

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
