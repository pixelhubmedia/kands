"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Find Us", href: "#location" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-forest text-white/80 text-[11px] tracking-wider text-center py-2 px-4 font-sans">
        Free diagnostics quote &nbsp;·&nbsp; No work starts without your approval &nbsp;·&nbsp; Mitcham CR4 4DB
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 bg-bone/96 backdrop-blur-sm transition-shadow ${
          scrolled ? "shadow-sm" : ""
        } border-b border-rule`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group">
            <span
              className="text-[22px] text-ink leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              K&amp;S Motors
            </span>
            <span className="block text-[9px] tracking-[0.2em] uppercase text-ink-muted mt-0.5">
              Mitcham, South London
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-ink-muted">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-ink transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:02086403550"
              className="text-[13px] font-semibold text-ink hover:text-forest transition-colors"
            >
              020 8640 3550
            </a>
            <a
              href="#enquiry"
              className="bg-forest text-white text-[13px] font-semibold px-4 py-2 rounded hover:bg-forest-hover transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink p-1.5"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-bone border-t border-rule px-5 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[14px] text-ink-muted border-b border-rule/60 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:02086403550"
                className="text-center bg-forest text-white text-sm font-semibold py-3 rounded"
              >
                Call 020 8640 3550
              </a>
              <a
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="text-center border border-rule text-ink text-sm py-3 rounded"
              >
                Send an Enquiry
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
