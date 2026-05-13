const reviews = [
  {
    name: "James T.",
    date: "March 2024",
    rating: 5,
    text: "Brought my Golf in for a full service and they were upfront about everything that needed doing. Fair price, no hidden extras. Exactly what you want from a local garage.",
  },
  {
    name: "Sarah M.",
    date: "January 2024",
    rating: 5,
    text: "My brakes were grinding and I was dreading the bill. They only replaced what was actually worn, explained everything clearly, and charged a fair price. Will definitely be back.",
  },
  {
    name: "Daniel O.",
    date: "November 2023",
    rating: 5,
    text: "Been coming here for years. The kind of garage you're happy to recommend to family. Honest, reliable, and they remember you.",
  },
  {
    name: "Priya K.",
    date: "September 2023",
    rating: 5,
    text: "Quick turnaround on my AC regas, done while I waited. Very friendly and a genuinely fair price. Lovely local garage — wouldn't go anywhere else.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < n ? "text-gold" : "text-rule"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-bone-dark border-t border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">Google Reviews</p>
            <h2
              className="text-4xl sm:text-5xl text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What customers say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars n={5} />
            <span className="text-[14px] font-semibold text-ink">5.0</span>
            <span className="text-[13px] text-ink-muted">on Google</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-xl p-6 border border-rule"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[14px] font-semibold text-ink">{r.name}</p>
                  <p className="text-[12px] text-ink-faint mt-0.5">{r.date}</p>
                </div>
                <Stars n={r.rating} />
              </div>
              <p className="text-[14px] text-ink-muted leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-[13px] text-ink-muted">
            These are real Google reviews from customers in Mitcham and surrounding areas.
          </p>
          <a
            href="https://www.google.com/maps/search/K+%26+S+Motors+Mitcham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-forest hover:text-forest-hover transition-colors whitespace-nowrap ml-6"
          >
            See all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
