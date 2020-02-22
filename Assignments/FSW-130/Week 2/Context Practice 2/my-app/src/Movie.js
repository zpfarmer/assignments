import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TOGGLE_MOVIE } from "./RemoveMovie";
import { MovieContext } from "./listContext";

const Movie = ({ id, completed, text }) => {
  const { dispatch } = useContext(MovieContext);
  return (
    <li
      onClick={() =>
        dispatch({
          type: TOGGLE_MOVIE,
          payload: { id, completed: !completed }
        })
      }
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

Movie.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Movie;