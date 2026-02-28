import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

export default function Technologies() {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-10 max-md:mb-5 max-md:text-xl max-md:text-start px-8">2. Technologies I Work With</h2>

      <div className="flex flex-col gap-10 justify-center items-center text-center border-t border-b border-muted dark:border-muted w-fit mx-auto p-10 shadow-2xs max-md:gap-8 max-md:py-5">
        {/* Programming Languages */}
        <div>
          <h3 className="text-xl font-semibold  mb-4 max-md:text-lg max-md:mb-2">Languages</h3>
          <div className="flex flex-wrap gap-6 items-center text-4xl">
            <SiC title="C" className="text-[#5E97D0] hover:scale-110 transition" />
            <SiCplusplus title="C++" className="text-[#5E97D0] hover:scale-110 transition" />
            <SiJavascript title="JavaScript" className="text-yellow-500 hover:scale-110 transition" />
            <SiTypescript title="TypeScript" className="text-[#007ACC] hover:scale-110 transition" />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div>
          <h3 className="text-xl font-semibold mb-4 max-md:text-lg max-md:mb-2">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-6 items-center text-4xl">
            <SiReact title="React" className="text-cyan-400 hover:scale-110 transition" />
            <SiNextdotjs title="Next.js" className="text-black dark:text-white hover:scale-110 transition" />
            <SiFirebase title="Firebase" className="text-yellow-400 hover:scale-110 transition" />
            <SiExpress title="Express.js" className="text-gray-700 dark:text-gray-300 hover:scale-110 transition" />
            <SiRedux title="Redux" className="text-purple-600 hover:scale-110 transition" />
          </div>
        </div>

        {/* Databases & ORMs */}
        <div>
          <h3 className="text-xl font-semibold mb-4 max-md:text-lg max-md:mb-2">Databases & ORMs</h3>
          <div className="flex flex-wrap gap-6 items-center text-4xl">
            <SiMongodb title="MongoDB" className="text-green-600 hover:scale-110 transition" />
            <SiPostgresql title="PostgreSQL" className="text-blue-700 hover:scale-110 transition" />
            <SiPrisma title="Prisma" className="text-[#7e7be2] hover:scale-110 transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
