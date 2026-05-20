export default function Expertise() {
  return (
    <section className="bg-white py-32 px-10">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-[#b89b5e] text-sm mb-4">
          Our Expertise
        </p>

        <h2 className="text-6xl mb-20">
          Specialized Property
          <br />
          Segments
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}
          <div className="space-y-10">

            <div className="border-b pb-8">
              <h3 className="text-4xl mb-3">Luxury Residences</h3>
              <p className="text-[#666]">
                Premium apartments, villas and penthouses.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-4xl mb-3">Commercial Spaces</h3>
              <p className="text-[#666]">
                Modern office and investment properties.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-4xl mb-3">Investment Advisory</h3>
              <p className="text-[#666]">
                Strategic property investment consultation.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="h-[600px] bg-[#ece7df] rounded-sm"></div>

        </div>

      </div>
    </section>
  );
}