// components/sections/Brands.tsx (LIGHT THEME - Updated from dark to light)
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
    <section className="bg-[#F8F6F1] py-32 overflow-hidden">
      <div className="text-center mb-20">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4 font-bold">
          Verticals
        </p>
        <h2 className="text-6xl text-[#0E1228] font-bold tracking-wide">Our Brands</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-10">
        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-[#F9CE6C]/20 border border-[#EBB337]/30 h-45 flex items-center justify-center p-6 hover:bg-[#F9CE6C] hover:border-[#A57C3E] transition-all duration-300 group"
          >
            <h3 className="text-center text-xl text-[#0E1228] leading-snug font-bold tracking-wide group-hover:text-[#0E1228] transition-colors">
              {brand}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}