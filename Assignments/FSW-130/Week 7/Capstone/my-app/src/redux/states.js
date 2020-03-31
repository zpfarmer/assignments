import stateList from "../dataArrays/stateList"

export function addState(state) {
    return {
        type: "ADD_STATE",
        payload: state
    }
}

export function deleteState(state) {
    return {
        type: "DELETE_STATE",
        payload: state
    }
}

function stateReducer(states = stateList, action) {
    switch (action.type) {
        case "ADD_STATE":
            return [...states, action.payload];
        case "DELETE_STATE": {
            const updatedArr = states.filter (
                state => state.toLowerCase() !== action.payload.toLowerCase()
                );
                return updatedArr;
        }
        default: 
            return states
    }
}

export default stateReducer