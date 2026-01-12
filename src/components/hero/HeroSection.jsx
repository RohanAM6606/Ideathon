import heroBg from "../../assets/images/hero-bg.webp";
import unionSvg from "../../assets/images/Union.svg";
import charSvg from "../../assets/images/char.svg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img 
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/50 z-[1]" />

      {/* Union SVG Overlay - Smaller and positioned down */}
      <img 
        src={unionSvg}
        alt="Geometric Overlay"
        className="absolute top-1/4 right-0 h-3/4 w-auto opacity-70 pointer-events-none"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Character SVG */}
      <img 
        src={charSvg}
        alt="Character"
        className="absolute bottom-0 right-0 h-[85vh] w-auto pointer-events-none z-20"
        style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12 lg:px-20 pt-17">
        <div className="max-w-[680px] space-y-10 ml-1 md:ml-2 lg:ml-3">
          {/* Premium Serif Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Idea to Impact
          </h1>

          {/* Supporting Text */}
          <p 
            className="max-w-[560px] text-base md:text-lg lg:text-xl font-normal text-gray-300 leading-relaxed tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Turn bold ideas into real solutions. Compete with the best, pitch to impress, and rise above the rest.
          </p>

          
          <div className="pt-2">
            <button 
              className="group relative px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base rounded-lg shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Register Now
              <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
