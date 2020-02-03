import React from 'react'



function Details({ id, details, authorName, time }) {
    return (
        <div>
            <p>
                {id}
                {details}
                {authorName}
                {time}
            </p>
        </div>
    )
}

export default Details;