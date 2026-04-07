"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import logo from "@/assets/logo.png";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const mobileLinksRef = useRef([]);
  const menuOverlayRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      if (isOpen) {
        const tl = gsap.timeline();

        tl.to(menuOverlayRef.current, {
          duration: 0.6,
          opacity: 1,
          visibility: "visible",
          ease: "power3.inOut",
        })
          .fromTo(
            mobileLinksRef.current,
            {
              y: 100,
              opacity: 0,
              rotateX: -45,
            },
            {
              duration: 0.8,
              y: 0,
              opacity: 1,
              rotateX: 0,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.3",
          )
          .fromTo(
            ".mobile-footer",
            {
              y: 30,
              opacity: 0,
            },
            {
              duration: 0.6,
              y: 0,
              opacity: 1,
              ease: "power2.out",
            },
            "-=0.4",
          );
      } else {
        gsap.to(menuOverlayRef.current, {
          duration: 0.4,
          opacity: 0,
          visibility: "hidden",
          ease: "power3.inOut",
        });

        gsap.to(mobileLinksRef.current, {
          duration: 0.3,
          y: -50,
          opacity: 0,
          stagger: 0.05,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [isOpen] },
  );

  const navLinks = [
    { name: "Home", href: "#home", number: "01" },
    { name: "Work", href: "#work", number: "02" },
    { name: "About", href: "#about", number: "03" },
    { name: "Services", href: "#services", number: "04" },
    { name: "Contact", href: "#contact", number: "05" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 `}
      >
        <div className="w-full px-6 lg:px-5 xl:px-14">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 w-22 h-22 lg:w-44 lg:h-44">
              <img
                src={logo.src}
                alt="Logo"
                className="w-full h-full object-contain object-contain brightness-0"
              />
            </Link>

            {/* Desktop Navigation + Button */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className="relative group py-2"
                  >
                    <span
                      className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                        activeLink === link.name
                          ? "text-black"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-out ${
                        activeLink === link.name
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>

              <button className="relative group overflow-hidden px-6 py-3 bg-black text-white rounded-full text-sm font-medium tracking-wide hover:shadow-xl hover:shadow-black/20 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                isOpen
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-40 bg-black opacity-0 invisible lg:hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="h-full w-full flex flex-col justify-center px-8 sm:px-12">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                ref={(el) => (mobileLinksRef.current[index] = el)}
                className="overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className="group flex items-baseline gap-4 py-4 border-b border-white/10 hover:border-white/30 transition-colors duration-300"
                >
                  <span className="text-white/30 text-sm font-mono">
                    {link.number}
                  </span>
                  <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight hover:text-white/80 transition-colors duration-300 transform group-hover:translate-x-4 transition-transform">
                    {link.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="mobile-footer mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-white/50 text-sm">Creative Director</p>
                </div>
              </div>

              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full text-lg font-bold tracking-wide hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2">
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Dribbble
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </div>
    </>
  );
};

export default Navbar;
