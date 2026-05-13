export default function Location() {
  return (
    <section id="location" className="bg-bone-dark border-t border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">Find us</p>
          <h2
            className="text-4xl sm:text-5xl text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-2">Address</p>
              <p className="text-[16px] text-ink font-medium leading-snug">
                K &amp; S Motors<br />
                Rear of, 120 Morden Rd<br />
                Mitcham CR4 4DB
              </p>
              <p className="text-[13px] text-ink-muted mt-3 leading-relaxed">
                We&apos;re tucked away at the rear of the building — come through the side
                entrance off Morden Road.
              </p>
              <a
                href="https://maps.google.com/?q=Rear+of+120+Morden+Rd+Mitcham+CR4+4DB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[13px] font-semibold text-forest hover:text-forest-hover"
              >
                Get directions →
              </a>
            </div>

            <div className="border-t border-rule pt-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-2">Phone</p>
              <a
                href="tel:02086403550"
                className="text-[20px] font-semibold text-ink hover:text-forest transition-colors"
              >
                020 8640 3550
              </a>
            </div>

            <div className="border-t border-rule pt-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-3">Opening hours</p>
              <div className="space-y-2">
                {[
                  ["Monday – Friday", "8:00am – 5:30pm"],
                  ["Saturday", "8:00am – 1:00pm"],
                  ["Sunday", "Closed"],
                ].map(([day, hrs]) => (
                  <div key={day} className="flex justify-between text-[14px]">
                    <span className="text-ink-muted">{day}</span>
                    <span className="text-ink font-medium">{hrs}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-ink-faint mt-4">
                * Call ahead to confirm — hours may vary on bank holidays.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-8 rounded-xl overflow-hidden border border-rule" style={{ height: 420 }}>
            <iframe
              title="K & S Motors location"
              src="https://maps.google.com/maps?q=120+Morden+Rd+Mitcham+CR4+4DB&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
