const categories = [
  {
    name: "Servicing",
    services: [
      { name: "Full service", desc: "Oil, all filters, fluids, belts, full safety check" },
      { name: "Interim service", desc: "Oil and filter change, top-up fluids, brake inspection" },
      { name: "Pre-sale inspection", desc: "Thorough check before you buy or sell a vehicle" },
    ],
  },
  {
    name: "Brakes",
    services: [
      { name: "Brake pads & discs", desc: "Supply and fit, all makes. We only replace what's needed." },
      { name: "Brake fluid change", desc: "Recommended every two years to maintain stopping performance" },
      { name: "Handbrake adjustment", desc: "Adjustment and cable replacement if required" },
    ],
  },
  {
    name: "Engine & Electrics",
    services: [
      { name: "Engine diagnostics", desc: "Full fault code read on all systems — petrol and diesel" },
      { name: "Engine repairs", desc: "Head gaskets, timing belts, mounts and general engine work" },
      { name: "Battery & electrics", desc: "Battery testing and replacement, starter motors, alternators" },
    ],
  },
  {
    name: "Tyres & Wheels",
    services: [
      { name: "Supply and fit", desc: "Budget, mid-range and premium brands. All sizes." },
      { name: "4-wheel alignment", desc: "Laser alignment to reduce tyre wear and improve handling" },
      { name: "Tyre pressure sensors", desc: "TPMS sensor replacement and recalibration" },
    ],
  },
  {
    name: "Suspension & Steering",
    services: [
      { name: "Shock absorbers & struts", desc: "Replacement for improved ride comfort and handling" },
      { name: "Bushings & bearings", desc: "Wheel bearings, track rod ends, ball joints" },
      { name: "Power steering", desc: "Fluid flush, rack and pinion repairs" },
    ],
  },
  {
    name: "Other",
    services: [
      { name: "Air conditioning", desc: "Regas, leak testing and full AC system repairs" },
      { name: "MOT preparation", desc: "Pre-MOT check and repairs so you pass first time" },
      { name: "Exhausts & emissions", desc: "Exhaust repairs and replacement, catalytic converters" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-bone">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">What we fix</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our services
            </h2>
            <p className="text-[14px] text-ink-muted max-w-xs sm:text-right">
              We work on all makes and models — petrol, diesel and hybrid. Call
              us if your repair isn&apos;t listed.
            </p>
          </div>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {categories.map((cat) => (
            <div key={cat.name}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-forest font-semibold mb-4">
                {cat.name}
              </p>
              <ul className="space-y-4">
                {cat.services.map((s) => (
                  <li key={s.name} className="border-t border-rule pt-4">
                    <p className="text-[14px] font-semibold text-ink mb-0.5">{s.name}</p>
                    <p className="text-[13px] text-ink-muted leading-snug">{s.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-10 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[14px] text-ink-muted">
            Not sure if we can help? Give us a call and we&apos;ll tell you straight.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:02086403550"
              className="text-[14px] font-semibold text-forest hover:text-forest-hover transition-colors"
            >
              020 8640 3550
            </a>
            <a
              href="#enquiry"
              className="bg-forest text-white text-[13px] font-semibold px-5 py-2.5 rounded hover:bg-forest-hover transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
