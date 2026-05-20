import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#0E1228" }}
    >
      <div className="max-w-[1800px] mx-auto px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Nobelcrest Logo"
            width={160}
            height={50}
            priority
            className="object-contain"
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 text-[13px] uppercase tracking-[2px] text-white">
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
        <div className="flex items-center gap-6">
          <Menu
            size={24}
            strokeWidth={1.5}
            style={{ color: "#EBB337" }}
          />
        </div>

      </div>
    </header>
  );
}