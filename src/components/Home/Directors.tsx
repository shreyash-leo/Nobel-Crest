// components/sections/Directors.tsx (LIGHT THEME - Keep as is ✅)
export default function Directors() {
  return (
    <section className="bg-white py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4 font-bold">
          Leadership
        </p>
        <h2 className="text-6xl mb-20 text-[#0E1228] font-bold tracking-wide">
          Board Of
          <br />
          Directors
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-[#EBB337]/30 bg-[#F9CE6C]/20 p-6 hover:border-[#A57C3E] transition-all duration-300">
              <div className="h-[450px] bg-gradient-to-br from-[#A57C3E] to-[#EBB337] mb-6"></div>
              <h3 className="text-3xl mb-3 text-[#0E1228] font-bold tracking-wide">
                Director Name
              </h3>
              <p className="text-[#A57C3E] font-bold tracking-wide">
                Managing Director
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}