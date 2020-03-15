function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

function movieReducer(movie = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...state.movie, action.payload]
            
        case "REMOVE_MOVIE":{
            const updatedArr = state.movie.filter(movie => movie.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr          
        }
        default: 
            return movie
    }
}

module.exports.movieReducer = movieReducer
module.exports = {addMovie, removeMovie}