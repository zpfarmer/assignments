const redux = require("redux")

export function addContact() {
    return {
        type: "ADD_CONTACT"
    }
}

export function deleteContact() {
    return {
        type: "DELETE_CONTACT"
    }
}

const contact = {
    name: "",
    number: ""
}

function reducer(state = contact, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return [...state.contact, action.payload]
        case "DELETE_CONTACT":
            const updatedArr = state.contact.filter(contact => contact.toLowerCase() !==
            action.payload.toLowerCase())
            return updatedArr
        default: 
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
