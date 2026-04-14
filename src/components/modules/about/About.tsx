import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl py-20 px-5 text-foreground max-md:py-10">
      <h2 className="text-center text-2xl mb-2 font-bold max-md:text-xl max-md:text-start">1. About Me</h2>
      <p className="text-center max-md:text-start text-sm text-muted-foreground mb-8 max-w-2xl mx-auto max-md:mx-0">
        National University, Bangladesh · Full-stack engineering · Self-directed upskilling
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden border">
          <Image
            src="https://i.ibb.co.com/dy9vNVx/image-1.png"
            alt="Dipongkor Roy"
            width={160}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="hacker-panel flex-1 max-w-4xl space-y-3 rounded-lg p-5 text-sm">
          <p className="text-justify leading-relaxed tracking-wide">
            I am a Full Stack Web Developer with a strong self-learning background and a disciplined engineering mindset. Since early 2025, I have focused on
            building production-ready web applications with practical, project-based experience.
          </p>

          <p className="text-justify leading-relaxed tracking-wide">
            My primary stack includes React, Next.js, Node.js, and TypeScript, supported by modern tools for API development, database design, authentication, and
            deployment workflows.
          </p>

          <p className="text-justify leading-relaxed tracking-wide">
            I focus on clean architecture, performance, and maintainability to deliver user-friendly applications that scale reliably in real-world environments.
          </p>

          <p className="text-justify leading-relaxed tracking-wide">
            In parallel, I regularly practice data structures and algorithms in C, C++, and Python to strengthen problem-solving depth and software engineering
            fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
