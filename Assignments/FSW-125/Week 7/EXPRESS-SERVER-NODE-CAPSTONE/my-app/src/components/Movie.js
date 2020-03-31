import React, { useState } from 'react'
import AddMovie from './AddMovie'
//left off here! have to change const for keys used with a movie instead of bounty
export default function Movie(props){
    const { Title, Genre, PositiveReview, YearReleased, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="movie">
            { !editToggle ?
            <>
            <h1>Title: { Title }</h1>
            <p>Genre: { Genre }</p>
            <p>Positive Review?:{ PositiveReview }</p>
            <p>Year Released: { YearReleased }</p>
            <button 
                className="delete-btn"
                onClick={() => props.deleteMovie(_id)}>
                    Delete
            </button>
            <button 
                className="edit-btn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit</button>
            </>
        :
            <>
                <AddMovie 
                    Title={Title}
                    Genre={Genre}
                    PositiveReview={PositiveReview}
                    YearReleased={YearReleased}
                    _id={_id}
                    btnText="Edit"
                    submit={props.editMovie}
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