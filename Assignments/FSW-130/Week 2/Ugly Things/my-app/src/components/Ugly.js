  
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TOGGLE_UGLY } from "./../reducers/uglies";
import { UglyContext } from "./../contexts/ugly";

const Ugly = ({ id, completed, text }) => {
  const { dispatch } = useContext(UglyContext);
  return (
    <li
      onClick={() =>
        dispatch({
          type: TOGGLE_UGLY,
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

Ugly.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Ugly;