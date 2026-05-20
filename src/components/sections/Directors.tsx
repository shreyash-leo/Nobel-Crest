// components/sections/Directors.tsx
export default function Directors() {
  return (
    <section className="bg-[#0E1228] py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-[#F9CE6C] text-sm mb-4">
          Leadership
        </p>
        <h2 className="text-6xl mb-20 text-white">
          Board Of
          <br />
          Directors
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-[#EBB337]/40 bg-[#0E1228] p-6 hover:border-[#A57C3E] transition-all duration-300">
              <div className="h-[450px] bg-[#F9CE6C] mb-6"></div>
              <h3 className="text-3xl mb-3 text-white">
                Director Name
              </h3>
              <p className="text-[#EBB337]">
                Managing Director
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}