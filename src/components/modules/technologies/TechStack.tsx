import {TechStackItem} from "./TechStackItem";
import type {TechStackProps, TechItem} from "./types";

const DEFAULT_TECHNOLOGIES: TechItem[] = [
  {
    name: "C Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Mongoose",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "Mongo DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "React Router",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  },
];

export const TechStack = ({technologies = DEFAULT_TECHNOLOGIES, className = "", "data-id": dataId}: TechStackProps) => {
  // Split technologies into two rows
  const midpoint = Math.ceil(technologies.length / 2);
  const firstRow = technologies.slice(0, midpoint);
  const secondRow = technologies.slice(midpoint);

  return (
    <div className={`mx-auto max-w-5xl py-20 overflow-hidden ${className}`} data-id={dataId}>
      <h2 className="text-2xl font-bold text-center mb-10 max-md:mb-5 max-md:text-xl max-md:text-start px-8">5. Technologies I Work With</h2>

      <div className="md:space-y-8 space-y-4">
        {/* First Row */}
        <div className="relative overflow-hidden fade-mask">
          <div className="animate-scroll-left">
            {[...firstRow, ...firstRow].map((tech, index) => (
              <TechStackItem key={`row1-${index}`} item={tech} index={index} rowIndex={0} />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative overflow-hidden fade-mask">
          <div className="animate-scroll-right">
            {[...secondRow, ...secondRow].map((tech, index) => (
              <TechStackItem key={`row2-${index}`} item={tech} index={index} rowIndex={1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
