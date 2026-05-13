const statements = [
  {
    number: "01",
    headline: "You get a clear quote. No surprises.",
    body:
      "Before we touch anything, we tell you exactly what needs doing and what it'll cost. If we find something else while we're in there, we call you — nothing extra gets done without your say-so.",
  },
  {
    number: "02",
    headline: "We tell you what can wait.",
    body:
      "We're not trying to sell you work you don't need right now. If something isn't urgent, we'll say so. We'd rather you trust us and come back than feel pressured on the first visit.",
  },
  {
    number: "03",
    headline: "We've been here over 20 years for a reason.",
    body:
      "Most of our customers came through a neighbour or a friend. That's how we've always worked — on reputation, not advertising. We're still here because we do the job properly.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-forest">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-3">How we work</p>
          <h2
            className="text-4xl sm:text-5xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Straight talk.<br className="hidden sm:block" /> Fair prices.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {statements.map((s) => (
            <div key={s.number} className="bg-forest p-8 lg:p-10 space-y-4">
              <span className="text-[11px] tracking-[0.2em] text-white/30 font-medium">{s.number}</span>
              <h3
                className="text-[22px] text-white leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.headline}
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
