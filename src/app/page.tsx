import Hero from "@/sections/Hero";
import SmoothScroll from "@/components/smooth-scroll";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills"
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <div className="bg-[#E9E9E9] text-[#1E2939]">
      <SmoothScroll>
        <Hero />
        <About />
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </SmoothScroll>
    </div>
  );
}
