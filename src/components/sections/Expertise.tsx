// components/sections/Expertise.tsx
export default function Expertise() {
  return (
    <section className="bg-[#ffe9bd] py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4">
          Our Expertise
        </p>
        <h2 className="text-6xl mb-20 text-[#0E1228]">
          Specialized Property
          <br />
          Segments
        </h2>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div className="space-y-10">
            <div className="border-b border-[#EBB337]/40 pb-8">
              <h3 className="text-4xl mb-3 text-[#0E1228]">Luxury Residences</h3>
              <p className="text-[#0E1228]/70">
                Premium apartments, villas and penthouses.
              </p>
            </div>
            <div className="border-b border-[#EBB337]/40 pb-8">
              <h3 className="text-4xl mb-3 text-[#0E1228]">Commercial Spaces</h3>
              <p className="text-[#0E1228]/70">
                Modern office and investment properties.
              </p>
            </div>
            <div className="border-b border-[#EBB337]/40 pb-8">
              <h3 className="text-4xl mb-3 text-[#0E1228]">Investment Advisory</h3>
              <p className="text-[#0E1228]/70">
                Strategic property investment consultation.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="h-[600px] bg-[#F9CE6C] rounded-sm"></div>
        </div>
      </div>
    </section>
  );
}