import React, { useReducer, createContext } from "react";
import MovieReducer, { VisibilityFilters } from "./RemoveMovie";

const MovieContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  movies: []
};

function MoviesContextProvider(props) {
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const value = { state, dispatch };

  return (
    <MovieContext.Provider value={value}>{props.children}</MovieContext.Provider>
  );
}
export { MovieContext, MoviesContextProvider };