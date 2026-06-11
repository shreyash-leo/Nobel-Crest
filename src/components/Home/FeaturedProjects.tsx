// components/sections/FeaturedProjects.tsx
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <section className="bg-[#0E1228] py-32 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <p className="uppercase tracking-[4px] text-[#F9CE6C] text-sm mb-4 font-bold">
          Featured Projects
        </p>

        <h2 className="text-6xl mb-20 text-white font-bold tracking-wide">
          Premium Investment
          <br />
          Opportunities
        </h2>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
                border
                border-[#EBB337]/30
                bg-[#0E1228]
                overflow-hidden
                transition-all
                duration-300
                group
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[300px]">

                <Image
  src={`/images/project${item}.jpg`}
  alt="Project"
  fill
  loading="lazy"
  sizes="(max-width: 1024px) 100vw, 33vw"
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

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#0E1228]/30
                    transition-all
                    duration-500
                    group-hover:bg-[#0E1228]/20
                  "
                ></div>
              </div>

              {/* Content */}
              <div className="p-8">

                <h3
                  className="
                    text-3xl
                    mb-4
                    text-white
                    font-bold
                    tracking-wide
                    transition-colors
                    duration-300
                    group-hover:text-[#EBB337]
                  "
                >
                  Nobelcrest Heights
                </h3>

                <p className="text-white/70 mb-6 font-medium">
                  Bangalore, India
                </p>

                <button
                  className="
                    uppercase
                    tracking-[2px]
                    text-[#EBB337]
                    font-bold
                    transition-colors
                    duration-300
                    hover:text-[#F9CE6C]
                  "
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}