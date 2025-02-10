import Infobar from "@/components/Info";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        {/* Content*/}
        <div className="flex-1 flex-col px-6 border-x">
          <Navbar />
          Landingpage
        </div>

        <Infobar />
      </div>
    </>
  );
};

export default HomePage;
