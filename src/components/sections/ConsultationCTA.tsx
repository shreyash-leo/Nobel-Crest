// components/sections/ConsultationCTA.tsx
export default function ConsultationCTA() {
  return (
    <section className="bg-[#ffe9bd] text-[#0E1228] py-32 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[4px] text-[#A57C3E] text-sm mb-6">
          Consultation
        </p>
        <h2 className="text-6xl leading-tight mb-10">
          Ready To Find Your
          <br />
          Dream Property?
        </h2>
        <button className="bg-[#EBB337] px-10 py-5 uppercase tracking-[3px] text-[#0E1228] font-semibold hover:bg-[#A57C3E] hover:text-white transition-all duration-300">
          Book Consultation
        </button>
      </div>
    </section>
  );
}