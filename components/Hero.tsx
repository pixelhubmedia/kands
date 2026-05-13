export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f]" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4">
          Mitcham&apos;s Trusted Mechanics
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Your Car in Safe <br className="hidden sm:block" />
          <span className="text-amber-400">Hands.</span>
        </h1>
        <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-10">
          Quality repairs and servicing at honest prices. From routine services
          to complex diagnostics — we&apos;ve got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#enquiry"
            className="bg-amber-400 text-black font-bold px-8 py-4 rounded-full text-base hover:bg-amber-300 transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:02086403550"
            className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            Call 020 8640 3550
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-400">20+</p>
            <p className="text-white/50 text-sm mt-1">Years Experience</p>
          </div>
          <div className="hidden sm:block w-px bg-white/10" />
          <div>
            <p className="text-3xl font-bold text-amber-400">5★</p>
            <p className="text-white/50 text-sm mt-1">Google Rating</p>
          </div>
          <div className="hidden sm:block w-px bg-white/10" />
          <div>
            <p className="text-3xl font-bold text-amber-400">All</p>
            <p className="text-white/50 text-sm mt-1">Makes &amp; Models</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
