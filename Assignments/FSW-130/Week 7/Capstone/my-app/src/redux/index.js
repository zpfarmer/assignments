import stateReducer from "./states";
import countyReducer from "./counties";
import cityReducer from "./cities";

const redux = require("redux")
const { combineReducers, createStore} = redux

const rootReducer = combineReducers({
    states: stateReducer,
    counties: countyReducer,
    cities: cityReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store