import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Sticky Background */}
      <div className="sticky top-0 h-screen">
        <Image
          src="/images/banner.png"
          alt="Luxury Residence"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0E1228]/50"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[4px] text-[#EBB337] mb-6 font-bold">
            Luxury Residences
          </p>

          <h1 className="text-white text-5xl md:text-7xl leading-[0.95] font-bold uppercase tracking-wide max-w-[1000px]">
            Two Milestones.
            <br />
            One Dream Home.
          </h1>

          <p className="mt-8 text-white/80 text-lg max-w-[600px] mx-auto leading-relaxed font-medium">
            Experience premium living spaces crafted with timeless
            architecture, modern elegance, and unmatched comfort.
          </p>

          <button className="mt-10 border border-[#EBB337] px-10 py-4 uppercase tracking-[2px] text-[#EBB337] font-bold hover:bg-[#EBB337] hover:text-[#0E1228] transition-all duration-500">
            Book Your Home
          </button>
        </div>
      </div>
    </section>
  );
}