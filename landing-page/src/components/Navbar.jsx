"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">JG Uni</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300 text-sm font-medium">
          {/* Navbar Links */}
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#programs" className="hover:text-white">
            Programs
          </Link>
          <Link href="#testimonials" className="hover:text-white">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Desktop Apply Button */}
        <button className="hidden md:block bg-cyan-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer hover:scale-105 transition">
          Apply Now
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-4 space-y-3 text-center text-gray-300 font-medium">
          {/* Navbar Links */}
          <Link
            href="#about"
            className="block hover:text-white"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#programs"
            className="block hover:text-white"
            onClick={() => setOpen(false)}
          >
            Programs
          </Link>
          <Link
            href="#testimonials"
            className="block hover:text-white"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="block hover:text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Apply Button */}
          <button className="w-full mt-3 bg-cyan-500 text-black py-2 rounded-lg hover:cursor-pointer hover:scale-105 transition">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
