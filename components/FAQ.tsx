"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you work on all makes and models?",
    a: "Yes — we work on all petrol, diesel and hybrid cars. Whether it's a Vauxhall Corsa or a BMW 5 Series, we've got the diagnostic equipment and parts knowledge to handle it.",
  },
  {
    q: "Will you call me before doing any extra work?",
    a: "Always. We'll never start additional work without agreeing a price with you first. If we find something unexpected while we're in there, you'll get a call with a clear explanation and quote before we proceed.",
  },
  {
    q: "How long will my car be with you?",
    a: "It depends on the job. A service is usually done same day. Bigger repairs may take a day or two. We'll give you a realistic timescale when you book in, and we'll keep you updated if anything changes.",
  },
  {
    q: "Do you carry out MOTs?",
    a: "We carry out MOT preparation checks and repairs so your car passes first time. We'll inspect the vehicle beforehand and fix anything that might fail, so you're not wasting money on a failed test.",
  },
  {
    q: "Can I get a courtesy car while mine is being repaired?",
    a: "We don't have a courtesy car on site, but for longer jobs we can let you know in advance so you can arrange alternative transport. Give us a call to discuss.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Mitcham CR4 and most of our customers come from Mitcham, Morden, Wimbledon, Tooting, Streatham and Croydon. If you're able to get the car to us, we can help.",
  },
  {
    q: "Can I bring my car in without an appointment?",
    a: "You can, but we'd recommend calling ahead. We can usually fit you in quickly, and booking a time means you won't have to wait unnecessarily.",
  },
];

function Item({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-rule">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-semibold text-ink group-hover:text-forest transition-colors pr-4">
          {faq.q}
        </span>
        <span className="text-ink-muted flex-shrink-0">
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-[14px] text-ink-muted leading-relaxed pb-5">{faq.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-bone border-t border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left label */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">Common questions</p>
            <h2
              className="text-4xl sm:text-5xl text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Got a<br />question?
            </h2>
            <p className="text-[14px] text-ink-muted mt-5 leading-relaxed">
              If you can&apos;t find the answer below, just give us a call —
              we&apos;ll tell you straight.
            </p>
            <a
              href="tel:02086403550"
              className="inline-block mt-5 text-[14px] font-semibold text-forest hover:text-forest-hover transition-colors"
            >
              020 8640 3550 →
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8 border-t border-rule">
            {faqs.map((faq) => (
              <Item key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
