function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}

function removeShow(show) {
    return {
        type: "REMOVE_SHOW",
        payload: show
    }
}

function showReducer(show = [], action) {
    switch(action.type) {
        case "ADD_SHOW":
            return [...state.show, action.payload]
            
        case "REMOVE_SHOW":{
            const updatedArr = state.show.filter(show => show.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr          
        }
        default: 
            return show
    }
}

module.exports.showReducer = showReducer
module.exports = {addShow, removeShow }