import {Github, Linkedin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t py-10 bg-blur-2xl">
      {/* Watermark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[10rem] font-extrabold text-gray-400 dark:text-gray-600 select-none">D</span>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Connect With Me</h2>

        <div className="flex items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
          {/* Email */}
          <a href="mailto:dipongkorroy000@gmail.com" target="_blank" className="transition duration-300 hover:text-chart-3 hover:underline">
            dipongkorroy000@gmail.com
          </a>

          {/* GitHub */}
          <a
            target="_blank"
            href="https://github.com/dipongkorroy000"
            className="transition duration-300 hover:text-black dark:hover:text-chart-3 transform hover:scale-110"
          >
            <Github size={28} />
          </a>

          {/* LinkedIn */}
          <a target="_blank" href="https://linkedin.com/in/dipongkor" className="transition duration-300 hover:text-chart-3 transform hover:scale-110">
            <Linkedin size={28} />
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Dipongkor Roy. All rights reserved.</p>
      </div>
    </footer>
  );
}
