  
import React, { useContext } from "react";
import Movie from "./Movie";
import { VisibilityFilters } from "./RemoveMovie";
import { MovieContext } from "./listContext";

const MovieList = () => {
  const { state } = useContext(MovieContext);
  const movies = applyFilter(state);
  return (
    <div>
       <ul className="list">
          {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
          ))}
      </ul>
    </div>
   
  );
};

const applyFilter = state => {
  const { filter, movies } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return movies;
    case VisibilityFilters.SHOW_COMPLETED:
      return movies.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return movies.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default MovieList;