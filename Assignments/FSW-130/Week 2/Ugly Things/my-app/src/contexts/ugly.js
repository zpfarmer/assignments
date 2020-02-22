import React, { useReducer, createContext } from "react";
import UglyReducer, { VisibilityFilters } from "./../reducers/uglies";

const UglyContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  uglies: []
};

function UglyContextProvider(props) {
  const [state, dispatch] = useReducer(UglyReducer, initialState);
  const value = { state, dispatch };

  return (
    <UglyContext.Provider value={value}>{props.children}</UglyContext.Provider>
  );
}
export { UglyContext, UglyContextProvider };