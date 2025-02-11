import { MoviesState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MoviesState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
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
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload.results;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch movies";
    });
  },
});

export default movieSlice.reducer;
