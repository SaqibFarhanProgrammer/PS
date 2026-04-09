// Process.tsx
'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { 
  Lightbulb, 
  Target,
  PenTool, 
  Code2, 
  Rocket, 
  ArrowRight,
  MessageSquare,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Layers
} from "lucide-react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2024",
    image: "/project1.jpg",
    description: "Modern shopping experience with real-time inventory and AI recommendations.",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: "02",
    title: "Finance Dashboard",
    category: "Web App",
    year: "2024",
    image: "/project2.jpg",
    description: "Real-time analytics dashboard for tracking investments and expenses.",
    tags: ["React", "D3.js", "PostgreSQL"],
  },
  {
    id: "03",
    title: "AI Support Bot",
    category: "AI Chatbot",
    year: "2023",
    image: "/project3.jpg",
    description: "Intelligent customer support automation with NLP.",
    tags: ["OpenAI", "LangChain", "Redis"],
  },
  {
    id: "04",
    title: "Design System",
    category: "UI/UX",
    year: "2023",
    image: "/project4.jpg",
    description: "Enterprise component library with comprehensive documentation.",
    tags: ["Figma", "Storybook", "React"],
  },
];

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Understanding the Vision",
    icon: Lightbulb,
    duration: "1-2 Weeks",
    description: "Every great project starts with a conversation. I dive deep into understanding your business goals, target audience, and competitive landscape.",
    activities: [
      "Initial consultation & goal setting",
      "Stakeholder interviews",
      "Market & competitor research",
      "User persona development",
      "Project scope definition"
    ],
    deliverables: ["Project Brief", "User Research Report", "Competitive Analysis"],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "02",
    title: "Strategy",
    subtitle: "Planning the Roadmap",
    icon: Target,
    duration: "1 Week",
    description: "With insights gathered, I define the technical architecture, feature prioritization, and create a detailed roadmap for execution.",
    activities: [
      "Tech stack selection",
      "System architecture design",
      "Feature prioritization (MoSCoW)",
      "Timeline & milestone planning",
      "Risk assessment"
    ],
    deliverables: ["Technical Specification", "Project Roadmap", "Architecture Diagram"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "03",
    title: "Design",
    subtitle: "Crafting Experiences",
    icon: PenTool,
    duration: "2-3 Weeks",
    description: "Design is where ideas take shape. I create intuitive interfaces that balance aesthetics with functionality, ensuring delightful user experiences.",
    activities: [
      "Wireframing & low-fi prototypes",
      "UI design & visual systems",
      "Interaction design",
      "Design system creation",
      "Usability testing"
    ],
    deliverables: ["Wireframes", "High-fidelity Mockups", "Interactive Prototype", "Design System"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "04",
    title: "Development",
    subtitle: "Building with Precision",
    icon: Code2,
    duration: "3-8 Weeks",
    description: "Clean, scalable code that performs. I follow best practices, maintain regular communication, and ensure quality through continuous testing.",
    activities: [
      "Frontend development (React/Next.js)",
      "Backend API development",
      "Database design & integration",
      "Third-party service integration",
      "Code reviews & testing"
    ],
    deliverables: ["Production Code", "API Documentation", "Test Reports"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "05",
    title: "Launch",
    subtitle: "Going Live",
    icon: Rocket,
    duration: "1 Week",
    description: "Deployment is just the beginning. I ensure smooth launch, monitor performance, and provide support for a seamless transition.",
    activities: [
      "Production deployment",
      "Performance optimization",
      "Analytics setup",
      "Documentation handover",
      "Training & support"
    ],
    deliverables: ["Live Application", "User Manual", "Maintenance Plan"],
    color: "from-rose-500/20 to-red-500/20"
  }
];

const principles = [
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Weekly updates, clear documentation, and open channels throughout the project."
  },
  {
    icon: Zap,
    title: "Agile Approach",
    description: "Flexible methodology allowing for changes and continuous improvement."
  },
  {
    icon: CheckCircle2,
    title: "Quality First",
    description: "Rigorous testing and code reviews ensure robust, scalable solutions."
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased load gracefully."
  }
];

