//   details/index.js
import React from 'react'

import FullTweet from './FullTweet'

function Details({ match: { params: { id, details, authorName, time } } }) {
    return (
        <div>
            <FullTweet id={id} details={details} authorName={authorName} time={time}/>
        </div>
    )
}

export default Details;
