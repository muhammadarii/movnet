export interface Movie {
  backdrop_path: string;
  title: string;
}

export interface PopularMovies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface MoviesState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface PopularMoviesState {
  popularMovie: PopularMovies[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
