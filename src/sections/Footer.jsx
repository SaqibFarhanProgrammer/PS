// Footer.tsx
'use client';

import React from "react";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 xl:px-24 bg-[#1E2939] text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="font-[playfair-b] text-2xl">Saqib Farhan</span>
          <span className="font-[inter-r] text-sm opacity-60">© 2024</span>
        </div>
        
        <div className="flex gap-8 font-[inter-m] text-sm opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Home</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 font-[inter-m] text-sm hover:opacity-100 transition-opacity"
        >
          Back to Top
          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;