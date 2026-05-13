export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              K <span className="text-amber-400">&</span> S{" "}
              <span className="text-amber-400">Motors</span>
            </p>
            <p className="text-white/40 text-sm">Your local Mitcham mechanics.</p>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Address</p>
            <p className="text-white/70 text-sm">Rear of, 120 Morden Rd</p>
            <p className="text-white/70 text-sm">Mitcham CR4 4DB</p>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Contact</p>
            <a
              href="tel:02086403550"
              className="text-amber-400 text-sm font-medium hover:underline"
            >
              020 8640 3550
            </a>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/search/K+%26+S+Motors+Mitcham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-xs hover:text-amber-400 transition-colors"
              >
                Leave us a Google Review ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">
            &copy; {year} K &amp; S Motors. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Mitcham, South London</p>
        </div>
      </div>
    </footer>
  );
}
