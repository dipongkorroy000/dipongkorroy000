"use client";

import {Button} from "../../ui/button";
import smoothScrollTo from "../../smooth-scroll";
import {Github, Linkedin, Mail} from "lucide-react";

const Hero = () => {
  return (
    <section className=" mt-28">
      <div className="text-center space-y-4">
        <h2 className="text-md font-mono uppercase tracking-widest bg-clip-text">Full Stack Developer</h2>
        <h1 className="text-4xl font-bold">Hello, I&apos;m Dipongkor Roy</h1>
        <p className="max-w-xl mx-auto text-muted-foreground">
          I build modern web applications with React, Node.js, and TypeScript. Passionate about creating efficient, scalable, and user-friendly solutions.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <Button
            onClick={() => smoothScrollTo("projects")}
            className="bg-chart-3 hover:bg-primary transition-colors duration-500 ease-in-out cursor-pointer hover:scale-95"
          >
            View My Work
          </Button>
          <span onClick={() => smoothScrollTo("about")} className="bg-none border-none cursor-pointer my-auto">
            About Me
          </span>
        </div>

        <div className="flex gap-6 justify-center mt-8">
          <a href="https://github.com/dipongkorroy000" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-primary" />
          </a>
          <a href="https://linkedin.com/in/dipongkor" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-primary" />
          </a>
          <a href="mailto:dipongkorroy000@gmail.com" target="_blank">
            <Mail className="w-6 h-6 hover:text-primary" />
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <span className="text-2xl">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
