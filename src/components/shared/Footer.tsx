import {Github, Linkedin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between">
      <div className="border-t flex-1 max-md:border-none"></div>

      <div className="py-20 mx-auto text-center max-w-7xl flex-1">
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

      <div className="border-t flex-1 max-md:border-none"></div>
    </footer>
  );
}
