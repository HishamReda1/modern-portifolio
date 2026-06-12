"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
<<<<<<< HEAD
import AutoSlider from "@/components/pixelated-canvas-demo";
import PortfolioSlider from "@/components/PortfolioSlider";
import RecentProjects from "@/components/RecentProjects";
=======
import RecentProjects from "@/components/RecentProjects";
import AutoSlider from "@/components/pixelated-canvas-demo";
>>>>>>> 1da11da113bbae3c09615f9d2f025dfd4c32b4ff
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
      <Hero />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      
        <AutoSlider />
<<<<<<< HEAD
        <PortfolioSlider />
        <RecentProjects />
=======
        <RecentProjects />
        {/* Orman Hospital Project Section */}
 
>>>>>>> 1da11da113bbae3c09615f9d2f025dfd4c32b4ff
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
