// components/sections/ClientExperience.tsx
export default function ClientExperience() {
  return (
    <section className="bg-[#0E1228] py-32 px-10">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#EBB337]/40 bg-[#0E1228] p-20 relative shadow-2xl">
          <span className="text-[120px] absolute top-0 left-10 text-[#EBB337]/30">
            “
          </span>
          <p className="uppercase tracking-[4px] text-[#F9CE6C] text-sm mb-6">
            Client Experience
          </p>
          <h2 className="text-6xl leading-tight mb-10 text-white">
            What Our Clients
            <br />
            Say About Us
          </h2>
          <p className="text-xl text-white/80 leading-10 max-w-4xl">
            Nobelcrest transformed our property journey into an effortless
            and luxurious experience. Their professionalism, transparency,
            and curated approach made all the difference.
          </p>
        </div>
      </div>
    </section>
  );
}