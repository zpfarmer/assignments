import React, { useContext, useState } from "react";
import { ADD_UGLY } from "./../reducers/uglies";
import { UglyContext } from "./../contexts/ugly";
import Button from "./Button";

const AddUgly = () => {
  const { dispatch } = useContext(UglyContext);
  const [nextUglyId, setIndex] = useState(1);
  const input = useFromInput("");
  const { resetValue, inputProp, inputProp2, ...inputProp3 } = input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch({
            type: ADD_UGLY,
            payload: {
              id: nextUglyId,
              completed: false,
              text: input.value
            }
          });
          setIndex(nextUglyId + 1);
          resetValue();
        }}
      >
        <div className="formInput">
          <input placeholder="Title"{...inputProp} />
          <input placeholder="img URL"{...inputProp2} />
          <input placeholder="Description" {...inputProp3} />             
        </div>  
        <hr />     
        <Button className="button" type="submit">Add Ugly</Button> 
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

export default AddUgly;