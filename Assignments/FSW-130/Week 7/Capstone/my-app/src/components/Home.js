import React from "react"
import { Link } from "react-router-dom"
//import "./..style/lists.css"

function Home() {
    return (
        <div className="home">
            <Link to="/states">Top 10 States by Population</Link>
            <Link to="/counties">Top 10 Counties by Population</Link>
            <Link to="/cities">Top 10 Cities by Population</Link>
            <h3>Welcome! Please Select a list to view!</h3>
        </div>
    )
}

export default Home