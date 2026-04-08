// About.tsx
'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import saqib from "../../assets/saqib-desktop.jpg"
import Image from "next/image";

gsap.registerPlugin(useGSAP);

function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      imageRef.current,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power3.inOut" }
    ).fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-[#E9E9E9]">
      {/* Image */}
      <div ref={imageRef} className="w-full aspect-[16/9] h-180 lg:aspect-[21/9]  brightness-110 relative overflow-hidden mb-12 lg:mb-16">
        <Image
          src={saqib}
          alt="Saqib Farhan"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div ref={textRef} className="max-w-4xl">
        <span className="font-[inter-m] text-xs tracking-[0.4em] uppercase text-[#1E2939]/50 mb-6 block">
          / About
        </span>
        
        <p className="font-[playfair-b] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-[#1E2939]">
          I'm a fullstack developer based in Karachi, crafting digital experiences with modern web technologies. Focused on clean code, thoughtful design, and building products that matter.
        </p>

        <br/>
        <br/>

        <p className="text-[#1E2939] text-2xl font-[inter-r] leading-relaxed">
          I'm a Full-Stack Developer who enjoys building practical and user-friendly web applications.

          I work with JavaScript across both frontend and backend, using tools like React, Next.js, Node.js, and databases to build complete web apps.

          I like understanding how things work end to end, from UI to APIs and data handling.
          Currently, I'm improving my skills in TypeScript, Next.js, and backend development by building projects and solving real problems.

          I enjoy challenges because they help me learn faster and become better at what I do.
        </p>
      </div>
    </section>
  );
}

export default About;