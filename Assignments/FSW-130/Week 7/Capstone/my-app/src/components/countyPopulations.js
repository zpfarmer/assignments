import React from "react"
import Home from "./Home"

//import "./../style/lists.css"

class County extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countiesArray: this.props.countyArray
        }
    }
    render() {
        return <div>
            <Home />
                <h1 className="mainHeading">Counties:</h1>
                {this.state.countiesArray.map((county, num) => {
                   return(
                    <div className="states" key={num}> 
                    <h1>Rank: {county.rank}</h1>
                    <h1>State: {county.county}</h1>
                    <h1>Population: {county.population}</h1>
                    </div>)})
                }
                    {console.log(this.state.countyArray)}
                </div>
    }  
}

export default County