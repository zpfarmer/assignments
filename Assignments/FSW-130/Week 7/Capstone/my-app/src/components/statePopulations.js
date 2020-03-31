import React from "react"
import Home from "./Home"

//import "../styling/population.css"

class State extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            statesArray: this.props.stateArray
        }
    }
    render() {
        return <div>
            <Home />
                <h1 className="mainHeading">States:</h1>
                {this.state.statesArray.map((state, num) => {
                   return(
                    <div className="states" key={num}> 
                    <h1>Rank: {state.rank}</h1>
                    <h1>State: {state.state}</h1>
                    <h1>Population: {state.population}</h1>
                    </div>)})
                }
                    {console.log(this.state.stateArray)}
                </div>
    }  
}

export default State