// components/sections/FeaturedProjects.tsx
export default function FeaturedProjects() {
  return (
    <section className="bg-white py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4">
          Featured Projects
        </p>
        <h2 className="text-6xl mb-20 text-[#0E1228]">
          Premium Investment
          <br />
          Opportunities
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-[#EBB337]/30 bg-[#ffe9bd] hover:shadow-xl transition-all duration-300">
              <div className="h-[300px] bg-[#F9CE6C]"></div>
              <div className="p-8">
                <h3 className="text-3xl mb-4 text-[#0E1228]">
                  Nobelcrest Heights
                </h3>
                <p className="text-[#0E1228]/70 mb-6">
                  Bangalore, India
                </p>
                <button className="uppercase tracking-[2px] text-[#A57C3E] font-semibold hover:text-[#EBB337] transition-colors">
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