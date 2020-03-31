import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie.js'
import AddMovie from './components/AddMovie.js'

export default function App(){
    const [movies, setMovies] = useState([])
    
    function getMovies() {
        axios.get("/movies")
        .then(res => setMovies(res.data))
        .catch(err => console.log(err))
    }

    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
        .then(res => {
            setMovies(prevMovies => [...prevMovies, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
            .then(res => {
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }

    function editMovie(movieId, updates) {
        axios.put(`/movies/${movieId}`, updates)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <div className="movie-container">
                <AddMovie
                submit={addMovie}
                btnText="Add Movie"
                />
                { 
                    movies.map(movie => 
                    <Movie 
                    {...movie} 
                    key={movie.Title} 
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}/>) 
                }
            </div>  
        </div>
        
    )
}