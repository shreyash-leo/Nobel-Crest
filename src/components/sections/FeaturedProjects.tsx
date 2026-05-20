export default function FeaturedProjects() {
  return (
    <section className="bg-white py-32 px-10">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-[#b89b5e] text-sm mb-4">
          Featured Projects
        </p>

        <h2 className="text-6xl mb-20">
          Premium Investment
          <br />
          Opportunities
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-[#ddd]">

              <div className="h-[300px] bg-[#ddd]"></div>

              <div className="p-8">
                <h3 className="text-3xl mb-4">
                  Nobelcrest Heights
                </h3>

                <p className="text-[#666] mb-6">
                  Bangalore, India
                </p>

                <button className="uppercase tracking-[2px] text-[#b89b5e]">
                  View Project
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}