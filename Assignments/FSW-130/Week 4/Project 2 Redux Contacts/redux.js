const redux = require("redux")

// functions to create and delete contacts
function addName(name) {
    return {
        type: "ADD_NAME",
        payload: name
    }
}

function addNumber(number) {
    return {
        type: "ADD_NUMBER",
        payload: number
    }
}

function deleteName(name) {
    return {
        type: "DELETE_NAME",
        payload: name
    }    
}

function deleteNumber(number) {
    return {
        type: "DELETE_NUMBER",
        payload: number
    }
}


//my initial state to show what would show up if I do not provide any data
const initialState = { 
    name: "",
    number: "",
}

//reducer function to create my actions
function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NAME": 
        return {
            ...state,
            name: [...state.name, action.payload]
        }
        
        case "ADD_NUMBER": 
        return {
            ...state,
            number: [...state.number, action.payload]
        }
        
        case "DELETE_NAME":
            const updatedName = state.name.filter(name => name.toLowerCase() !==
            action.payload.toLowerCase())
            return {
                ...state,
                name: updatedName
            }
        
        case "DELETE_NUMBER":
            const updatedNumber = state.name.filter(number => number !== action.payload)
            return {
                ...state,
                number: updatedNumber
            }
            default: 
            return state
    }
}

//creating my redux store
const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addName("John Smith"))
store.dispatch(addNumber("555-555-5555"))

store.dispatch(addName("Matt Adams"))
store.dispatch(addNumber("555-555-5555"))

store.dispatch(addName("Alex Williams"))
store.dispatch(addNumber("555-555-5555"))

store.dispatch(deleteName("Alex Williams"))
store.dispatch(deleteNumber("555-555-5555"))