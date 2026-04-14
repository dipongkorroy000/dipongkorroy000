"use client";

import {useEffect, useState} from "react";
import Image from "next/image";

export default function LoadingScreen({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-700 ease-out ${loading ? "opacity-0" : "opacity-100"}`}>{children}</div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ease-out ${loading ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative grid size-28 place-items-center rounded-full border border-border/70 bg-card/70 shadow-lg backdrop-blur-sm">
              <Image src="/brand-d.svg" alt="Dipongkor Roy logo" width={72} height={72} className="drop-shadow-sm" priority />
            </div>
            <div className="absolute -inset-2 rounded-full border-2 border-primary/35 border-t-primary animate-spin" />
          </div>

          <div className="w-56 max-w-[70vw] space-y-2">
            <p className="text-center text-sm font-medium text-muted-foreground">Loading portfolio...</p>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
