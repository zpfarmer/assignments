import React from 'react'
let data = require("./data.json")

//console.log(data)

let hero = React.createClass({
    render: function() {
    return (
        <div className="App">
            <h1>{this.props.name}</h1>
        </div>
    )
}})

export default hero