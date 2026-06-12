export type Tech =
  | "EBO"
  | "TGML"
  | "SketchUp"
  | "Lumion Pro"
  | "V-Ray"
  | "Sweet Home 3D"
  | "Photoshop"
  | "Unreal Engine 5"
  | "Blueprints"
  | "UMG"
  | "REST APIs"
  | "EBO Integration"
  | "KNX"
  | "GRMS";

export interface Slide {
  id: number;
  title: string;
  location: string;
  type: string;
  role: string;
  description: string;
  technologies: Tech[];
  deliverables: string[];
  image: string;
  accent: string;
  accentDim: string;
}

export const TECH_META: Record<Tech, { short: string; color: string }> = {
  EBO: { short: "EBO", color: "#00e89a" },
  TGML: { short: "TGML", color: "#00d4ff" },
  SketchUp: { short: "SU", color: "#ff6b35" },
  "Lumion Pro": { short: "Lumion", color: "#4da6ff" },
  "V-Ray": { short: "V‑Ray", color: "#ff4d7e" },
  "Sweet Home 3D": { short: "SH3D", color: "#ffb347" },
  Photoshop: { short: "Ps", color: "#31a8ff" },
  "Unreal Engine 5": { short: "UE5", color: "#c084fc" },
  Blueprints: { short: "BP", color: "#60a5fa" },
  UMG: { short: "UMG", color: "#a78bfa" },
  "REST APIs": { short: "REST", color: "#34d399" },
  "EBO Integration": { short: "EBO⊕", color: "#00e89a" },
  KNX: { short: "KNX", color: "#f97316" },
  GRMS: { short: "GRMS", color: "#fbbf24" },
};

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "RDC Schneider Electric Headquarters",
    location: "Riyadh, Saudi Arabia",
    type: "BMS GUI Engineering",
    role: "GUI Engineer",
    description:
      "Developed BMS graphical interfaces, navigation systems, and building visualization assets for Schneider Electric regional headquarters.",
    technologies: ["EBO", "TGML", "SketchUp", "Lumion Pro", "Photoshop"],
    deliverables: [
      "BMS Graphical Interfaces",
      "Navigation Systems",
      "Building Visualization",
    ],
    image:
      "https://images.unsplash.com/photo-1685720543547-cc4873188c75?w=1920&h=1080&fit=crop&auto=format",
    accent: "#00e89a",
    accentDim: "rgba(0,232,154,0.12)",
  },
  {
    id: 2,
    title: "Ministry of Tourism",
    location: "Saudi Arabia",
    type: "BMS GUI Engineering",
    role: "GUI Engineer",
    description:
      "Created monitoring graphics, visualization layouts, and BMS interfaces for a government-scale facility.",
    technologies: ["EBO", "TGML", "SketchUp", "V-Ray", "Photoshop"],
    deliverables: [
      "Monitoring Graphics",
      "Visualization Layouts",
      "BMS Interfaces",
    ],
    image:
      "https://images.unsplash.com/photo-1570724546132-6a61bb3c3894?w=1920&h=1080&fit=crop&auto=format",
    accent: "#00d4ff",
    accentDim: "rgba(0,212,255,0.12)",
  },
  {
    id: 3,
    title: "Abu Qir Metro Station",
    location: "Alexandria, Egypt",
    type: "Infrastructure GUI Engineering",
    role: "GUI Engineer",
    description:
      "Developed operational monitoring screens and graphical navigation interfaces for metro infrastructure.",
    technologies: ["EBO", "TGML", "SketchUp", "V-Ray", "Photoshop"],
    deliverables: [
      "Operational Monitoring Screens",
      "Graphical Navigation",
      "Infrastructure Interfaces",
    ],
    image:
      "https://images.unsplash.com/photo-1556695736-d287caebc48e?w=1920&h=1080&fit=crop&auto=format",
    accent: "#4da6ff",
    accentDim: "rgba(77,166,255,0.12)",
  },
  {
    id: 4,
    title: "Schneider Badr Factory",
    location: "Badr City, Egypt",
    type: "Industrial BMS GUI Engineering",
    role: "GUI Engineer",
    description:
      "Designed factory monitoring interfaces and facility visualization systems for large-scale industrial operations.",
    technologies: ["EBO", "TGML", "SketchUp", "Sweet Home 3D"],
    deliverables: [
      "Factory Monitoring Interfaces",
      "Facility Visualization",
      "Industrial Dashboards",
    ],
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1920&h=1080&fit=crop&auto=format",
    accent: "#ffb347",
    accentDim: "rgba(255,179,71,0.12)",
  },
  {
    id: 5,
    title: "VOCO Hotel Arabella Plaza",
    location: "Egypt",
    type: "Hotel Automation GUI Engineering",
    role: "GUI Engineer",
    description:
      "Developed hotel automation graphics, room management interfaces, and building monitoring systems.",
    technologies: ["EBO", "TGML", "KNX", "GRMS", "SketchUp"],
    deliverables: [
      "Hotel Automation Graphics",
      "Room Management UI",
      "Building Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1677129667171-92abd8740fa3?w=1920&h=1080&fit=crop&auto=format",
    accent: "#fbbf24",
    accentDim: "rgba(251,191,36,0.12)",
  },
  {
    id: 6,
    title: "October Plaza",
    location: "6th of October City, Egypt",
    type: "BMS GUI Engineering",
    role: "GUI Engineer",
    description:
      "Created BMS dashboards and visualization interfaces for residential and mixed-use facilities.",
    technologies: ["EBO", "TGML", "SketchUp", "Sweet Home 3D"],
    deliverables: [
      "BMS Dashboards",
      "Mixed-Use Visualization",
      "Residential Interfaces",
    ],
    image:
      "https://images.unsplash.com/photo-1513061379709-ef0cd1695189?w=1920&h=1080&fit=crop&auto=format",
    accent: "#34d399",
    accentDim: "rgba(52,211,153,0.12)",
  },
  {
    id: 7,
    title: "Village West",
    location: "Egypt",
    type: "BMS GUI Engineering",
    role: "GUI Engineer",
    description:
      "Developed graphical monitoring interfaces and building visualization assets for a residential development.",
    technologies: ["EBO", "TGML", "SketchUp", "Sweet Home 3D"],
    deliverables: [
      "Graphical Monitoring Interfaces",
      "Building Visualization Assets",
      "Residential Dashboards",
    ],
    image:
      "https://images.unsplash.com/photo-1535391879778-3bae11d29a24?w=1920&h=1080&fit=crop&auto=format",
    accent: "#a78bfa",
    accentDim: "rgba(167,139,250,0.12)",
  },
  {
    id: 8,
    title: "Sheraton Soma Bay",
    location: "Hurghada, Egypt",
    type: "Hotel BMS GUI Engineering",
    role: "GUI Engineer",
    description:
      "Designed hotel monitoring graphics and operational visualization systems for a resort-scale hospitality venue.",
    technologies: ["EBO", "TGML", "SketchUp", "Sweet Home 3D"],
    deliverables: [
      "Hotel Monitoring Graphics",
      "Operational Visualization",
      "Resort Dashboards",
    ],
    image:
      "https://images.unsplash.com/photo-1581115685033-ccf1aa701722?w=1920&h=1080&fit=crop&auto=format",
    accent: "#ff6b35",
    accentDim: "rgba(255,107,53,0.12)",
  },
  {
    id: 9,
    title: "Digital Twin Demonstration Platform",
    location: "Interactive Real-Time Platform",
    type: "Digital Twin Development",
    role: "Digital Twin Developer",
    description:
      "Built an interactive digital twin platform featuring real-time walkthroughs, automatic doors, smart lighting, POIs linked to HVAC assets, equipment control cards, and live EBO integration via authenticated REST APIs.",
    technologies: [
      "Unreal Engine 5",
      "Blueprints",
      "UMG",
      "REST APIs",
      "EBO Integration",
    ],
    deliverables: [
      "Real-Time 3D Walkthroughs",
      "Smart Automation Systems",
      "Live EBO API Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1691405138982-613ed5b4dbb0?w=1920&h=1080&fit=crop&auto=format",
    accent: "#c084fc",
    accentDim: "rgba(192,132,252,0.12)",
  },
];

export const AUTO_MS = 8000;
