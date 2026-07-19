"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Large CTA Section */}
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            Let's create something <br />
            <span className="text-gradient-red">extraordinary</span> together.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-accent-primary hover:text-white transition-colors duration-300 magnetic"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      {/* Footer Content Grid */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="relative z-50 flex items-center gap-3 mb-6">
              <div className="flex flex-col">
                <div className="flex items-end leading-none -mb-1">
                  <span className="text-4xl font-black tracking-tighter text-white">M</span>
                  <span className="text-4xl font-black tracking-tighter text-accent-primary">S</span>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1">
                  morphed<span className="text-accent-primary">studio</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A creative agency based in Noida, specializing in brand strategy, broadcast design, and film production.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Sitemap</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-accent-primary transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-accent-primary transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-accent-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-accent-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-accent-primary transition-colors">Brand Identity</Link></li>
              <li><Link href="/services" className="hover:text-accent-primary transition-colors">Broadcast Design</Link></li>
              <li><Link href="/services" className="hover:text-accent-primary transition-colors">Film Production</Link></li>
              <li><Link href="/services" className="hover:text-accent-primary transition-colors">Motion Graphics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="mailto:themorphed@gmail.com" className="hover:text-accent-primary transition-colors">themorphed@gmail.com</a></li>
              <li className="pt-2">
                A-531, Lane No-20,<br />
                Sector-46, Noida,<br />
                UP 201303, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Morphed Studios Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href={company.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href={company.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={company.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="hover:text-accent-primary transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
