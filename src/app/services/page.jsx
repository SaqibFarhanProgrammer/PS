// Services.tsx
'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Code2, Layers, Bot, Palette } from "lucide-react";

gsap.registerPlugin(useGSAP);

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building responsive, performant web applications with React, Next.js, and TypeScript. Clean code, smooth animations, and exceptional user experiences.",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "GSAP"],
  },
  {
    id: "02",
    title: "Full Stack Development",
    description: "End-to-end web solutions with Node.js, Express, and MongoDB. From database design to deployment, scalable architectures that grow with your business.",
    icon: Layers,
    tags: ["Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL"],
  },
  {
    id: "03",
    title: "AI Chatbot Development",
    description: "Intelligent conversational interfaces powered by modern AI. Custom chatbots that understand context, automate tasks, and enhance customer engagement.",
    icon: Bot,
    tags: ["OpenAI", "LangChain", "RAG", "NLP", "Automation"],
  },
  {
    id: "04",
    title: "UI/UX Designing",
    description: "Crafting intuitive interfaces and delightful user experiences. From wireframes to high-fidelity prototypes, design systems that scale.",
    icon: Palette,
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
];

function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);

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
    ).fromTo(
      serviceRefs.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-[#E9E9E9]">
      {/* Header */}
      <div ref={headerRef} className="mb-16 lg:mb-24">
        <span className="font-[inter-m] text-xs tracking-[0.4em] uppercase text-[#1E2939]/50 mb-4 block">
          / Services
        </span>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none text-[#1E2939]">
            What I<br />
            <span className="font-[playfair-m] italic">Offer</span>
          </h2>
          <p className="font-[inter-r] text-sm lg:text-base max-w-md text-[#1E2939]/70 leading-relaxed lg:text-right">
            Specialized services tailored to transform your digital presence and drive meaningful results.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-0">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="group border-t border-[#1E2939]/20 py-8 lg:py-12 cursor-pointer hover:bg-white/50 transition-colors duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Number & Icon */}
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="font-[inter-m] text-sm text-[#1E2939]/30">
                    {service.id}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-[#1E2939]/20 flex items-center justify-center group-hover:bg-[#1E2939] group-hover:border-[#1E2939] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#1E2939] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-[inter-b] text-2xl lg:text-3xl text-[#1E2939] group-hover:translate-x-4 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="font-[inter-r] text-sm lg:text-base text-[#1E2939]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags & Arrow */}
                <div className="lg:col-span-2 flex flex-col items-start lg:items-end gap-4">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-[#1E2939]/10 rounded-full font-[inter-m] text-xs text-[#1E2939]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-[#1E2939]/30 group-hover:text-[#1E2939] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          );
        })}
        {/* Bottom Border */}
        <div className="border-t border-[#1E2939]/20" />
      </div>

      {/* CTA */}
      <div className="mt-16 lg:mt-24 flex justify-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 font-[inter-m] text-sm tracking-wide text-[#1E2939] hover:opacity-60 transition-opacity"
        >
          <span className="w-12 h-[1px] bg-[#1E2939] group-hover:w-20 transition-all duration-300" />
          Start a Project
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

export default Services;