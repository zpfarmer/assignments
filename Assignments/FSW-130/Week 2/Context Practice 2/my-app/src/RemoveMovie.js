export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_MOVIE = "TOGGLE_TODO";
export const ADD_MOVIE = "ADD_TODO";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const MovieReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_MOVIE: {
      const movies = state.movies.map(movie =>
        movie.id === payload.id ? { ...movie, ...payload } : movie
      );
      return { ...state, movies };
    }
    case ADD_MOVIE: {
      const movies = [...state.movies, payload];
      return { ...state, movies };
    }
    default:
      return state;
  }
};

export default MovieReducer;