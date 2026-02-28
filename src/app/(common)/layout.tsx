import Footer from "@/src/components/shared/Footer";
import Navbar from "@/src/components/shared/Navbar";
import React from "react";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-dot-pattern">
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
