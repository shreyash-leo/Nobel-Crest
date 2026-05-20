// components/sections/Brands.tsx
export default function Brands() {
  const brands = [
    "Nobelcrest Living",
    "Nobelcrest Interiors",
    "Nobelcrest Luxury",
    "Nobelcrest Commercial",
    "Nobelcrest Estates",
    "Nobelcrest Advisory",
    "Nobelcrest Villas",
    "Nobelcrest Residences",
    "Nobelcrest Prime",
    "Nobelcrest Signature",
    "Nobelcrest Elite",
    "Nobelcrest Horizon",
  ];

  return (
    <section className="bg-white py-32 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4">
          Verticals
        </p>
        <h2 className="text-6xl text-[#0E1228]">Our Brands</h2>
      </div>
      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-10">
        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-[#ffe9bd] border border-[#EBB337]/30 h-[180px] flex items-center justify-center p-6 hover:bg-[#F9CE6C] hover:border-[#A57C3E] transition-all duration-300"
          >
            <h3 className="text-center text-xl text-[#0E1228] leading-snug font-medium">
              {brand}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}