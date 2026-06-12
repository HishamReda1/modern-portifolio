"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";

import AutoSlider from "@/components/pixelated-canvas-demo";

import RecentProjects from "@/components/RecentProjects";

import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { PortfolioSlider } from "@/components/PortfolioSlider";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
   
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
         <Hero />
        <AutoSlider />

        <PortfolioSlider />
        <RecentProjects />

      
        {/* Orman Hospital Project Section */}

        <Clients />
        <Experience />
        <TechStack/>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
