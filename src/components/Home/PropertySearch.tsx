// components/sections/PropertySearch.tsx

import {
  Building2,
  MapPin,
  BedDouble,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function PropertySearch() {
  return (
    <section className="bg-[#F8F6F1] py-32 px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[60px] leading-[1.15] text-[#0E1228] font-light">
            Find the most
            <br />
            <span className="text-[#A57C3E]">
              reliable & appreciating
            </span>
            <br />
            Real Estate Properties
          </h2>
        </div>

        {/* Right Content */}
        <div>

          {/* Tabs */}
          <div className="flex items-center gap-10 mb-16">
            {["BUY", "RENT", "COMMERCIAL"].map((tab, index) => (
              <button
                key={tab}
                className={`text-lg tracking-wide pb-2 transition-all duration-300 ${
                  index === 0
                    ? "text-[#0E1228] border-b-2 border-[#A57C3E]"
                    : "text-[#0E1228]/70 hover:text-[#A57C3E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-14">

            {/* Project Type */}
            <div className="border-b border-[#0E1228]/30 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Building2
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#0E1228]/70"
                />

                <span className="text-[#0E1228]/80 text-2xl font-light">
                  Project Type
                </span>
              </div>

              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className="text-[#0E1228]/60"
              />
            </div>

            {/* Location */}
            <div className="border-b border-[#0E1228]/30 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <MapPin
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#0E1228]/70"
                />

                <span className="text-[#0E1228]/80 text-2xl font-light">
                  Location
                </span>
              </div>

              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className="text-[#0E1228]/60"
              />
            </div>

            {/* Bedrooms */}
            <div className="border-b border-[#0E1228]/30 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BedDouble
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#0E1228]/70"
                />

                <span className="text-[#0E1228]/80 text-2xl font-light">
                  Bedrooms
                </span>
              </div>

              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className="text-[#0E1228]/60"
              />
            </div>

            {/* Construction */}
            <div className="border-b border-[#0E1228]/30 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Building2
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#0E1228]/70"
                />

                <span className="text-[#0E1228]/80 text-2xl font-light">
                  Construction Status
                </span>
              </div>

              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className="text-[#0E1228]/60"
              />
            </div>

            {/* Price Range */}
            <div className="col-span-2 pt-4">
              <div className="flex items-center justify-center gap-6 mb-6 text-[#0E1228]/80 text-1xl font-light">
                <span>0</span>
                <span>—</span>
                <span>100 Cr</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                className="
                  w-full
                  accent-[#A57C3E]
                  cursor-pointer
                "
              />
            </div>

            {/* Button */}
            <div className="col-span-2 flex justify-end pt-4">
              <button
                className="
                  border
                  border-[#0E1228]
                  px-12
                  py-5
                  rounded-1xl
                  flex
                  items-center
                  gap-6
                  text-[#0E1228]
                  text-lg
                  font-semibold
                  tracking-wide
                  hover:bg-[#0E1228]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                0 PROJECTS FOUND

                <ArrowRight size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}