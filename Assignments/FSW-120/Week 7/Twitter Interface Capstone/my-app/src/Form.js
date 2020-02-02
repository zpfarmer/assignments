import React, { Component } from 'react'
import { render } from 'react-dom';

class Form extends Component {
    authorRef = React.createRef();
    tweetRef = React.createRef();
    dateRef = React.createRef();
    picRef = React.createRef();

    createTweet = (e) => {
        e.preventDefault();

        const tweet = {
            author: this.authorRef.current.value,
            tweet: this.tweetRef.current.value,
        }

        this.props.createTweet(tweet)
    }

    render() {
        return (
            <form onSubmit={this.createPost}>
                <legend>Send Tweet!</legend>
                
                <div>
                    <label>Author:</label>
                    <input type="text" ref={this.authorRef} placeholder="Author" />
                </div>

                <div>
                    <label>Tweet:</label>
                    <input type="text" ref={this.tweetRef} placeholder="What's Up?" />
                </div>

                <button type="Submit">Tweet</button>
            </form>
        )
    }
}

export default Form