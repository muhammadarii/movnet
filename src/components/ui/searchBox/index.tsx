import React from "react";
import search from "@/assets/images/Search....png";
import filter from "@/assets/images/Filter.png";
import Image from "next/image";

const SearchBox = () => {
  return (
    <div className="flex flex-row w-[250px] h-[40px] bg-[#21242D] rounded-[12px] text-[#F9F9F9] justify-center items-center px-4">
      <Image src={search} alt="search" className="object-contain" />
      <input
        type="text"
        placeholder="Search"
        className="bg-[#21242D] mx-2 focus:outline-none"
      />
      <Image src={filter} alt="filter" className="object-contain" />
    </div>
  );
};

export default SearchBox;
