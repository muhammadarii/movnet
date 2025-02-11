import PopularMovie from "@/components/ui/popularMovie";
import React from "react";

const projectPage = () => {
  return (
    <div>
      <h1>hallo</h1>
      <div className="flex flex-row w-screen overflow-x-scroll">
        <PopularMovie />
      </div>
    </div>
  );
};

export default projectPage;
