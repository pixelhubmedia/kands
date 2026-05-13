const steps = [
  {
    n: "1",
    heading: "Get in touch",
    body:
      "Call us or send an enquiry with your vehicle registration and a description of the problem. If you&apos;re not sure what the issue is, that&apos;s fine — just describe what you&apos;re experiencing.",
  },
  {
    n: "2",
    heading: "Book it in",
    body:
      "We&apos;ll agree a time to bring the car in. We usually turn things around quickly, and we&apos;ll give you a realistic timescale upfront.",
  },
  {
    n: "3",
    heading: "We diagnose and quote",
    body:
      "We look over the vehicle properly and call you with a clear, itemised quote. No work starts until you&apos;ve agreed to it.",
  },
  {
    n: "4",
    heading: "Collect your car",
    body:
      "Pick up when it&apos;s ready and pay for exactly what was agreed. If anything unexpected comes up mid-job, we&apos;ll always call first.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-bone border-t border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">The process</p>
          <h2
            className="text-4xl sm:text-5xl text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(100%_-_12px)] w-full h-px bg-rule z-0" />
              )}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border-2 border-forest text-forest flex items-center justify-center text-[13px] font-bold mb-5">
                  {s.n}
                </div>
                <h3 className="text-[16px] font-semibold text-ink mb-2">{s.heading}</h3>
                <p
                  className="text-[13px] text-ink-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
