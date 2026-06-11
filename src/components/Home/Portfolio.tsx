// components/sections/Portfolio.tsx
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="bg-[#F8F6F1] py-32 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-4 font-bold">
          Curated Portfolio
        </p>

        <h2 className="text-6xl mb-20 text-[#0E1228] font-bold tracking-wide leading-tight">
          Featured Luxury
          <br />
          Properties
        </h2>

        {/* Main Card */}
        <div
          className="
            grid lg:grid-cols-2
            border border-[#EBB337]/20
            bg-[#FFFCF6]
            shadow-[0_20px_80px_rgba(14,18,40,0.08)]
            overflow-hidden
          "
        >
          {/* Left Image */}
          <div className="relative h-[700px] overflow-hidden group">

            <Image
  src="/images/portfolio.jpg"
  alt="Luxury Property"
  fill
  loading="lazy"
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="
    object-cover
    transform-gpu
    will-change-transform
    transition-transform
    duration-500
    ease-out
    group-hover:scale-[1.03]
  "
/>

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-[#0E1228]/15"></div>

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#0E1228]/90 to-transparent"></div>

            {/* Floating Info */}
            <div className="absolute bottom-10 left-10 z-10">

              <p className="uppercase tracking-[3px] text-[#F9CE6C] text-sm mb-3 font-bold">
                Signature Property
              </p>

              <h3 className="text-white text-4xl leading-tight font-light">
                Elevated Urban
                <br />
                Living Experience
              </h3>
            </div>
          </div>

          {/* Right Content */}
          <div className="p-16 flex flex-col justify-center relative">

            {/* Accent Line */}
            <div className="w-20 h-[2px] bg-[#EBB337] mb-10"></div>

            {/* Small Label */}
            <p className="uppercase tracking-[3px] text-sm text-[#A57C3E] mb-5 font-bold">
              Featured Property
            </p>

            {/* Heading */}
            <h3 className="text-5xl leading-tight mb-8 text-[#0E1228] font-bold tracking-wide">
              The Nobelcrest
              <br />
              Skyline Residences
            </h3>

            {/* Description */}
            <p className="text-lg text-[#0E1228]/70 leading-9 mb-12 font-medium max-w-xl">
              Experience unmatched elegance with panoramic city views,
              premium amenities, and sophisticated architecture crafted
              for elevated modern living.
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-10 mb-14">

              <div>
                <p className="text-sm uppercase mb-3 text-[#A57C3E] font-bold tracking-wide">
                  Location
                </p>

                <h4 className="text-3xl text-[#0E1228] font-semibold">
                  Mumbai
                </h4>
              </div>

              <div>
                <p className="text-sm uppercase mb-3 text-[#A57C3E] font-bold tracking-wide">
                  Starting Price
                </p>

                <h4 className="text-3xl text-[#0E1228] font-semibold">
                  ₹2.4 Cr
                </h4>
              </div>
            </div>

            {/* Button */}
            <button
              className="
                bg-[#EBB337]
                text-[#0E1228]
                px-10
                py-5
                uppercase
                tracking-[2px]
                w-fit
                font-bold
                transition-all
                duration-500
                hover:bg-[#A57C3E]
                hover:text-white
                hover:shadow-[0_0_30px_rgba(235,179,55,0.25)]
              "
            >
              Explore Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}