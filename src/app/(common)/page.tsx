import About from "@/src/components/modules/about/About";
import Hero from "@/src/components/modules/hero/Hero";
import Projects from "@/src/components/modules/projects/Projects";
import Technologies from "@/src/components/modules/technologies/Technologies";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl -mt-8 mx-auto border-l border-r rounded-sm bg-background">
        <div>
          <Hero></Hero>
        </div>

        <div className="">
          <div id="about">
            <About />
          </div>

          <div>
            <Technologies></Technologies>
          </div>

          {/* Projects Section with id */}
          <div id="projects">
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
}
