import React from "react";
import SearchBox from "../ui/searchBox";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="top-0 right-0 w-full h-16 flex justify-center items-center z-50">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl gap-4 md:gap-10 lg:gap-[100px]">
        {/* Navigasi Menu */}
        <div className="flex-row gap-6 md:gap-10 hidden md:flex">
          <Link
            href="/"
            className="text-[10px] md:text-[14px] hover:text-[#F8B319] font-extrabold"
          >
            Movies
          </Link>
          <Link
            href="/"
            className="text-[10px] md:text-[14px] hover:text-[#F8B319] font-extrabold"
          >
            TV Shows
          </Link>
          <Link
            href="/"
            className="text-[10px] md:text-[14px] hover:text-[#F8B319] font-extrabold"
          >
            Anime
          </Link>
        </div>

        {/* Kotak Pencarian */}
        <SearchBox />
      </div>
    </nav>
  );
};

export default Navbar;
