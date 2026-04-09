// Contact.tsx
'use client';

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(useGSAP);

function Contact() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(
      headerRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        infoRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full min-h-screen py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-[#E9E9E9]">
      {/* Header */}
      <div ref={headerRef} className="mb-16 lg:mb-24">
        <span className="font-[inter-m] text-xs tracking-[0.4em] uppercase text-[#1E2939]/50 mb-4 block">
          / Contact
        </span>
        <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none text-[#1E2939]">
          Let's Talk<br />
          <span className="font-[playfair-m] italic">Business</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors"
              />
            </div>
            <div className="space-y-3">
              <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="What's this about?"
              className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors"
            />
          </div>

          <div className="space-y-3">
            <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
              Message
            </label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="group relative mt-4 px-10 py-5 bg-[#1E2939] text-white rounded-full font-[inter-m] text-sm tracking-wide overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              Send Message
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </form>

        {/* Info */}
        <div ref={infoRef} className="space-y-12 lg:pl-12">
          <div>
            <h3 className="font-[inter-b] text-sm uppercase tracking-wider text-[#1E2939]/60 mb-8">
              Contact Info
            </h3>
            <div className="space-y-6">
              <a href="mailto:hello@saqibfarhan.com" className="group flex items-center gap-4 text-[#1E2939] hover:opacity-60 transition-opacity">
                <div className="w-14 h-14 rounded-full border border-[#1E2939]/20 flex items-center justify-center group-hover:border-[#1E2939] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-[inter-m] text-xs text-[#1E2939]/50 mb-1">Email</p>
                  <p className="font-[inter-r]">hello@saqibfarhan.com</p>
                </div>
              </a>

              <a href="tel:+923001234567" className="group flex items-center gap-4 text-[#1E2939] hover:opacity-60 transition-opacity">
                <div className="w-14 h-14 rounded-full border border-[#1E2939]/20 flex items-center justify-center group-hover:border-[#1E2939] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-[inter-m] text-xs text-[#1E2939]/50 mb-1">Phone</p>
                  <p className="font-[inter-r]">+92 300 123 4567</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#1E2939]">
                <div className="w-14 h-14 rounded-full border border-[#1E2939]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-[inter-m] text-xs text-[#1E2939]/50 mb-1">Location</p>
                  <p className="font-[inter-r]">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-[inter-b] text-sm uppercase tracking-wider text-[#1E2939]/60 mb-8">
              Socials
            </h3>
            <div className="flex flex-wrap gap-4">
              {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-6 py-3 border border-[#1E2939]/20 rounded-full font-[inter-m] text-sm text-[#1E2939] hover:bg-[#1E2939] hover:text-white hover:border-[#1E2939] transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E2939]/10">
            <p className="font-[inter-r] text-sm text-[#1E2939]/60 leading-relaxed">
              Usually respond within 24 hours. For urgent inquiries, please call directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;