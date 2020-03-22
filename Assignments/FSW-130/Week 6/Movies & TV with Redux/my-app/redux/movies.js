export function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

export function deleteMovie(movie) {
    return{
        type: "DELETE_MOVIE",
        payload: movie
    }
}

function movieReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "DELETE_MOVIE": {
            const updatedArr = movies.filter(movie => movie.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
    }
        default: 
            return movies
    }
}

export default movieReducer