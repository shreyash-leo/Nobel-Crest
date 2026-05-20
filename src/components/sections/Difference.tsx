// components/sections/Difference.tsx
export default function Difference() {
  return (
    <section className="bg-[#ffe9bd] py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4">
          The Nobelcrest Difference
        </p>
        <h2 className="text-6xl mb-20 text-[#0E1228]">
          Why Clients
          <br />
          Choose Us
        </h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {[
            "Verified Properties",
            "Luxury Consultation",
            "Transparent Deals",
            "Investment Expertise",
          ].map((item) => (
            <div
              key={item}
              className="border border-[#EBB337]/40 p-10 min-h-[300px] bg-white hover:shadow-xl transition-all duration-300 hover:border-[#A57C3E]"
            >
              <h3 className="text-3xl leading-tight text-[#0E1228]">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}