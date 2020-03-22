import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {addContact, deleteContact} from "./redux.js"

function App(props) {
    const contact = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{contact}</h1>
            <button onClick={() => dispatch(addContact())}>Add</button>
            <button onClick={() => dispatch(deleteContact())}>Remove</button>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         contact: state
//     }
// }

// const mapDispatchToProps = {
//     addContact,
//     deleteContact
// }

//export default connect(state => ({contact: state}), {addContact, deleteContact}(App))
export default App