"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            K <span className="text-amber-400">&</span> S{" "}
            <span className="text-amber-400">Motors</span>
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-amber-400 transition-colors">
            Services
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">
            Reviews
          </a>
          <a href="#location" className="hover:text-amber-400 transition-colors">
            Location
          </a>
          <a
            href="tel:02086403550"
            className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"
          >
            020 8640 3550
          </a>
          <a
            href="#enquiry"
            className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-full text-sm hover:bg-amber-300 transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-white/80 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#141414] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-amber-400">Services</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-amber-400">Reviews</a>
          <a href="#location" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-amber-400">Location</a>
          <a href="tel:02086403550" className="text-amber-400 font-semibold">020 8640 3550</a>
          <a
            href="#enquiry"
            onClick={() => setMenuOpen(false)}
            className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-full text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
