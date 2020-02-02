import React, { Component } from 'react'
import moment from 'moment'

import Paper from '@material-ui/core/Paper'


class SingleTweet extends Component {

    showTweet = (props) => {
        if (props.post) return null;
        
        const {author, tweet, date, picture} = this.props.post;

        return (
            <React.Fragment>
                 
                <Paper className="singleTweet">
                    <p><b>Author:</b>{author}</p>
                    <p><b>Tweet: </b>{tweet}</p>
                    <p><b>{picture}</b></p>
                    <h5>Tweeted at: {moment(date).format('DD MM YYYY')}</h5>
                </Paper>
            </React.Fragment>
        )
    }
    render() {
        return (
            <div>
                {this.showTweet(this.props)}
            </div>
        );
    }
}

export default SingleTweet