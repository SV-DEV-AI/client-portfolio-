"use client";

import { company } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black pt-24 pb-8 border-t border-white/10 relative overflow-hidden text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-4">
              {company.name}
            </h2>
            <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest leading-relaxed">
              {company.tagline}
            </p>
          </div>
          
          <div className="text-left md:text-right">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Contact</h4>
            <a href="mailto:themorphed@gmail.com" className="text-xl md:text-2xl font-bold hover:text-gray-300 transition-colors uppercase tracking-tight">
              themorphed@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href={company.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
            <a href={company.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
