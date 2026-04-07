"use client";
import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = paragraphRef.current.querySelectorAll("span");

    gsap.from(words, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const text = `I build web applications using Next.js, React, TypeScript, Node.js, and MongoDB. 
  I focus on writing clean code and making sure everything works smoothly from start to finish.
  I’ve worked on projects for local clients in Pakistan as well as remote international work. 
  I enjoy solving problems and delivering applications that clients actually like to use.
  Let’s connect if you need a reliable full-stack developer who gets the job done.`;

  return (
    <div className="h-screen w-full flex justify-center items-center px-52 text-2xl font-['playfair-m'] text-center">
      <p ref={paragraphRef} className="overflow-hidden">
        {text.split(" ").map((word, index) => (
          
          <span key={index} className="inline-block mr-1 text-4xl ">
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default About;
