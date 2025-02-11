"use client";
import Infobar from "@/components/Infobar";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/ui/hero";
import WrappersPopuler from "@/wrappers/wrappersPopuler";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-screen container mx-auto">
      <Sidebar />

      {/* Content */}
      <div className="flex flex-col flex-1 px-6">
        <Navbar />
        <div className="flex flex-col w-screen md:w-full justify-center mt-6">
          <Hero />
          <WrappersPopuler className="w-[900px] scrollbar-hide" />
        </div>
      </div>

      <Infobar />
    </div>
  );
};

export default HomePage;
