export default function Hero() {
  return (
    <section className="pt-16 h-[100vh] bg-[#efe8df]">

      <div className="grid lg:grid-cols-2 h-full">

        {/* Left Side */}
        <div className="flex items-center px-16">

          <div>
            <h1 className="text-7xl leading-[0.95] font-medium uppercase max-w-[600px]">
              Two Milestones. One Dream Home.
            </h1>
          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white flex items-center justify-center">

          <div className="max-w-[500px] text-center">

            <p className="text-sm uppercase tracking-[2px] mb-8">
              Luxury Residences
            </p>

            <h2 className="text-6xl leading-tight font-medium">
              Pay 40% now &
              <br />
              60% on possession.
            </h2>

            <button className="mt-10 border border-[#b89b5e] px-10 py-4 uppercase tracking-[2px] text-[#b89b5e]">
              Book Your Home
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}