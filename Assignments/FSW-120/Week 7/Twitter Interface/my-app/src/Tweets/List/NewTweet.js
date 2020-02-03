import React from 'react'
import './newTweet.css'


function NewTweet(){
    return(
        <div className="newTweet">
           <input placeholder="Tweet!"></input>
            <input placeholder="Author"></input> 
            <input type="date" placeholder="Time"></input> 
            <button>Tweet!</button>
        </div>       
    )
}

export default NewTweet