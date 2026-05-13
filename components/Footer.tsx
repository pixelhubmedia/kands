export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12">
          <div>
            <p
              className="text-[20px] text-white mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              K&amp;S Motors
            </p>
            <p className="text-[12px] tracking-widest uppercase text-white/40 mb-5">
              Mitcham, South London
            </p>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Honest mechanical repairs and servicing for all makes and models.
              Free quotes, clear pricing, no surprises.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">Services</p>
            <ul className="space-y-2 text-[13px] text-white/50">
              {[
                "Logbook Servicing",
                "Brakes & Clutch",
                "Engine Diagnostics",
                "Tyres & Alignment",
                "Suspension & Steering",
                "Air Conditioning",
                "MOT Preparation",
                "Exhausts & Emissions",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white/80 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Address</p>
              <p className="text-[13px] text-white/60 leading-relaxed">
                Rear of, 120 Morden Rd<br />
                Mitcham CR4 4DB
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Phone</p>
              <a
                href="tel:02086403550"
                className="text-[16px] font-semibold text-white hover:text-white/80 transition-colors"
              >
                020 8640 3550
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Hours</p>
              <p className="text-[13px] text-white/60">Mon–Fri: 8am – 5:30pm</p>
              <p className="text-[13px] text-white/60">Saturday: 8am – 1pm</p>
              <p className="text-[13px] text-white/40">Sunday: Closed</p>
            </div>
            <a
              href="https://www.google.com/maps/search/K+%26+S+Motors+Mitcham"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[12px] text-white/30 hover:text-white/60 transition-colors"
            >
              Leave a Google review ↗
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-white/25">
            &copy; {year} K &amp; S Motors. All rights reserved.
          </p>
          <p className="text-[12px] text-white/20">Mitcham &middot; Morden &middot; Wimbledon &middot; Tooting &middot; Streatham</p>
        </div>
      </div>
    </footer>
  );
}
