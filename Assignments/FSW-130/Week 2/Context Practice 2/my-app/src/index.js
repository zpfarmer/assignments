import React from 'react';
import ReactDOM from 'react-dom';
import AddMovie from "./AddMovie"
import MovieList from "./MovieList"
//import Footer from "./components/Footer"
import { MoviesContextProvider } from "./listContext"



function App() {
    return (
        <MoviesContextProvider>
            <AddMovie />
            <MovieList />
        </MoviesContextProvider>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)

