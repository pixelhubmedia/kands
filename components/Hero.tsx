function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 border border-rule bg-white px-4 py-2.5 rounded-full">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex items-center gap-1.5">
        <span className="flex">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </span>
        <span className="text-[12px] font-semibold text-ink">5.0</span>
        <span className="text-[11px] text-ink-muted">on Google</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-bone pt-16 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-end py-20 lg:py-28">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-6">
              Mitcham, South London &nbsp;·&nbsp; Est. 20+ Years
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-7"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The garage<br />
              Mitcham calls<br />
              first.
            </h1>
            <p className="text-[17px] text-ink-muted leading-relaxed max-w-md mb-8">
              Mechanical repairs and servicing for all makes and models.
              We give you a clear quote before we start, and we don&apos;t
              do unnecessary work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="tel:02086403550"
                className="bg-forest text-white font-semibold text-[15px] px-7 py-4 rounded hover:bg-forest-hover transition-colors text-center"
              >
                Call 020 8640 3550
              </a>
              <a
                href="#enquiry"
                className="border border-ink/20 text-ink font-semibold text-[15px] px-7 py-4 rounded hover:border-forest hover:text-forest transition-colors text-center"
              >
                Send an Enquiry
              </a>
            </div>
            <GoogleBadge />
          </div>

          {/* Right: address card */}
          <div className="lg:col-span-5 lg:pl-12">
            <div className="bg-forest text-white rounded-2xl p-8 lg:p-10 space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-1.5">Address</p>
                <p className="text-[16px] font-medium leading-snug">
                  Rear of, 120 Morden Rd<br />
                  Mitcham CR4 4DB
                </p>
              </div>
              <div className="border-t border-white/10" />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-1.5">Phone</p>
                <a
                  href="tel:02086403550"
                  className="text-[22px] font-semibold text-white hover:text-white/80 transition-colors"
                >
                  020 8640 3550
                </a>
              </div>
              <div className="border-t border-white/10" />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3">Hours</p>
                <div className="space-y-1.5 text-[14px]">
                  {[
                    ["Mon – Fri", "8:00am – 5:30pm"],
                    ["Saturday", "8:00am – 1:00pm"],
                    ["Sunday", "Closed"],
                  ].map(([d, h]) => (
                    <div key={d} className="flex justify-between">
                      <span className="text-white/60">{d}</span>
                      <span className="text-white font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10" />
              <a
                href="https://maps.google.com/?q=Rear+of+120+Morden+Rd+Mitcham+CR4+4DB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-rule" />
    </section>
  );
}
