import React, { useContext } from "react";
import Button from "./Button";

import { CHANGE_FILTER, VisibilityFilters } from "./../reducers/uglies";
import { UglyContext } from "./../contexts/ugly";

const BUTTONS_FILTER = [
  {
    id: 1,
    caption: "All",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ALL
  },
  {
    id: 2,
    caption: "Active",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ACTIVE
  },
  {
    id: 3,
    caption: "Deleted",
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_COMPLETED
  }
];

const Footer = () => {
  const { state, dispatch } = useContext(UglyContext);
  return (
    <footer>
      {BUTTONS_FILTER.map(({ id, caption, type, filter }) => (
        <Button
          disabled={state.filter === filter}
          onClick={() => dispatch({ type, payload: filter })}
          key={id}
        >
          {caption}
        </Button>
      ))}
    </footer>
  );
};

export default Footer;