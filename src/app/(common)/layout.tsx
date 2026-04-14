import Footer from "@/src/components/shared/Footer";
import Navbar from "@/src/components/shared/Navbar";
import ScrollBackgroundController from "@/src/components/ScrollBackgroundController";
import React from "react";

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-dot-pattern">
      <ScrollBackgroundController />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
