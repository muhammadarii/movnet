import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import movieReducer from "./features/movieSlice";
import popularReducer from "./features/popularMovieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    popularMovie: popularReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
