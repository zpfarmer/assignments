import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider, connect } from "react-redux"


class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"))