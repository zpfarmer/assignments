import React from "react"
import Home from "./Home"

//import "./../style/lists.css"

class City extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            citiesArray: this.props.cityArray
        }
    }
    render() {
        return <div>
            <Home />
                <h1 className="mainHeading">Cities:</h1>
                {this.state.citiesArray.map((city, num) => {
                   return(<div className="states" key={num}> 

                    <h1>Rank: {city.rank}</h1>
                    <h1>City: {city.city}</h1>
                    <h1>Population: {city.population}</h1>
                    </div>)})
                }
                    {console.log(this.state.citiesArray)}
                </div>
    }  
}

export default City