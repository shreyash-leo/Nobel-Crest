import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#0E1228" }}
    >
      <div className="relative max-w-[1800px] mx-auto px-10 h-16 flex items-center justify-center">

        {/* Center Nav Links */}
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

        {/* Right Menu Icon */}
        <div className="absolute right-10 flex items-center">
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