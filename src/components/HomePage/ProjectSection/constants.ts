// Interface for a technology used in a project
export interface Technology {
  name: string;
  color: string; // Tailwind color class or hex code
}

// Interface for project data
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  github?: string; // Optional GitHub link
  demo?: string; // Optional live demo link
  featured: boolean; // Is this a featured project?
}

// Sample project data
export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with React, TypeScript, and Tailwind CSS. Features responsive design, animations, and a clean UI.",
    technologies: [
      { name: "React", color: "bg-[#61DBFB]" },
      { name: "TypeScript", color: "bg-[#3178C6]" },
      { name: "Tailwind", color: "bg-[#38B2AC]" },
    ],
    imageUrl:
      "https://placehold.co/800x450/1a1a1a/FFFFFF/png?text=Portfolio+Website&font=montserrat",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with user authentication, product management, shopping cart, and checkout functionality.",
    technologies: [
      { name: "Next.js", color: "bg-black" },
      { name: "Node.js", color: "bg-[#68A063]" },
      { name: "MongoDB", color: "bg-[#4DB33D]" },
      { name: "Express", color: "bg-[#888888]" },
    ],
    imageUrl:
      "https://placehold.co/800x450/1a1a1a/FFFFFF/png?text=E-Commerce+Platform&font=montserrat",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://yourecommerce.com",
    featured: true,
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with real-time analytics, customizable widgets, and responsive design.",
    technologies: [
      { name: "React", color: "bg-[#61DBFB]" },
      { name: "D3.js", color: "bg-[#F9A03C]" },
      { name: "FastAPI", color: "bg-[#009688]" },
      { name: "PostgreSQL", color: "bg-[#336791]" },
    ],
    imageUrl:
      "https://placehold.co/800x450/1a1a1a/FFFFFF/png?text=Analytics+Dashboard&font=montserrat",
    github: "https://github.com/yourusername/dashboard",
    featured: false,
  },
];
