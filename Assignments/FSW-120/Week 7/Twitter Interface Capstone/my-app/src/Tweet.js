import React, { Component } from 'react'

class Tweet extends Component {
    constructr(props) {
        super(props)
        this.state = {
            tweet: "",
            author: "",
            picture: "",
            details: ""
        }
    }
}