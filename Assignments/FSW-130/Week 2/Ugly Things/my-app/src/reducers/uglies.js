export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_UGLY = "TOGGLE_UGLY";
export const ADD_UGLY = "ADD_UGLY";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const UglyReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_UGLY: {
      const uglies = state.uglies.map(ugly =>
        ugly.id === payload.id ? { ...ugly, ...payload } : ugly
      );
      return { ...state, uglies };
    }
    case ADD_UGLY: {
      const uglies = [...state.uglies, payload];
      return { ...state, uglies };
    }
    default:
      return state;
  }
};

export default UglyReducer;