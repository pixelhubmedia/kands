const reviews = [
  {
    name: "James T.",
    rating: 5,
    date: "March 2024",
    text: "Absolutely brilliant service. Brought my Golf in for a full service and they were upfront about everything that needed doing. Fair price, no hidden extras. Will definitely be back.",
  },
  {
    name: "Sarah M.",
    rating: 5,
    date: "January 2024",
    text: "K & S Motors sorted my brakes out same day — I was really worried about getting ripped off but they only replaced what was actually needed and explained everything clearly. Highly recommend.",
  },
  {
    name: "Daniel O.",
    rating: 5,
    date: "November 2023",
    text: "Been coming here for years. Honest, reliable, and genuinely good mechanics. The kind of garage you're happy to recommend to family.",
  },
  {
    name: "Priya K.",
    rating: 5,
    date: "September 2023",
    text: "Quick turnaround on my AC regas, got it done while I waited. Very friendly staff and a fair price. Lovely local garage.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-white/20"}`}
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
    <section id="reviews" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Google Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-white/60 text-sm">5.0 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-white font-semibold">{r.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{r.date}</p>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/search/K+%26+S+Motors+Mitcham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:border-amber-400 hover:text-amber-400 transition-colors px-6 py-3 rounded-full text-sm font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            See all Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
