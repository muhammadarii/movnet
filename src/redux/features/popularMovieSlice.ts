import { PopularMoviesState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: PopularMoviesState = {
  popularMovie: [],
  status: "idle",
  error: null,
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/3/movie/popular?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY || "",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch movies");
    return await response.json();
  }
);

const popularMovieSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.popularMovie = action.payload.results;
    });
    builder.addCase(fetchPopularMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch movies";
    });
  },
});

export default popularMovieSlice.reducer;
