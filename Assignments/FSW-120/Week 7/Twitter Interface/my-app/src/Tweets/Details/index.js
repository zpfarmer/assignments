//   details/index.js
import React from 'react'

import FullTweet from './FullTweet'

function Details({ match: { params: { id, details } } }) {
    return (
        <div>
            <FullTweet id={id} details={details} />
        </div>
    )
}

export default Details;
