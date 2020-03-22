import React from "react"
import {connect} from "react-redux"
import movieReducer from "./redux/movies"
import showReducer from "./redux/shows"

function App(props) {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={movieReducer} />
                <Route exact path="/shows" component={showReducer} />
            </Switch>
        </div>
    )
}

export default App