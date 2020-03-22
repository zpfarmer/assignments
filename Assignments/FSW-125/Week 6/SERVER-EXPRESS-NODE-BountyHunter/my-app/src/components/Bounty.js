import React, { useState } from 'react'
import AddBounty from './AddBounty'

export default function Bounty(props){
    const { Name, Living, BountyAmount, Type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
            <>
            <h1>Name: { Name }</h1>
            <p>Living: { Living }</p>
            <p>Bounty Amount:{ BountyAmount }</p>
            <p>Type: { Type }</p>
            <button 
                className="delete-btn"
                onClick={() => props.deleteBounty(_id)}>
                    Delete
            </button>
            <button 
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit</button>
            </>
        :
            <>
                <AddBounty 
                    Name={Name}
                    Living={Living}
                    BountyAmount={BountyAmount}
                    Type={Type}
                    _id={_id}
                    btnText="Edit"
                    submit={props.editBounty}
                />
                <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
            </>
            }    
        </div>
    )
}