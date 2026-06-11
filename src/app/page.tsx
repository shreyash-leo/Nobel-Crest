import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/Home/Hero";
import PropertySearch from "@/components/Home/PropertySearch";
import Vision from "@/components/Home/Vision";
import Expertise from "@/components/Home/Expertise";
import Portfolio from "@/components/Home/Portfolio";
import Difference from "@/components/Home/Difference";
import Brands from "@/components/Home/Brands";
import ClientExperience from "@/components/Home/ClientExperience";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Directors from "@/components/Home/Directors";
import ConsultationCTA from "@/components/Home/ConsultationCTA";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <main className="bg-[#0E1228]">

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="sticky top-0 h-screen z-10">
        <Hero />
      </section>

      {/* PROPERTY SEARCH */}
      <section className="relative z-20 -mt-28 overflow-hidden">
        <PropertySearch />
      </section>

      {/* VISION */}
      <section className="relative z-30">
        <Vision />
      </section>

      {/* EXPERTISE */}
      <section className="relative z-40">
        <Expertise />
      </section>

      {/* PORTFOLIO */}
      <section className="relative z-50">
        <Portfolio />
      </section>

      {/* DIFFERENCE */}
      <section className="relative z-[60]">
        <Difference />
      </section>

      {/* BRANDS */}
      <section className="relative z-[70]">
        <Brands />
      </section>

      {/* CLIENT EXPERIENCE */}
      <section className="relative z-[80]">
        <ClientExperience />
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-[90]">
        <FeaturedProjects />
      </section>

      {/* DIRECTORS */}
      <section className="relative z-[100]">
        <Directors />
      </section>

      {/* CTA */}
      <section className="relative z-[110]">
        <ConsultationCTA />
      </section>

      {/* FOOTER */}
      <section className="relative z-[120]">
        <Footer />
      </section>

    </main>
  );
}