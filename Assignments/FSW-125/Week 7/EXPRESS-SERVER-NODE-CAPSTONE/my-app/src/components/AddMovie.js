import React, { useState } from 'react'
//const uuid = require(uuid/v4)

export default function AddMovie(props) {
    const initInputs = { Title: props.Title || "", Genre: props.Genre || "", PositiveReview: props.PositiveReview || "", YearReleased: props.YearReleased || "",}
    const [ inputs, setInputs ] = useState(initInputs)
    
    function handleChange(e) {
        const {title, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [title]: value}))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="Title" 
                value={inputs.Title} 
                onChange={handleChange} 
                placeholder="Title">
            </input>
            
            <input 
                type="text" 
                name="Genre" 
                value={inputs.Genre} 
                onChange={handleChange} 
                placeholder="Genre">
            </input>
            
            <input 
                type="text"
                name="PositiveReview" 
                value={inputs.PositiveReview} 
                onChange={handleChange} 
                placeholder="Positive Review?">
            </input>
            
            <input 
                type="text" 
                name="YearReleased" 
                value={inputs.YearReleased} 
                onChange={handleChange} 
                placeholder="Year Released">
            </input>
            <button>{ props.btnText }</button>
        </form>
    )
}