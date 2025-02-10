import Infobar from "@/components/Infobar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/ui/hero";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        {/* Content*/}
        <div className="flex-1 flex-col px-6 border-x">
          <Navbar />
          <div className="flex justify-center mt-6">
            <Hero />
          </div>
        </div>

        <Infobar />
      </div>
    </>
  );
};

export default HomePage;
