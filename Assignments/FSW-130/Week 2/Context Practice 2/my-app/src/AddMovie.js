import React, { useContext, useState } from "react";
import { ADD_MOVIE } from "./RemoveMovie";
import { MovieContext } from "./listContext";
import Button from "./Button";

const AddMovie = () => {
  const { dispatch } = useContext(MovieContext);
  const [nextMovieId, setIndex] = useState(1);
  const input = useFromInput("");
  const { resetValue, ...inputProp } = input;
  return (
    <div classname="addMovie">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch({
            type: ADD_MOVIE,
            payload: {
              id: nextMovieId,
              completed: false,
              text: input.value
            }
          });
          setIndex(nextMovieId + 1);
          resetValue();
        }}
      >
        <input placeholder="Please enter a movie"{...inputProp} /><hr />
        <Button type="submit">Add Movie</Button>
      </form>
    </div>
  );
};

function useFromInput(initValue = "") {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  const resetValue = newValue => setValue(newValue || initValue);
  return { value, onChange, resetValue };
}

export default AddMovie;