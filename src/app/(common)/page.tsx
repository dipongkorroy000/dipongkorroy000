import About from "@/src/components/modules/about/About";
import ContactForm from "@/src/components/modules/contact/ContactForm";
import Hero from "@/src/components/modules/hero/Hero";
import Projects from "@/src/components/modules/projects/Projects";
import Stack from "@/src/components/modules/skack/Stack";
// import Technologies from "@/src/components/modules/technologies/Technologies";
import {TechStack} from "@/src/components/modules/technologies/TechStack";

export default function Home() {
  return (
    <>
      <section className="">
        <div>
          <Hero></Hero>
        </div>

        <div>
          <div id="about">
            <About />
          </div>

          <div id="stack">
            <Stack></Stack>
          </div>

          {/* Projects Section with id */}
          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <ContactForm></ContactForm>
          </div>

          <div>
            {/* <Technologies></Technologies> */}
            <TechStack></TechStack>
          </div>
        </div>
      </section>
    </>
  );
}
