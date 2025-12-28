// src/components/AboutMe.tsx
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 max-md:py-10 max-w-5xl mx-auto text-foreground px-8 xl:px-14 max-md:px-5">
      <h1 className="text-center text-2xl mb-5 font-bold max-md:text-xl max-md:text-start">1. About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-40 h-40 rounded-full overflow-hidden border">
          <Image
            // src="https://i.ibb.co/fGLjw2WS/mypic.jpg" // Replace with your actual image path
            src="https://i.ibb.co.com/dy9vNVx/image-1.png" // Replace with your actual image path
            alt="Profile"
            width={160}
            height={200}
            className="object-cover"
          />
        </div>

        {/* Biography */}
        <div className="flex-1 space-y-4 max-w-4xl rounded-lg bg-white/10 max-md:text-sm p-5">
          {/* <h3 className="text-2xl font-semibold text-center text-blue-600">Who I Am</h3> */}

          <p className="text-justify leading-relaxed tracking-wide">
            I&apos;m a Chemistry student at National University, Bangladesh, but my true passion lies in technology and web development. I began my journey on
            January 1st, 2025, driven entirely by personal interest and curiosity.
          </p>

          <p className="text-justify leading-relaxed tracking-wide">
            I have learned everything through self-study and consistent hard work. Without relying on formal courses or institutions, I&apos;ve dedicated myself
            to mastering Full Stack Development — including React, Node.js, TypeScript, and other modern tools.
          </p>

          <p className="text-justify leading-relaxed tracking-wide">
            I&apos;m deeply interested in the IT sector and committed to building efficient, scalable, and user-friendly web applications. I enjoy solving
            real-world problems through code and continuously improving my skills.
          </p>

          <p className="text-justify leading-relaxed tracking-wide">
            Currently, I&apos;m learning Data Structures and Algorithms using C/C++ and Python to strengthen my problem-solving abilities and prepare myself for
            more advanced challenges in software development.
          </p>
        </div>
      </div>
    </section>
  );
}
