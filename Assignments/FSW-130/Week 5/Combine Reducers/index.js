
const { store } = require("./redux/index")
const { addMovie } = require("./redux/movies")
const { removeMovie } = require("./redux/movies")
const { addShow } = require("./redux/shows")
const { removeShow } = require("./redux/shows")

store.dispatch(addMovie("I am Legend"))
//store.dispatch(removeMovie("I am Legend"))