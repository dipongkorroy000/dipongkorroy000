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

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <Image
          src="https://i.ibb.co.com/qFF62B5T/D3.png" // put your logo in public/assets
          alt="Portfolio Logo"
          width={120}
          height={120}
          className="animate-blink"
          priority
        />
      </div>
    );
  }

  return <>{children}</>;
}
