export type TechItem = {
  name: string;
  icon: string;
  role: string;
  level: number;
};

export type StackCategory = {
  title: string;
  items: TechItem[];
};

export const STACK_DATA: StackCategory[] = [
  {
    title: "FRONTEND",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        role: "UI LIBRARY",
        level: 95,
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        role: "FULL STACK FRAMEWORK",
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        role: "CSS FRAMEWORK",
        level: 90,
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        role: "STATE MANAGEMENT",
        level: 82,
      },
      {
        name: "Vite",
        icon: "https://cdn.simpleicons.org/vite/646CFF",
        role: "BUILD TOOL",
        level: 80,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 85,
      },
      {
        name: "Figma",
        icon: "https://cdn.simpleicons.org/figma/F24E1E",
        role: "INTERFACE BLUEPRINT",
        level: 75,
      },
    ],
  },
  {
    title: "BACKEND",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        role: "RUNTIME ENVIRONMENT",
        level: 90,
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/000000",
        role: "BACKEND FRAMEWORK",
        level: 88,
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        role: "BACKEND SERVICE",
        level: 78,
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        role: "ORM TOOL",
        level: 85,
      },
    ],
  },
  {
    title: "DATABASE",
    items: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        role: "RELATIONAL DATABASE",
        level: 85,
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        role: "NoSQL DATABASE",
        level: 84,
      },
      {
        name: "Redis",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redis-icon.png",
        role: "IN-MEMORY DATABASE",
        level: 76,
      },
    ],
  },
  {
    title: "TOOLS",
    items: [
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/000000",
        role: "VERSION CONTROL",
        level: 95,
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        role: "CODE EDITOR",
        level: 70,
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        role: "VERSION CONTROL",
        level: 92,
      },
      {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel/000000",
        role: "HOSTING PLATFORM",
        level: 80,
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        role: "API TESTING TOOL",
        level: 86,
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        role: "CONTAINER PLATFORM",
        level: 80,
      },
    ],
  },
  {
    title: "LANGUAGES",
    items: [
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 72,
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 78,
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        role: "PROGRAMMING LANGUAGE",
        level: 88,
      },
    ],
  },
];
