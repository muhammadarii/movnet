"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import vector1 from "@/assets/images/Vector 196.png";

interface Movie {
  backdrop_path: string;
  title: string;
}

const Hero: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDJhMWQ5MDhhZDIyMDVmMGJmYjQzNTdiODVkZDI2MyIsIm5iZiI6MTczOTE5MTgwMi45MjYsInN1YiI6IjY3YTlmNWZhMjRiYmZjNjUyMTkzNzAxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGi5QvPOkNMds6krFIhOzJclF1XR-7SjhZzv6O4AVRo",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Failed to fetch movies");

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      {movies.length > 0 && (
        <div className="relative w-full h-[250px] md:h-[500px] bg-gray-400 rounded-[20px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movies[1].backdrop_path}`}
            alt={movies[0].title}
            priority
            fill
            className="object-cover rounded-[20px]"
          />
          <h1 className="absolute text-[15px] md:text-[25px] font-extrabold text-white top-[20px] md:top-[40px] md:left-[20px] left-[20px]">
            {movies[0].title}
          </h1>
          <div className="absolute bottom-[10px] md:bottom-[21px] left-[10px] md:left-[20px] flex items-center gap-2">
            <button className="relative p-2 text-white flex items-center">
              <div className="absolute inset-0 bg-white opacity-50 rounded-[5px]" />
              <Image
                src={vector1}
                alt="Play Icon"
                width={17}
                height={17}
                className="relative"
              />
            </button>
          </div>
          <button className="absolute bottom-[10px] right-[10px] md:bottom-[21px] md:right-[20px] bg-[#F8B319] w-[100px] h-[40px] md:w-[160px] md:h-[56px] rounded-[15px] text-black flex justify-center items-center">
            <p className="md:text-[18px] font-bold">Watch Now</p>
          </button>
        </div>
      )}
    </>
  );
};

export default Hero;
