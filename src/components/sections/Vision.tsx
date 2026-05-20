export default function Vision() {
  return (
    <section className="bg-[#f5f3ef] py-32 px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* Left */}
        <div>
          <p className="uppercase tracking-[4px] text-[#F6F2EB] text-sm mb-6">
            The Nobelcrest Vision
          </p>

          <h2 className="text-6xl leading-tight text-[#1a1a1a] mb-8">
            Redefining Luxury
            <br />
            Real Estate Experiences
          </h2>

          <p className="text-lg leading-9 text-[#666] max-w-xl">
            Nobelcrest creates timeless real estate experiences through
            carefully curated properties, premium consultation, and
            exceptional investment opportunities tailored for modern living.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-10">

          <div className="border border-[#ddd] p-10 bg-white">
            <h3 className="text-5xl mb-4">15+</h3>
            <p className="text-[#666]">Years Experience</p>
          </div>

          <div className="border border-[#ddd] p-10 bg-white">
            <h3 className="text-5xl mb-4">250+</h3>
            <p className="text-[#666]">Properties Curated</p>
          </div>

          <div className="border border-[#ddd] p-10 bg-white">
            <h3 className="text-5xl mb-4">120+</h3>
            <p className="text-[#666]">Happy Clients</p>
          </div>

          <div className="border border-[#ddd] p-10 bg-white">
            <h3 className="text-5xl mb-4">10+</h3>
            <p className="text-[#666]">Luxury Cities</p>
          </div>

        </div>

      </div>
    </section>
  );
}