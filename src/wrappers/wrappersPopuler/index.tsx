import PopularMovie from "@/components/ui/popularMovie";
import React from "react";

const WrappersPopuler = () => {
  return (
    <div className="flex flex-col w-[900px] mt-4">
      <h1 className="font-semibold text-[30px]">Popular on Honey Movies</h1>
      <div className="flex flex-row overflow-x-scroll scrollbar-hide">
        <PopularMovie />
      </div>
    </div>
  );
};

export default WrappersPopuler;
