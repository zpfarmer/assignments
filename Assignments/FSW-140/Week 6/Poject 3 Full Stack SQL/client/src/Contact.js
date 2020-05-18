import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { projects: [] }

        fetch('http://localhost:3000/post')
        .then(response => response.json())
        .then(projects => (this.setState({projects})))
    }
    render() {
        return (<div>
            Hello World
            <ul>
              {this.state.results.map(results => <li>
                <h2>{results.title}</h2>
                <p>{results.description}</p>
              </li>)}
            </ul>
            </div>)
        }
}

export default Contact
