import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import TeamSection from "@/components/sections/TeamSection";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";
import BehindTheScenes from "@/components/sections/BehindTheScenes";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <PortfolioShowcase />
      <BehindTheScenes />
      <TeamSection />
      <ClientsMarquee />
      <ContactCTA />
    </>
  );
}
