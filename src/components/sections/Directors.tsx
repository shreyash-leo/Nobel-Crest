export default function Directors() {
  return (
    <section className="bg-[#f5f3ef] py-32 px-10">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-[#b89b5e] text-sm mb-4">
          Leadership
        </p>

        <h2 className="text-6xl mb-20">
          Board Of
          <br />
          Directors
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-[#ddd] bg-white p-6">

              <div className="h-[450px] bg-[#ddd] mb-6"></div>

              <h3 className="text-3xl mb-3">
                Director Name
              </h3>

              <p className="text-[#666]">
                Managing Director
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}