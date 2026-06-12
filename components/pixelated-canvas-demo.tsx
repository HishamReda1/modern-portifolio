"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  {
    id: "3d-visualizer",
    image: "/3dv.jpg",
    title: "3D Visualizer",
    content: [
      "Dreaming in dimensions, I transform concepts and blueprints into detailed, realistic 3D models.",
      "Objects with purpose — every design I create carries value and meaning beyond its geometry.",
      "Harnessing light, I define mood, highlight materials, and bring spaces to life.",
      "Architectural storytelling merges precision with creativity to deliver impactful visualizations."
    ]
  },
  {
    id: "programmer",
    image: "/programmer.jpg",
    title: "Programmer",
    content: [
      "Designing logic, I develop structured, efficient solutions that ensure seamless performance.",
      "Opening possibilities, I turn ideas into practical applications that support innovation and interaction.",
      "Human-centered solutions are my focus, creating software experiences that are intuitive and effective.",
      "Architecture of ideas — I build frameworks that translate vision into measurable results."
    ]
  },
  {
    id: "visual-artist",
    image: "/visual artist.jpg",
    title: "Visual Artist",
    content: [
      "Delivering emotions, I transform creative visions into impactful visuals across multiple mediums.",
      "Observing details, I pay close attention to the elements that elevate the quality of every artwork.",
      "Harmony of forms defines my process, balancing tradition and innovation for a contemporary identity.",
      "Art that communicates — my work delivers messages clearly and leaves a lasting impression."
    ]
  }
];

export default function AutoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sections.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full py-8 md:py-20">
   <h1 className="heading py-4">
      About
        <span className="text-purple"> me</span>
      </h1>
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
        {/* Main Slider Container */}
        <div className="relative overflow-hidden rounded-lg md:rounded-2xl">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sections.map((section, index) => (
              <div key={section.id} className="w-full flex-shrink-0 relative">
                {/* Full Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                </div>
                
                {/* Text Content Overlay */}
                <div className="relative z-10 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center">
                  <div className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl text-center md:text-left">
                        {section.title}
                      </h2>
                      <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed drop-shadow-lg font-light text-center md:text-left">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-20">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                  index === currentSlide
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-100 ease-linear"
              style={{ 
                width: `${((currentSlide + 1) / sections.length) * 100}%` 
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
