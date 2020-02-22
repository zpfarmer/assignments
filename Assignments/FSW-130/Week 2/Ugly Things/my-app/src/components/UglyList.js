  
import React, { useContext } from "react";
import Ugly from "./Ugly";
import { VisibilityFilters } from "./../reducers/uglies";
import { UglyContext } from "./../contexts/ugly";

const UglyList = () => {
  const { state } = useContext(UglyContext);
  const uglies = applyFilter(state);
  return (
    <ul>
      {uglies.map(ugly => (
        <Ugly key={ugly.id} {...ugly} />
      ))}
    </ul>
  );
};

const applyFilter = state => {
  const { filter, uglies } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return uglies;
    case VisibilityFilters.SHOW_COMPLETED:
      return uglies.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return uglies.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default UglyList;