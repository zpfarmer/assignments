export function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}

export function deleteShow(show) {
    return{
        type: "DELETE_SHOW",
        payload: show
    }
}

function showReducer(shows = [], action) {
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.payload]
        case "DELETE_SHOW": {
            const updatedArr = shows.filter(show => show.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
    }
        default: 
            return shows
    }
}

export default showReducer