"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll("span");

    const animation = gsap.from(words, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 90%", // better for mobile
        toggleActions: "play none none none",
      },
    });

    ScrollTrigger.refresh();

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  const text = `I build web applications using Next.js, React, TypeScript, Node.js, and MongoDB. I focus on writing clean code and making sure everything works smoothly from start to finish. I’ve worked on projects for local clients in Pakistan as well as remote international work. I enjoy solving problems and delivering applications that clients actually like to use. Let’s connect if you need a reliable full-stack developer who gets the job done.`;

  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center px-14 sm:px-2 md:px-16 lg:px-32">
      <p
        ref={paragraphRef}
        className="text-center text-lg sm:text-base md:text-lg lg:text-4xl  leading-tight"
      >
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block mr-1 font-[playfair-m]">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default About;