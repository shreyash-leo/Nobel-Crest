export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-24 px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16">

        <div>
          <h3 className="text-4xl mb-6">Nobelcrest</h3>

          <p className="text-[#999] leading-8">
            Curating premium real estate experiences with luxury,
            transparency, and trust.
          </p>
        </div>

        <div>
          <h4 className="text-xl mb-6">Quick Links</h4>

          <ul className="space-y-4 text-[#999]">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl mb-6">Contact</h4>

          <ul className="space-y-4 text-[#999]">
            <li>Mumbai, India</li>
            <li>+91 9876543210</li>
            <li>hello@nobelcrest.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl mb-6">Newsletter</h4>

          <input
            type="text"
            placeholder="Enter your email"
            className="w-full bg-transparent border border-[#444] px-4 py-4 outline-none"
          />
        </div>

      </div>
    </footer>
  );
}