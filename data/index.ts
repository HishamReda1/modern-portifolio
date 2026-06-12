import { TECH_META, type Tech } from "@/lib/portfolio-slider-data";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const expCards = [
  {
    review: "",
    imgPath: "/logos/acs-logo.png",
    logoPath: "/logos/acs-logo.png",
    title: "GUI Engineer & Digital Twin Developer - ACS (Advanced Control Systems)",
    date: "October 2025 - Present",
    responsibilities: [
      "Working at ACS, a Schneider Electric Master Performance partner specializing in building automation and control systems.",
      "Developing BMS graphical interfaces, navigation systems, and building visualization assets for government, industrial, and hospitality projects.",
      "Building an interactive digital twin platform with Unreal Engine 5, real-time walkthroughs, smart automation, and live EBO integration via REST APIs.",
    ],
  },
  {
    review:
      "I would like to express my sincere thanks and appreciation to Eng. HESHAM. Since his very first day... he has shown great dedication... You are a true example of dedication and creativity and your presence is a genuine asset to our team. - ALAA ABDEL NASSER OMAR, CEO",
    imgPath: "/Logoicon (1).svg",
    logoPath: "/Logoicon (1).svg",
    title: "3D Visualizer & Frontend Developer - Eits Egypt",
    date: "March 2025 - September 2025",
    responsibilities: [
      "Specializing in creating and integrating 3D components for the Building Management System (BMS) platform.",
      "Designed realistic, interactive 3D visualizations to enhance system usability and client presentations.",
      "Developed the official Eits Egypt website, ensuring a fully optimized, responsive, and accessible user experience.",
    ],
  },
  {
    review:
      "We are all really pleased with Hisham’s work. The codebase is now well-structured and styled, and we would be very happy to keep collaborating with him on further additions.",
    imgPath: "/as_logo.svg",
    logoPath: "/as_logo.svg",
    title: "Frontend Developer - Cosmic Coasters (Remote)",
    date: "June 2023 - Present",
    responsibilities: [
      "Developed an interactive company website using React, Three.js, and Framer Motion.",
      "Built a custom T-shirt design tool with smooth animations to improve user interaction.",
      "Integrated 3D visualizations to enhance user engagement across platforms.",
    ],
  },
  
  {
    review: "",
    imgPath: "/FCI.png",
    logoPath: "/FCI.png",
    title: "Faculty of Computers & Artificial Intelligence - Benha University",
    date: "2019 - 2023",
    responsibilities: [
      "Studied computer science, software engineering, and artificial intelligence.",
      "Worked on academic and personal web development projects.",
    ],
  },
];

export const expLogos = [
  { name: "EITS", imgPath: "/Logoicon (1).svg" },
  { name: "Cosmic Coasters", imgPath: "/as_logo.svg" },

];

export const gridItems = [
  {
    id: 1,
    title: "Realistic Modern Villa",
    description:
      "A complete visualization of a residential villa using Lumion Pro, focusing on natural lighting and realistic materials.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/pro/8.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "My First 3D Render",
    description:
      "An office designed from scratch in SketchUp and rendered with V-Ray.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-start",
    img: "/pro/FIRST RENDER EVER.png",
    spareImg: "/pro/5 light.jpg",
  },
  {
    id: 6,
    title: "Do you have a project in mind? Let's build it together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Eits Egypt Website",
    des: "A website for a building management system company built with React, Three.js, and Framer Motion.",
    img: "/EITS-PROJECT.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://eits-egypt.com/en",
  },
  {
    id: 2,
    title: "Cosmic Coasters Website",
    des: "A website for a rocketry engineering team built with React, Three.js, and Framer Motion.",
    img: "/COSMIC-PROJECT.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://cosmic-coasters-8qw8stj59-hishamreda1.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "I would like to express my sincere thanks and appreciation to Eng. HESHAM for his dedication and creativity.",
    name: "Alaa Abdel Nasser Omar",
    title: "CEO of EITS Control and Power Technology",
    img: "/ceo.webp",
  },
  {
    quote:
      "We are really pleased with Hisham’s work and would like to continue collaborating with him.",
    name: "Fabian Maier",
    title: "Team Leader in Cosmic Coasters",
    img: "/fabian.jpg",
  },
  {
    quote: "Excellent work Hisham, really beautiful mashalla",
    name: "Mohamed Ghazy",
    title: "Executive Director at EITS",
    img: "/mghazy.webp",
  },
  {
    quote:
      "You did exactly what I had in mind, thank you for the amazing logo work.",
    name: "Othman Nour",
    title: "Logo/Brand designer",
    img: "/osman.jpg",
  },
  {
    quote:
      "The final result exceeded my expectations and I’m really happy with it.",
    name: "Abdulhamid Sultan",
    title: "Founder of Ejaza App",
    img: "/a_soltan.jpg",
  },
];

export const companies = [
  { id: 1, name: "Cosmic Coasters", img: "/as_logo.svg" },
  { id: 2, name: "EITS", img: "/Logoicon (1).svg" },
  { id: 3, name: "Darfur", img: "/darfur-1.png" },
  { id: 4, name: "Othman Nour", img: "/عثمان نور.png" },
  { id: 5, name: "Ejaza", img: "/اجازة -ejaza 2-01.png" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HishamReda1",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hisham-reda-325095274/",
  },
];

export const projectIcons = [
  {
    id: 1,
    icons: ["/sketchup.jpg", "/lumion.jpg"],
  },
  {
    id: 2,
    icons: ["/autocad.png", "/sketchup.jpg", "/lumion.jpg"],
  },
  {
    id: 3,
    icons: ["/sketchup.jpg", "/lumion.jpg"],
  },
];

export const techStackIcons = [
  {
    name: "Unreal Engine 5",
    modelPath: "/models/unreal-engine.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
  {
    name: "SketchUp",
    modelPath: "/models/sketchup.gltf",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Lumion Pro",
    modelPath: "/models/lumion.gltf",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "V-Ray",
    modelPath: "/models/Vray-Logo--Streamline-Logos.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
  {
    name: "Schneider EBO",
    modelPath: "/models/schnider.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
];

export const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];