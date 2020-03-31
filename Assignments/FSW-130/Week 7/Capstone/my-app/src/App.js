import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cities from "./components/cityPopulations";
import States from "./components/statePopulations";
import Counties from "./components/countyPopulations";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

function App(props) {
  return (
    <main
      style={{
        display: "grid",
        height: "95vh",
        gridTemplateRows: "auto 15vh",
        gridGap: "5vh",
        overflowY: "auto"
      }}>
        {console.log(props)}

        <Switch>
          <Route exact path="/" exact render={() => <Home />} />
          <Route
            exact path = "/states"
            exact render = {() => <States stateArray={props.states} />}
          />
          <Route
            exact path = "/counties"
            exact render = {() => <Counties countyArray={props.counties} />}
          />
          <Route
            exact path = "/cities"
            exact render = {() => <Cities cityArray={props.cities} />}
          />
        </Switch>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    states: state.states,
    counties: state.counties,
    cities: state.cities
  }
}
export default connect(mapStateToProps)(App)