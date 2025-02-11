import PopularMovie from "@/components/ui/popularMovie";
import React from "react";
import { WrappersPopularProps } from "@/types";

const WrappersPopuler: React.FC<WrappersPopularProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="font-semibold text-[30px]">Popular on Honey Movies</h1>
      <div className="flex flex-row overflow-x-scroll scrollbar-hide">
        <PopularMovie />
      </div>
    </div>
  );
};

export default WrappersPopuler;
