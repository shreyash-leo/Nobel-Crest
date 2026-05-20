export default function Portfolio() {
  return (
    <section className="bg-[#f5f3ef] py-32 px-10">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-[#b89b5e] text-sm mb-4">
          Curated Portfolio
        </p>

        <h2 className="text-6xl mb-20">
          Featured Luxury
          <br />
          Properties
        </h2>

        <div className="grid lg:grid-cols-2 border border-[#ddd] bg-white">

          {/* Image */}
          <div className="h-[600px] bg-[#ddd]"></div>

          {/* Content */}
          <div className="p-14 flex flex-col justify-center">

            <p className="uppercase tracking-[3px] text-sm text-[#b89b5e] mb-4">
              Featured Property
            </p>

            <h3 className="text-5xl leading-tight mb-6">
              The Nobelcrest
              <br />
              Skyline Residences
            </h3>

            <p className="text-lg text-[#666] leading-8 mb-10">
              Experience unmatched elegance with panoramic city views,
              premium amenities, and sophisticated architecture.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">

              <div>
                <p className="text-sm uppercase mb-2 text-[#999]">
                  Location
                </p>
                <h4 className="text-2xl">Mumbai</h4>
              </div>

              <div>
                <p className="text-sm uppercase mb-2 text-[#999]">
                  Starting Price
                </p>
                <h4 className="text-2xl">₹2.4 Cr</h4>
              </div>

            </div>

            <button className="bg-[#b89b5e] text-white px-10 py-4 uppercase tracking-[2px] w-fit">
              Explore Property
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}