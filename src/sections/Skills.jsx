'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux.js", "Shadcn/ui"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    category: "Design",
    items: ["Figma"],
  },
  {
    category: "Tools",
    items: ["Git", "Postman API", "Jira" , "Vercel", ],
  },
];

function Skills() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const skillRefs = useRef([]);

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
      skillRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-[#E9E9E9]">
      {/* Header */}
      <div ref={headerRef} className="mb-16 lg:mb-24">
        <span className="font-[inter-m] text-xs tracking-[0.3em] uppercase text-[#1E2939]/60 mb-4 block">
          Expertise
        </span>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none text-[#1E2939]">
            Skills
          </h2>
          <p className="font-[inter-r] text-sm lg:text-base max-w-md text-[#1E2939]/70 leading-relaxed lg:text-right">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2939]/20">
        {skills.map((skillGroup, index) => (
          <div
            key={skillGroup.category}
            ref={(el) => (skillRefs.current[index] = el)}
            className="bg-[#E9E9E9] p-8 lg:p-12 group hover:bg-white transition-colors duration-500"
          >
            <div className="flex justify-between items-start mb-8">
              <h3 className="font-[inter-b] text-lg lg:text-xl uppercase tracking-wide text-[#1E2939]">
                {skillGroup.category}
              </h3>
              <span className="font-[inter-m] text-xs text-[#1E2939]/40">
                0{index + 1}
              </span>
            </div>
            
            <ul className="space-y-3">
              {skillGroup.items.map((item, i) => (
                <li
                  key={item}
                  className="font-[inter-r] text-sm lg:text-base text-[#1E2939]/80 flex items-center gap-3 group-hover:text-[#1E2939] transition-colors duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E2939]/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;