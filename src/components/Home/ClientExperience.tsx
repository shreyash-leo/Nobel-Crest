// components/sections/ClientExperience.tsx

export default function ClientExperience() {
  return (
    <section className="bg-[#F8F6F1] py-32 px-10">
      <div className="max-w-6xl mx-auto">

        <div
          className="
            border border-[#EBB337]/20
            bg-[#FFFCF6]
            p-20
            relative
            overflow-hidden
            shadow-[0_20px_80px_rgba(14,18,40,0.08)]
          "
        >
          {/* Large Quote */}
          <span
            className="
              text-[140px]
              absolute
              -top-6
              left-10
              text-[#A57C3E]/8
              font-bold
              leading-none
              select-none
            "
          >
            “
          </span>

          {/* Small Label */}
          <p
            className="
              uppercase
              tracking-[4px]
              text-[#A57C3E]
              text-sm
              mb-6
              font-bold
              relative
              z-10
            "
          >
            Client Experience
          </p>

          {/* Heading */}
          <h2
            className="
              text-6xl
              leading-tight
              mb-10
              text-[#0E1228]
              font-bold
              tracking-wide
              relative
              z-10
            "
          >
            What Our Clients
            <br />
            Say About Us
          </h2>

          {/* Testimonial */}
          <p
            className="
              text-xl
              text-[#0E1228]/70
              leading-10
              max-w-4xl
              font-medium
              relative
              z-10
            "
          >
            Nobelcrest transformed our property journey into an effortless
            and luxurious experience. Their professionalism, transparency,
            and curated approach made all the difference.
          </p>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-14 relative z-10">

            {/* Accent Line */}
            <div className="w-32 h-[2px] bg-[#EBB337]"></div>

            {/* Client Info */}
            <div className="text-right">
              <h4 className="text-[#0E1228] text-xl font-semibold">
                Aarav Mehta
              </h4>

              <p className="text-[#A57C3E] uppercase tracking-[2px] text-sm font-bold mt-1">
                Luxury Home Buyer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}