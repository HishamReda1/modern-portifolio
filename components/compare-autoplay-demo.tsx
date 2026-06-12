import React from "react";
import { Compare } from "@/components/ui/compare";
import { projectIcons } from "@/data";

export default function CompareDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20">
      {/* Project 1 */}
      <section className="w-full flex flex-col items-center gap-8">
        {/* Image Compare */}
        <div className="w-full flex items-center justify-center">
          <div className="p-2 md:p-4 border rounded-3xl w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <Compare
              firstImage="/before.jpg"
              secondImage="/pro/8.jpg"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full rounded-2xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>

        {/* Text under image */}
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Extrior render for Modern villa
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From a basic model to a photorealistic render, this is where technical skill meets artistic vision.
            Using <strong>Lumion Pro</strong>, I meticulously craft each scene by fine-tuning the <strong>mood</strong>,
            developing custom <strong>materials</strong>, and sculpting with <strong>light</strong>. The final composition
            balances <strong>colors</strong>, natural <strong>environments</strong>, and every detail to bring the vision to life.
          </p>

          {/* Icons */}
          <div className="flex justify-center items-center mt-6 gap-3">
            {projectIcons[0]?.icons?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
              >
                <img src={icon} alt={`icon-${index}`} className="p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Project 2 */}
      <section className="w-full flex flex-col items-center gap-8">
        {/* Image Compare */}
        <div className="w-full flex items-center justify-center">
          <div className="p-2 md:p-4 border rounded-3xl w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <Compare
              firstImage="/مستشفى الاورمان للاطفال في سوهاج  before render.jpg"
              secondImage="/مستشفى الاورمان للاطفال في سوهاج.png"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full rounded-2xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>

        {/* Text under image */}
        <div className="w-full max-w-3xl text-center text-neutral-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Orman Children&apos;s Hospital - Sohag
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            This project involved transforming the initial 2D CAD designs into a full 3D model. 
            The structure was built in <strong>SketchUp</strong> and then rendered in <strong>Lumion</strong>. 
            The final model was optimized for integration with a Building Management System (BMS).
          </p>

          {/* Icons */}
          <div className="flex justify-center items-center mt-6 gap-3">
            {projectIcons[1]?.icons?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
              >
                <img src={icon} alt={`icon-${index}`} className="p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Project 3 */}
      <section className="w-full flex flex-col items-center gap-8">
        {/* Image Compare */}
        <div className="w-full flex items-center justify-center">
          <div className="p-2 md:p-4 border rounded-3xl w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <Compare
              firstImage="/AHU BEFORE.PNG"
              secondImage="/AHU AFTER.PNG"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full rounded-2xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>

        {/* Text under image */}
        <div className="w-full max-w-3xl text-center text-neutral-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            AHU Components - EITS
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            This project showcases a complete build of all <strong>Air Handling Unit (AHU)</strong> components 
            for <strong>EITS</strong>. The modeling was done in <strong>SketchUp </strong> 
             and the rendering executed in <strong>Lumion</strong>, highlighting the technical details 
            and real-world visualization of the mechanical systems.
          </p>

          {/* Icons */}
          <div className="flex justify-center items-center mt-6 gap-3">
            {projectIcons[2]?.icons?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
              >
                <img src={icon} alt={`icon-${index}`} className="p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Project 4: FAHU */}
      <section className="w-full flex flex-col items-center gap-8">
        <div className="w-full flex items-center justify-center">
          <div className="p-2 md:p-4 border rounded-3xl w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <Compare
              firstImage="/FAHU-BEFOR.jpeg"
              secondImage="/FAHU-AFTER.png"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full rounded-2xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>

        <div className="w-full max-w-3xl text-center text-neutral-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Fresh Air Handling Unit (FAHU)
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            A complete visual upgrade for the FAHU system interface. The intricate internal components, airflow paths, and mechanical structure were modeled entirely in <strong>SketchUp</strong> and rendered with high photorealism using <strong>V-Ray</strong> and <strong>TGML</strong> to ensure a seamless and clear BMS integration.
          </p>

          <div className="flex justify-center items-center mt-6 gap-3">
            {projectIcons[3]?.icons?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
              >
                <img src={icon} alt={`icon-${index}`} className="p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Project 5: Fan Coil */}
      <section className="w-full flex flex-col items-center gap-8">
        <div className="w-full flex items-center justify-center">
          <div className="p-2 md:p-4 border rounded-3xl w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <Compare
              firstImage="/fanCoil-before.jpeg"
              secondImage="/fanCoil-after.png"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full rounded-2xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>

        <div className="w-full max-w-3xl text-center text-neutral-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            DX Split Unit / Fan Coil
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Detailed 3D representation of a ceiling-concealed Fan Coil Unit. Precise mechanical details, ductwork, and piping connections were carefully crafted in <strong>SketchUp</strong> and brought to life with realistic lighting and materials using <strong>V-Ray</strong>and <strong>TGML</strong>.
          </p>

          <div className="flex justify-center items-center mt-6 gap-3">
            {projectIcons[4]?.icons?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
              >
                <img src={icon} alt={`icon-${index}`} className="p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-700" />

      {/* Project 6: Pump Station */}
      <section className="w-full flex flex-col items-center gap-8">
        <div className="w-full flex items-center justify-center">
          <div className="p-2 md:p-4 border rounded-3xl w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <Compare
              firstImage="/station-before.jpeg"
              secondImage="/STATION-AFTER.png"
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full rounded-2xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>

        <div className="w-full max-w-3xl text-center text-neutral-300">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Water Booster Pump Station
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Transforming a real-world pump room photo into a clean, interactive 3D graphical interface. The pipes, expansion tanks, and booster pumps were accurately modeled in <strong>SketchUp</strong> and rendered using <strong>V-Ray</strong> and <strong>TGML</strong> to create a professional dashboard view.
          </p>

          <div className="flex justify-center items-center mt-6 gap-3">
            {projectIcons[5]?.icons?.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
              >
                <img src={icon} alt={`icon-${index}`} className="p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}