// Contact.jsx
'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(useGSAP);

function Contact() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

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
    <section ref={containerRef} className="w-full py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-[#E9E9E9]">
      <div ref={headerRef} className="mb-16 lg:mb-24">
        <span className="font-[inter-m] text-xs tracking-[0.3em] uppercase text-[#1E2939]/60 mb-4 block">
          Get in Touch
        </span>
        <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none text-[#1E2939]">
          Let's Work<br />
          <span className="font-[playfair-m] italic">Together</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <form ref={formRef} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry"
              className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/60">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-[#1E2939]/20 py-3 font-[inter-r] text-[#1E2939] placeholder:text-[#1E2939]/40 focus:border-[#1E2939] outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="group relative mt-8 px-8 py-4 bg-[#1E2939] text-white rounded-full font-[inter-m] text-sm tracking-wide overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Message
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </form>

        <div ref={infoRef} className="space-y-12 lg:pl-12">
          <div>
            <h3 className="font-[inter-b] text-lg uppercase tracking-wide text-[#1E2939] mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <a href="mailto:hello@saqibfarhan.com" className="flex items-center gap-4 text-[#1E2939]/70 hover:text-[#1E2939] transition-colors group">
                <div className="w-12 h-12 rounded-full border border-[#1E2939]/20 flex items-center justify-center group-hover:border-[#1E2939] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-[inter-r]">hello@saqibfarhan.com</span>
              </a>
              <a href="tel:+923001234567" className="flex items-center gap-4 text-[#1E2939]/70 hover:text-[#1E2939] transition-colors group">
                <div className="w-12 h-12 rounded-full border border-[#1E2939]/20 flex items-center justify-center group-hover:border-[#1E2939] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-[inter-r]">+92 300 123 4567</span>
              </a>
              <div className="flex items-center gap-4 text-[#1E2939]/70">
                <div className="w-12 h-12 rounded-full border border-[#1E2939]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-[inter-r]">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-[inter-b] text-lg uppercase tracking-wide text-[#1E2939] mb-6">
              Socials
            </h3>
            <div className="flex gap-4 flex-wrap wrap">
              {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-6 py-3 border border-[#1E2939]/20 rounded-full font-[inter-m] text-sm hover:bg-[#1E2939] hover:text-white hover:border-[#1E2939] transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
