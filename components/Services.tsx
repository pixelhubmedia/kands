const services = [
  {
    icon: "🔧",
    title: "Logbook Servicing",
    description:
      "Full manufacturer-schedule services that keep your warranty intact and your car running at its best.",
  },
  {
    icon: "🛞",
    title: "Brakes & Clutch",
    description:
      "Pad, disc, and clutch replacements using quality parts. We inspect and only replace what's needed.",
  },
  {
    icon: "⚙️",
    title: "Tyres & Wheel Alignment",
    description:
      "Supply and fit of all tyre brands, plus precision 4-wheel alignment to reduce wear and improve handling.",
  },
  {
    icon: "🔍",
    title: "Engine Diagnostics",
    description:
      "Latest diagnostic equipment to read fault codes, identify issues fast, and save you guesswork.",
  },
  {
    icon: "🚗",
    title: "Suspension & Steering",
    description:
      "Shocks, struts, bushings, and steering components inspected and replaced to restore ride quality.",
  },
  {
    icon: "❄️",
    title: "Air Conditioning",
    description:
      "AC regas, leak testing, and full system repair so you stay cool all summer.",
  },
  {
    icon: "📋",
    title: "MOT & Roadworthy",
    description:
      "Full pre-inspection check and repair service to make sure your vehicle passes first time.",
  },
  {
    icon: "💨",
    title: "Exhausts & Emissions",
    description:
      "Exhaust system repairs, replacements, and emissions testing for all petrol and diesel vehicles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Services
          </h2>
          <p className="text-white/50 mt-3 max-w-md mx-auto">
            Everything your vehicle needs, done right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-amber-400/30 transition-colors group"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-amber-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-10">
          Don&apos;t see your repair listed?{" "}
          <a href="#enquiry" className="text-amber-400 hover:underline">
            Send us an enquiry
          </a>{" "}
          — we work on all makes and models.
        </p>
      </div>
    </section>
  );
}
