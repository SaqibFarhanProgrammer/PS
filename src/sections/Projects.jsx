"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import splitly from "@/assets/splitly.png";
import coraide from "@/assets/cora_ide.png";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    title: "Splitly",
    category: "Web App",
    year: "2024",
    image: splitly,
  },
  {
    id: 2,
    title: "Cora IDE",
    category: "Developer Tool",
    year: "2024",
    image: coraide,
  },
];

function Projects() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      ).fromTo(
        projectRefs.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 px-6 lg:px-12 xl:px-24"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-6"
      >
        <div>
          <span className="font-[inter-m] text-xs tracking-[0.3em] uppercase opacity-60 mb-4 block">
            Selected Work
          </span>
          <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none">
            Projects
          </h2>
        </div>
        <p className="font-[inter-r] text-sm lg:text-base max-w-md opacity-70 leading-relaxed">
          A curated selection of projects that showcase my expertise in design
          and development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <div className="absolute inset-0 bg-neutral-200">
                {/* Placeholder - replace with actual Image component */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-zinc-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover  mt-20 mx-20"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

              {/* View Project Button */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-[inter-b] text-xl lg:text-2xl mb-2 group-hover:opacity-60 transition-opacity duration-300">
                  {project.title}
                </h3>
                <p className="font-[inter-r] text-sm opacity-60">
                  {project.category}
                </p>
              </div>
              <span className="font-[inter-m] text-xs opacity-40">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-16 lg:mt-24 flex justify-center">
        <button className="group relative px-8 py-4 border border-current rounded-full font-[inter-m] text-sm tracking-wide overflow-hidden">
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
            View All Projects
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-current transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
