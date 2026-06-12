"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import AutoSlider from "@/components/pixelated-canvas-demo";
import PortfolioSlider from "@/components/PortfolioSlider";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
      <Hero />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      
        <AutoSlider />
        <PortfolioSlider />
        <RecentProjects />
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
