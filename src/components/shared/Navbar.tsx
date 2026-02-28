"use client";

import Image from "next/image";
import Link from "next/link";
import smoothScrollTo from "../smooth-scroll";
import {Button} from "../ui/button";
import {useEffect, useState} from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="relative mx-auto max-w-5xl rounded-2xl py-2 backdrop-blur-sm bg-clip-border shadow-sm md:px-5 max-md:px-3">
        {/* Watermark-style background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none mt-2">
          <span className="text-4xl max-md:-ml-32 max-md:text-xl font-extrabold">PORTFOLIO</span>
        </div>

        {/* Navigation */}
        <nav className="relative flex items-center justify-between">
          <Link href="/">
            <Image src="https://i.ibb.co.com/qFF62B5T/D3.png" height={50} width={50} alt="Logo" className="hover:scale-105 transition duration-300 max-md:h-10 max-md:w-10" />
          </Link>

          <div className="flex gap-6 max-md:gap-3 text-blue-600 dark:text-blue-400 font-medium text-sm">
            <Button onClick={() => smoothScrollTo("projects")} className="bg-primary hover:bg-chart-3 transition-all duration-500 ease-in-out hover:scale-95 max-md:px-2 max-md:py-0.5 cursor-pointer">
              Projects
            </Button>
            <Button onClick={() => smoothScrollTo("about")} className="bg-primary hover:bg-chart-3 transition-all duration-500 ease-in-out hover:scale-95 max-md:px-2 max-md:py-0.5 cursor-pointer">
              About
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
