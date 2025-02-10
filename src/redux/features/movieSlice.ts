import { MoviesState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const API_KEY = "asda";

const initialState: MoviesState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  });
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
