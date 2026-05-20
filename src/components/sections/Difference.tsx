export default function Difference() {
  return (
    <section className="bg-white py-32 px-10">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-[#b89b5e] text-sm mb-4">
          The Nobelcrest Difference
        </p>

        <h2 className="text-6xl mb-20">
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
              className="border border-[#ddd] p-10 min-h-[300px]"
            >
              <h3 className="text-3xl leading-tight">{item}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}