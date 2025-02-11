"use client";
import { fetchPopularMovies } from "@/redux/features/popularMovieSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useEffect } from "react";

const PopularMovie = () => {
  const dispatch = useAppDispatch();
  const { popularMovie, status, error } = useAppSelector(
    (state) => state.popularMovie
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPopularMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-5">
      <div className="flex flex-row gap-6">
        {popularMovie.map((movie) => (
          <div
            key={movie.id}
            className="relative w-[237px] h-[298px] bg-slate-500 rounded-[20px] flex flex-col items-center justify-center overflow-hidden"
          >
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/images/placeholder.jpg"
              }
              alt={movie.poster_path ? movie.title : "No Image Available"}
              fill
              priority
              className="object-cover w-full h-full rounded-[20px]"
            />
            <h1 className="absolute top-3 left-2 font-semibold text-lg text-white">
              {movie.title}
            </h1>
            <button className="absolute bottom-3 right-2 bg-[#F8B319] rounded-[12px] px-4 py-2 text-sm">
              More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
