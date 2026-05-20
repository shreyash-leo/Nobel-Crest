import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10"
      style={{ backgroundColor: "#0E1228" }}
    >
      <div className="relative max-w-[1800px] mx-auto h-20 px-8 flex items-center">

        {/* Logo */}
        <a href="#" className="flex items-center z-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={80}
            priority
            className="object-contain w-auto h-14"
          />
        </a>

        {/* Center Nav */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-12 text-[13px] uppercase tracking-[2px] text-white">
          <a
            href="#"
            className="hover:text-[#EBB337] transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-[#EBB337] transition-colors duration-300"
          >
            About Us
          </a>

          <a
            href="#"
            className="hover:text-[#EBB337] transition-colors duration-300"
          >
            Our Services
          </a>

          <a
            href="#"
            className="hover:text-[#EBB337] transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#"
            className="hover:text-[#EBB337] transition-colors duration-300"
          >
            Contacts
          </a>
        </nav>

        {/* Right Side */}
        <div className="ml-auto flex items-center">
          <button className="flex items-center justify-center">
            <Menu
              size={26}
              strokeWidth={1.5}
              style={{ color: "#EBB337" }}
            />
          </button>
        </div>

      </div>
    </header>
  );
}