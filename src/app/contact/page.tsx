"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import { company } from "@/data/company";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <RevealOnScroll direction="up">
            <SectionLabel>Contact Us</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight max-w-4xl">
              Let's create something <span className="text-gradient-gold">extraordinary.</span>
            </h1>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-16">
            <RevealOnScroll direction="up" delay={0.2}>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-accent-primary" />
                  Email
                </h3>
                <a 
                  href={`mailto:${company.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  {company.email}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.3}>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-accent-primary" />
                  Phone & WhatsApp
                </h3>
                <div className="space-y-2">
                  <a 
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="block text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.4}>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-accent-primary" />
                  Studio
                </h3>
                <address className="text-gray-400 text-lg not-italic leading-relaxed">
                  {company.address.line1}<br />
                  {company.address.line2}<br />
                  {company.address.city}, {company.address.state}<br />
                  {company.address.zip}, {company.address.country}
                </address>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.5}>
              <div>
                <h3 className="text-xl font-bold mb-6">Socials</h3>
                <div className="flex flex-wrap gap-4">
                  <a href={company.socials.youtube} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/10 hover:border-accent-primary hover:text-accent-primary transition-all text-sm font-bold uppercase tracking-widest">
                    YouTube
                  </a>
                  <a href={company.socials.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/10 hover:border-accent-primary hover:text-accent-primary transition-all text-sm font-bold uppercase tracking-widest">
                    LinkedIn
                  </a>
                  <a href={company.socials.facebook} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-white/10 hover:border-accent-primary hover:text-accent-primary transition-all text-sm font-bold uppercase tracking-widest">
                    Facebook
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delay={0.4} className="bg-surface border border-white/5 p-8 md:p-12 rounded-3xl">
              <h3 className="text-3xl font-display font-bold mb-8">Send us a message</h3>
              
              {formStatus === "success" ? (
                <div className="h-96 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-accent-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-accent-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        autoComplete="name"
                        required
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-primary focus-visible:ring-2 focus-visible:ring-accent-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-primary focus-visible:ring-2 focus-visible:ring-accent-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Project Type</label>
                    <select 
                      id="project" 
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-primary transition-colors appearance-none"
                    >
                      <option value="" disabled defaultValue="">Select a project type...</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Film Production">Film Production</option>
                      <option value="Broadcast Design">Broadcast Design</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`w-full flex items-center justify-center space-x-2 bg-white text-black font-medium py-5 rounded-xl hover:bg-accent-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary transition-colors duration-300 ${formStatus === "submitting" ? "opacity-70 cursor-wait" : ""}`}
                  >
                    <span>{formStatus === "submitting" ? "Sending..." : "Send Message"}</span>
                    {formStatus === "idle" && <Send size={18} />}
                  </button>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
