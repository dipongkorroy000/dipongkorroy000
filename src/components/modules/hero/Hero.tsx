"use client";

import {Button} from "../../ui/button";
import smoothScrollTo from "../../smooth-scroll";
import {ArrowDownToLine, Github, Linkedin, Mail} from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 max-md:pt-20">
      <div className="text-center space-y-4 max-md:px-5">
        <h2 className="text-md font-mono uppercase tracking-widest bg-clip-text max-md:text-sm">Full Stack Developer</h2>
        <h1 className="text-4xl max-md:text-xl font-bold">
          Hello, I&apos;m <span className="text-chart-3">Dipongkor Roy</span>
        </h1>
        <p className="max-w-xl max-md:text-sm mx-auto text-muted-foreground">
          I build modern web applications with React, Node.js, and TypeScript. Passionate about creating efficient, scalable, and user-friendly solutions.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <Button
            onClick={() => smoothScrollTo("contact")}
            className="bg-chart-3 hover:bg-chart-4 text-white transition-colors duration-500 ease-in-out cursor-pointer hover:scale-95 max-md:px-2 max-md:text-sm"
          >
            Contact Me
          </Button>
          <a
            href="https://drive.google.com/uc?export=download&id=1AFy7jyAEHWQ_eprQefOUnknTAskQKDr0"
            className="flex gap-1 items-center bg-none border-none cursor-pointer my-auto max-md:text-sm"
          >
            <ArrowDownToLine size={20} />
            Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-8">
          <a href="https://github.com/dipongkorroy000" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-primary max-md:h-5" />
          </a>
          <a href="https://linkedin.com/in/dipongkor" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-primary max-md:h-5" />
          </a>
          <a href="mailto:dipongkorroy000@gmail.com" target="_blank">
            <Mail className="w-6 h-6 hover:text-primary max-md:h-5" />
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
