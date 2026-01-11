import {Github, Linkedin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-20 text-center flex-1 max-md:py-14">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 max-md:text-xl">Connect With Me</h2>

      <div className="flex items-center justify-center gap-8 text-gray-600 dark:text-gray-400 max-md:text-sm max-md:gap-5">
        {/* Email */}
        <a href="mailto:dipongkorroy000@gmail.com" target="_blank" className="transition duration-300 hover:text-white hover:underline">
          dipongkorroy000@gmail.com
        </a>

        {/* GitHub */}
        <a
          target="_blank"
          href="https://github.com/dipongkorroy000"
          className="transition duration-300 hover:text-black dark:hover:text-white transform hover:scale-110"
        >
          <Github size={28} />
        </a>

        {/* LinkedIn */}
        <a target="_blank" href="https://linkedin.com/in/dipongkor" className="transition duration-300 hover:text-white transform hover:scale-110">
          <Linkedin size={28} />
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Dipongkor Roy</p>
    </footer>
  );
}
