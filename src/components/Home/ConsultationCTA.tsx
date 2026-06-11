// components/sections/ConsultationCTA.tsx

export default function ConsultationCTA() {
  return (
    <section className="bg-[#F8F6F1] py-32 px-10">
      <div
        className="
          max-w-6xl
          mx-auto
          border
          border-[#EBB337]/20
          bg-[#FFFCF6]
          px-16
          py-24
          text-center
          shadow-[0_20px_80px_rgba(14,18,40,0.08)]
          relative
          overflow-hidden
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            top-0
            right-0
            w-[400px]
            h-[400px]
            bg-[#F9CE6C]/10
            rounded-full
            blur-3xl
          "
        ></div>

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
          Consultation
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
          Ready To Find Your
          <br />
          Dream Property?
        </h2>

        {/* Description */}
        <p
          className="
            text-lg
            text-[#0E1228]/70
            leading-9
            max-w-3xl
            mx-auto
            mb-14
            font-medium
            relative
            z-10
          "
        >
          Discover curated luxury residences, premium investment
          opportunities, and personalized consultation tailored for
          elevated modern living.
        </p>

        {/* Button */}
        <button
          className="
            bg-[#EBB337]
            px-10
            py-5
            uppercase
            tracking-[3px]
            text-[#0E1228]
            font-bold
            transition-all
            duration-500
            hover:bg-[#A57C3E]
            hover:text-white
            hover:shadow-[0_0_30px_rgba(235,179,55,0.25)]
            relative
            z-10
          "
        >
          Book Consultation
        </button>

        {/* Bottom Accent */}
        <div className="w-40 h-[2px] bg-[#EBB337] mx-auto mt-16 relative z-10"></div>
      </div>
    </section>
  );
}