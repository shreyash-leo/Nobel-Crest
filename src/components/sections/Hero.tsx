// components/sections/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Banner Image */}
      <Image
        src="/images/banner.png"
        alt="Luxury Residence"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center">

          <p className="text-sm uppercase tracking-[4px] text-[#EBB337] mb-6">
            Luxury Residences
          </p>

          <h1 className="text-white text-5xl md:text-7xl leading-[0.95] font-medium uppercase max-w-[1000px]">
            Two Milestones.
            <br />
            One Dream Home.
          </h1>

          <p className="mt-8 text-white/80 text-lg max-w-[600px] mx-auto leading-relaxed">
            Experience premium living spaces crafted with timeless
            architecture, modern elegance, and unmatched comfort.
          </p>

          <button className="mt-10 border border-[#EBB337] px-10 py-4 uppercase tracking-[2px] text-[#EBB337] hover:bg-[#EBB337] hover:text-[#0E1228] transition-all duration-300">
            Book Your Home
          </button>

        </div>
      </div>
    </section>
  );
}