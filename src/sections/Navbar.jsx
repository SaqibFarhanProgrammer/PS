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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
              y: 80,
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
          y: -30,
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 `}
      >
        <div className="w-full px-6 lg:px-5 xl:px-14">
          <div className="flex items-center justify-between h-16 lg:h-24">
            <Link href="/" className="relative z-50 w-28 lg:w-44 text-black">
              Portfolio
            </Link>

            {/* Desktop Navigation */}
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
              className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                isOpen ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 z-40 bg-black opacity-0 invisible lg:hidden overflow-y-auto"
        style={{ perspective: "1000px" }}
      >
        <div className="min-h-screen w-full flex flex-col justify-between px-6 py-24 sm:px-12">
          {/* Navigation Links */}
          <div className="space-y-1 sm:space-y-2 mt-4">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                ref={(el) => (mobileLinksRef.current[index] = el)}
                className="overflow-hidden"
              >
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className="group flex items-baseline gap-3 py-3 border-b border-white/10"
                >
                  <span className="text-white/30 text-xs sm:text-sm font-['playfair-m']">
                    {link.number}
                  </span>
                  <span className="text-4xl sm:text-6xl font-['inter-m'] text-white tracking-tight active:text-white/60 transition-colors">
                    {link.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mobile-footer mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-col gap-8">
              <button className="w-full py-4 bg-white text-black rounded-full text-base font-bold flex items-center justify-center gap-2">
                Get in Touch
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/40 text-xs uppercase tracking-widest">
                {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </>
  );
};

export default Navbar;
