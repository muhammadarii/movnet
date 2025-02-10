export interface Movie {
  backdrop_path: string;
  title: string;
}

export interface MoviesState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
