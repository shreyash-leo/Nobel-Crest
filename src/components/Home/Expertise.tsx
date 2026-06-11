// components/sections/Expertise.tsx (LIGHT THEME - Updated from dark to light)
export default function Expertise() {
  return (
    <section className="bg-[#F8F6F1] py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4 font-bold">
          Our Expertise
        </p>
        <h2 className="text-6xl mb-20 text-[#0E1228] font-bold tracking-wide">
          Specialized Property
          <br />
          Segments
        </h2>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="border-b border-[#EBB337]/40 pb-8 group">
              <h3 className="text-4xl mb-3 text-[#0E1228] font-bold tracking-wide group-hover:text-[#A57C3E] transition-colors">Luxury Residences</h3>
              <p className="text-[#0E1228]/70 font-medium">
                Premium apartments, villas and penthouses.
              </p>
            </div>
            <div className="border-b border-[#EBB337]/40 pb-8 group">
              <h3 className="text-4xl mb-3 text-[#0E1228] font-bold tracking-wide group-hover:text-[#A57C3E] transition-colors">Commercial Spaces</h3>
              <p className="text-[#0E1228]/70 font-medium">
                Modern office and investment properties.
              </p>
            </div>
            <div className="border-b border-[#EBB337]/40 pb-8 group">
              <h3 className="text-4xl mb-3 text-[#0E1228] font-bold tracking-wide group-hover:text-[#A57C3E] transition-colors">Investment Advisory</h3>
              <p className="text-[#0E1228]/70 font-medium">
                Strategic property investment consultation.
              </p>
            </div>
          </div>
          <div className="relative h-150 overflow-hidden">
            <img
              src="/images/expertise.jpg"
              alt="Luxury Property"
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0E1228]/20"></div>

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0E1228] to-transparent"></div>

            {/* Floating Label */}
            <div className="absolute bottom-8 left-8">
              <p className="text-[#F9CE6C] uppercase tracking-[3px] text-sm mb-2">
                Premium Collection
              </p>

              <h3 className="text-white text-3xl font-light leading-tight">
                Curated Spaces
                <br />
                For Elevated Living
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}