// components/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#0E1228] text-white py-24 px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16">
        <div>
          <h3 className="text-4xl mb-6 text-[#EBB337]">Nobelcrest</h3>
          <p className="text-white/60 leading-8">
            Curating premium real estate experiences with luxury,
            transparency, and trust.
          </p>
        </div>
        <div>
          <h4 className="text-xl mb-6 text-[#F9CE6C]">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li className="hover:text-[#EBB337] cursor-pointer transition">Home</li>
            <li className="hover:text-[#EBB337] cursor-pointer transition">About</li>
            <li className="hover:text-[#EBB337] cursor-pointer transition">Projects</li>
            <li className="hover:text-[#EBB337] cursor-pointer transition">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-6 text-[#F9CE6C]">Contact</h4>
          <ul className="space-y-4 text-white/60">
            <li>Mumbai, India</li>
            <li>+91 9876543210</li>
            <li>hello@nobelcrest.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-6 text-[#F9CE6C]">Newsletter</h4>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full bg-transparent border border-[#EBB337]/40 px-4 py-4 outline-none focus:border-[#A57C3E] transition-colors text-white placeholder:text-white/40"
          />
        </div>
      </div>
    </footer>
  );
}