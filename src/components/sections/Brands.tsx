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
    <section className="bg-[#f5f3ef] py-32 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[4px] text-[#b89b5e] text-sm mb-4">
          Verticals
        </p>

        <h2 className="text-6xl text-[#1a1a1a]">
          Our Brands
        </h2>

      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-10">

        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-white border border-[#e5e1da] h-[180px] flex items-center justify-center p-6 hover:bg-[#faf7f2] transition-all duration-300"
          >

            <h3 className="text-center text-xl text-[#333] leading-snug">
              {brand}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}