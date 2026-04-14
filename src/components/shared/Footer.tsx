import {Github, Linkedin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex-1 py-20 text-center max-md:py-14">
      <h2 className="mb-6 text-2xl font-semibold text-foreground max-md:text-xl">Connect With Me</h2>

      <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground max-md:gap-5 max-md:text-sm">
        <a
          href="mailto:dipongkorroy000@gmail.com"
          target="_blank"
          className="transition duration-300 hover:text-primary hover:underline"
        >
          dipongkorroy000@gmail.com
        </a>

        <a
          target="_blank"
          href="https://github.com/dipongkorroy000"
          className="transform transition duration-300 hover:scale-110 hover:text-chart-3"
        >
          <Github size={28} />
        </a>

        <a
          target="_blank"
          href="https://linkedin.com/in/dipongkor"
          className="transform transition duration-300 hover:scale-110 hover:text-chart-3"
        >
          <Linkedin size={28} />
        </a>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">© {new Date().getFullYear()} Dipongkor Roy</p>

    </footer>
  );
}
