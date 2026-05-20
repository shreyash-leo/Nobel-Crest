export default function Vision() {
  return (
    <section className="bg-[#0E1228] py-32 px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* Left */}
        <div>
          <p className="uppercase tracking-[4px] text-[#F9CE6C] text-sm mb-6 font-semibold">
            The Nobelcrest Vision
          </p>

          <h2 className="text-6xl leading-tight text-white mb-8 font-bold">
            Redefining Luxury
            <br />
            Real Estate Experiences
          </h2>

          <p className="text-lg leading-9 text-white/70 max-w-xl">
            Nobelcrest creates timeless real estate experiences through
            carefully curated properties, premium consultation, and
            exceptional investment opportunities tailored for modern living.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-10">

          <div className="border border-[#EBB337]/40 p-10 bg-[#0E1228] shadow-md hover:shadow-lg hover:shadow-[#A57C3E]/10 transition-all duration-300 hover:border-[#A57C3E]/60">
            <h3 className="text-5xl mb-4 text-[#F9CE6C] font-bold">15+</h3>
            <p className="text-white/60 font-medium">Years Experience</p>
          </div>

          <div className="border border-[#EBB337]/40 p-10 bg-[#0E1228] shadow-md hover:shadow-lg hover:shadow-[#A57C3E]/10 transition-all duration-300 hover:border-[#A57C3E]/60">
            <h3 className="text-5xl mb-4 text-[#F9CE6C] font-bold">250+</h3>
            <p className="text-white/60 font-medium">Properties Curated</p>
          </div>

          <div className="border border-[#EBB337]/40 p-10 bg-[#0E1228] shadow-md hover:shadow-lg hover:shadow-[#A57C3E]/10 transition-all duration-300 hover:border-[#A57C3E]/60">
            <h3 className="text-5xl mb-4 text-[#F9CE6C] font-bold">120+</h3>
            <p className="text-white/60 font-medium">Happy Clients</p>
          </div>

          <div className="border border-[#EBB337]/40 p-10 bg-[#0E1228] shadow-md hover:shadow-lg hover:shadow-[#A57C3E]/10 transition-all duration-300 hover:border-[#A57C3E]/60">
            <h3 className="text-5xl mb-4 text-[#F9CE6C] font-bold">10+</h3>
            <p className="text-white/60 font-medium">Luxury Cities</p>
          </div>

        </div>

      </div>
    </section>
  );
}