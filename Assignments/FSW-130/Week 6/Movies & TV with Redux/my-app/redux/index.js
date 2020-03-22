const redux = require("redux")
const {combineReducers, createStore} = redux
import movieReducer from "./movies"
import showReducer from "./shows"

const rootReducer = combineReducers({
    movies: movieReducer,
    shows: showReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store