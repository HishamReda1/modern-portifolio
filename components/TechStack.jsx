"use client";
import dynamic from "next/dynamic";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/ui/TitleHeader";

import { techStackIcons } from "@/data";
const TechIconCardExperience = dynamic(
  () => import("@/components/models/tech_logos/TechIconCardExperience"),
  { ssr: false }
);
const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center md:py-20 py-10"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-16 md:gap-10 gap-5 mt-16">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="tech-card relative overflow-hidden group border border-gray-300 rounded-lg xl:rounded-full"
            >
              {/* Hover background from bottom to top using scaleY */}
              <div className="absolute inset-0 bg-gray-500/50 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center xl:gap-5 xl:h-[50vh] overflow-hidden group-hover:cursor-grab">
                <div className="flex justify-center items-center w-52 h-60 relative">
                  <TechIconCardExperience model={techStackIcon} />
                </div>

                <div className="w-full px-4">
                  <p className="text-lg 2xl:text-2xl pb-5 xl:pb-0 font-semibold text-white/50 text-center">
                    {techStackIcon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
