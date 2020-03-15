const redux = require("redux")
const {combineReducers, createStore} = redux

//import reducers
const { movieReducer } = require("./movies")
const { showReducer } = require ("./shows")


//combine reducers into single state
const rootReducer = combineReducers({
    movie: movieReducer,
    show: showReducer
})

//create store

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = { store }