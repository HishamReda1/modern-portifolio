import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import CoverDemo from "./cover-demo";

const Hero = () => {
  return (
    // تم تغيير min-h-screen إلى min-h-[100dvh] لضبط الارتفاع بشكل أدق على جميع الشاشات
    <div className="relative flex items-center justify-center min-h-[100dvh] w-full overflow-hidden">
      
      {/* Background Image and Overlay */}
      <div
        className="hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Artboard 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          // إذا أردت إزالة التدرج الشفاف، قم بحذف السطرين القادمين
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black-100 opacity-30" />

      {/* Content */}
      <div className="relative z-10 flex justify-start w-full max-w-7xl px-5 sm:px-10 backdrop-blur-sm md:backdrop-blur-none">
        <div className="max-w-[80vw] md:max-w-xl lg:max-w-[40vw] flex flex-col items-center md:items-start justify-center text-center md:text-left">
          
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 text-center md:text-left">
            REAL-TIME BUILDING SYSTEMS & DIGITAL TWIN INTERFACES
          </h2>

          <CoverDemo />

          <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hisham Gbely, a GUI Engineer | Schneider EBO | Digital Twin | Unreal Engine Developer
            <br />
            Hisham Gbely, a 3D Visualizer & Next.js Developer based in EGYPT.
          </p>

          <a href="#about" className="mx-auto md:mx-0">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;