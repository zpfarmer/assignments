import React, { useState } from 'react'
//const uuid = require(uuid/v4)

export default function AddBounty(props) {
    const initInputs = { Name: props.Name || "", Living: props.Living || "", BountyAmount: props.BountyAmount || "", Type: props.type || "",}
    const [ inputs, setInputs ] = useState(initInputs)
    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
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
                name="Name" 
                value={inputs.Name} 
                onChange={handleChange} 
                placeholder="Name">
            </input>
            
            <input 
                type="text" 
                name="Living" 
                value={inputs.Living} 
                onChange={handleChange} 
                placeholder="Is Alive?">
            </input>
            
            <input 
                type="text" 
                name="BountyAmount" 
                value={inputs.BountyAmount} 
                onChange={handleChange} 
                placeholder="Current Bounty">
            </input>
            
            <input 
                type="text" 
                name="Type" 
                value={inputs.Type} 
                onChange={handleChange} 
                placeholder="Type">
            </input>
            <button>{ props.btnText }</button>
        </form>
    )
}