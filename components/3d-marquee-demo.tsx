"use client";
import Image from "next/image";

export default function ThreeDMarqueeDemo() {
  // I'll update the image paths to use SVG files as requested.
  const images = [
    "/pro/3.jpg",
    "/pro/4.jpg",
    "/pro/5 light.jpg",
    "/pro/5.jpg",
    "/pro/7.jpg",
    "/pro/8.jpg",
    "/pro/Blower_Left_Up.png",
    "/pro/Boiler.webp",
    "/pro/chiller-off.png",
    "/pro/FIRST RENDER EVER.png",
    "/pro/GROUND.webp",
    "/pro/Heating_Coil_100%.png",
  ];

  // I'll replace the 3D Marquee with a responsive grid layout.
  return (
    <div className="mx-auto my-10 max-w-7xl p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        My 3D Renders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