function Process() {
  const containerRef = useRef(null);
  const projectHeaderRef = useRef(null);
  const projectRefs = useRef([]);
  const processHeaderRef = useRef(null);
  const stepsRef = useRef([]);
  const principlesRef = useRef(null);

  useGSAP(() => {
    // Projects animation
    gsap.fromTo(
      projectHeaderRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectHeaderRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      projectRefs.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectRefs.current[0],
          start: "top 85%",
        },
      }
    );

    // Process animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: processHeaderRef.current,
        start: "top 75%",
      },
    });

    tl.fromTo(
      processHeaderRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      stepsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    gsap.fromTo(
      principlesRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: principlesRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#E9E9E9]">
      {/* Projects Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 xl:px-24">
        <div ref={projectHeaderRef} className="mb-16 lg:mb-24">
          <span className="font-[inter-m] text-xs tracking-[0.4em] uppercase text-[#1E2939]/50 mb-4 block">
            / Featured Work
          </span>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl leading-none text-[#1E2939]">
              Selected<br />
              <span className="font-[playfair-m] italic">Projects</span>
            </h2>
            <p className="font-[inter-r] text-sm lg:text-base max-w-md text-[#1E2939]/70 leading-relaxed lg:text-right">
              A curated selection of work showcasing expertise in design, development, and problem-solving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-[#1E2939]" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="font-[inter-m] text-7xl lg:text-8xl text-white/20 font-bold">
                    {project.id}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-[inter-m] text-xs text-[#1E2939]/40 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#1E2939]/20" />
                    <span className="font-[inter-m] text-xs text-[#1E2939]/40">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-[inter-b] text-xl lg:text-2xl text-[#1E2939] mb-2 group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="font-[inter-r] text-sm text-[#1E2939]/60 max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#1E2939]/10 rounded-full font-[inter-m] text-xs text-[#1E2939]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center">
          <button className="group relative px-10 py-5 border-2 border-[#1E2939] text-[#1E2939] rounded-full font-[inter-m] text-sm tracking-wide overflow-hidden hover:text-white transition-colors duration-500">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#1E2939] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-12 xl:px-24 pb-20 lg:pb-32">
        <div ref={processHeaderRef} className="max-w-4xl mb-16 lg:mb-24">
          <span className="font-[inter-m] text-xs tracking-[0.4em] uppercase text-[#1E2939]/50 mb-4 block">
            / My Process
          </span>
          <h2 className="font-[playfair-b] text-5xl sm:text-6xl lg:text-7xl leading-none text-[#1E2939] mb-6">
            How I Bring<br />
            <span className="font-[playfair-m] italic">Ideas to Life</span>
          </h2>
          <p className="font-[inter-r] text-lg lg:text-xl text-[#1E2939]/70 leading-relaxed max-w-2xl">
            A refined workflow that transforms concepts into exceptional digital products. 
            Every phase is collaborative, transparent, and focused on delivering value.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.id}
                ref={(el) => (stepsRef.current[index] = el)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-[inter-m] text-6xl lg:text-7xl font-bold text-[#1E2939]/10">
                      {step.id}
                    </span>
                    <div className="h-[1px] flex-1 bg-[#1E2939]/10" />
                    <span className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/50">
                      {step.duration}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="font-[inter-m] text-xs uppercase tracking-wider text-[#1E2939]/40">
                      {step.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="font-[playfair-b] text-3xl lg:text-4xl text-[#1E2939] mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="font-[inter-r] text-base lg:text-lg text-[#1E2939]/70 leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-[inter-b] text-xs uppercase tracking-wider text-[#1E2939]/60 mb-4">
                      Key Activities
                    </h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <li 
                          key={i} 
                          className="font-[inter-r] text-sm text-[#1E2939]/70 flex items-start gap-3"
                        >
                          <ArrowRight className="w-4 h-4 mt-0.5 text-[#1E2939]/30 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-4 py-2 bg-[#1E2939]/5 rounded-full font-[inter-m] text-xs text-[#1E2939]/70"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${step.color} p-8 lg:p-12 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-[#1E2939]" />
                    </div>
                    <div>
                      <span className="font-[playfair-b] text-7xl lg:text-8xl text-[#1E2939]/10">
                        {step.id}
                      </span>
                    </div>
                    <div className="absolute top-1/2 right-8 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Principles */}
      <section 
        ref={principlesRef} 
        className="py-20 lg:py-32 px-6 lg:px-12 xl:px-24 bg-[#1E2939] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-[inter-m] text-xs tracking-[0.4em] uppercase text-white/40 mb-4 block">
              / Principles
            </span>
            <h2 className="font-[playfair-b] text-4xl sm:text-5xl lg:text-6xl">
              How I Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={principle.title}
                  className="group p-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[inter-b] text-lg mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-[inter-r] text-sm text-white/60 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1E2939] rounded-full font-[inter-m] text-sm tracking-wide hover:bg-white/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;