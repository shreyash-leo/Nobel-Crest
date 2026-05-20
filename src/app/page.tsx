import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Expertise from "@/components/sections/Expertise";
import Portfolio from "@/components/sections/Portfolio";
import Difference from "@/components/sections/Difference";
import ClientExperience from "@/components/sections/ClientExperience";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Directors from "@/components/sections/Directors";
import Footer from "@/components/sections/Footer";
import Brands from "@/components/sections/Brands";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Expertise />
      <Portfolio />
      <Difference />
      <Brands />
      <ClientExperience />
      <ConsultationCTA />
      <FeaturedProjects />
      <Directors />
      <Footer />
    </main>
  );
}