export default function Location() {
  return (
    <section id="location" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Find Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
              <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Address
              </h3>
              <p className="text-white font-medium">K &amp; S Motors</p>
              <p className="text-white/60 mt-1">Rear of, 120 Morden Rd</p>
              <p className="text-white/60">Mitcham CR4 4DB</p>
              <a
                href="https://maps.google.com/?q=Rear+of+120+Morden+Rd+Mitcham+CR4+4DB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-amber-400 text-sm font-medium hover:underline"
              >
                Get Directions →
              </a>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
              <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Contact
              </h3>
              <a
                href="tel:02086403550"
                className="text-white font-medium hover:text-amber-400 transition-colors"
              >
                020 8640 3550
              </a>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
              <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  ["Monday – Friday", "8:00am – 5:30pm"],
                  ["Saturday", "8:00am – 1:00pm"],
                  ["Sunday", "Closed"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-white/60">{day}</span>
                    <span className="text-white font-medium">{hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs mt-4">
                * Hours are indicative — call ahead to confirm.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/5 h-96 lg:h-full min-h-80">
            <iframe
              title="K & S Motors Location"
              src="https://maps.google.com/maps?q=Rear+of+120+Morden+Rd+Mitcham+CR4+4DB&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
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
