//   details/FullTweet.js
import React from 'react'


//use this id to filter through your array of tweets somewhere and pull out those properties to define the component details here
function Details({ id, details, authorName, time }) {
    return (
        <div>
            <p>
                {details}
            </p>
        </div>
    )
}

export default Details;