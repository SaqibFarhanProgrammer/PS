import Hero from "@/sections/Hero";
import SmoothScroll from "@/components/smooth-scroll";
import About from "@/sections/About";
export default function Home() {
  return (
    <div className="bg-[#E9E9E9] text-black">
      <SmoothScroll>

      <Hero/>
    <About/>
      </SmoothScroll>
    
    </div>
  );
}
