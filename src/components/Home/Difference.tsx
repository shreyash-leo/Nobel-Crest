// components/sections/Difference.tsx
import Image from "next/image";

export default function Difference() {
  return (
    <section className="bg-[#0E1228] py-32 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <p className="uppercase tracking-[4px] text-[#F9CE6C] text-sm mb-4 font-bold">
          The Nobelcrest Difference
        </p>

        <h2 className="text-6xl mb-20 text-white font-bold tracking-wide">
          Why Clients
          <br />
          Choose Us
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 gap-8">
          {[
            "Verified Properties",
            "Luxury Consultation",
            "Transparent Deals",
            "Investment Expertise",
          ].map((item, index) => (
            <div
              key={item}
              className="
                relative
                overflow-hidden
                min-h-[500px]
                group
                cursor-pointer
              "
            >
              {/* Background Image */}
              <Image
  src={`/images/difference${index + 1}.jpg`}
  alt={item}
  fill
  loading="lazy"
  sizes="(max-width: 1024px) 100vw, 25vw"
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

              {/* Dark Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#0E1228]/60
                  transition-all
                  duration-500
                  group-hover:bg-[#0E1228]/50
                "
              ></div>

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0E1228] to-transparent"></div>

              {/* Border */}
              <div
                className="
                  absolute
                  inset-0
                  border
                  border-[#EBB337]/40
                  transition-all
                  duration-300
                  group-hover:border-[#A57C3E]
                "
              ></div>

              {/* Content */}
              <div className="absolute bottom-10 left-10 right-10 z-10">

                {/* Accent Line */}
                <div
                  className="
                    w-12
                    h-[2px]
                    bg-[#EBB337]
                    mb-6
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                ></div>

                {/* Title */}
                <h3
                  className="
                    text-3xl
                    leading-tight
                    text-white
                    font-bold
                    tracking-wide
                  "
                >
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}