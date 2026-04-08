function Hero() {
  return (
    // h-screen ko mobile par min-h-screen kar diya taake content kate nahi
    <div className="min-h-screen lg:h-screen w-full bg-[#E9E9E9] flex flex-col">
      
      {/* TOP SECTION: Mobile pe column, Desktop pe row */}
      <div className="top w-full min-h-[60vh]  flex flex-col lg:flex-row justify-between items-start lg:items-center">
        
        {/* Left Side: Name */}
        <div className="left w-full lg:w-[60vw] h-auto  lg:h-full flex justify-start items-end p-6 lg:p-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl 
          max-[420px]:pt-40
          uppercase font-[inter-m] text-gray-800 leading-none">
            Saqib <br className="lg:hidden" /> Farhan
          </h1>
        </div>

        {/* Right Side: Role & Description */}
        <div className="right w-full lg:w-[40vw] h-auto lg:h-full flex justify-end items-end p-6 lg:px-10 lg:pb-10 text-black">
          <div className="flex justify-between flex-col items-start gap-5">
            <h2 className="text-3xl lg:text-4xl font-medium">Fullstack Developer</h2>
            <p className="text-base opacity-80 max-w-md">
              I am a fullstack developer with experience in building web
              applications using React, Node.js, and MongoDB. I have a passion
              for creating beautiful and functional user interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bottom flex-grow lg:h-[40vh] w-full overflow-hidden relative">
        
        {/* Content Overlay: Mobile pe stacked, Desktop pe spread */}
        <div className="lg:absolute inset-0 flex flex-col lg:flex-row justify-between items-start lg:items-end p-6 lg:p-10 gap-10">
          
          {/* Left - Small paragraph */}
          <div className="max-w-xs lg:max-w-lg ">
            <p className="text-black text-xl leading-tight">
              Based in Pakistan, working globally. I help startups and
              established brands build digital products that users love. Let's
              create something amazing together.
            </p>
          </div>

          {/* Right - GitHub & LinkedIn */}
          <div className="flex items-center gap-6 lg:gap-4 pb-4 lg:pb-0">
            <a
              href="#"
              className="group flex items-center gap-3 text-black hover:opacity-70 transition-all"
            >
              <span className="text-sm font-bold tracking-widest uppercase">GitHub</span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-3 text-black hover:opacity-70 transition-all"
            >
              <span className="text-sm font-bold tracking-widest uppercase">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;