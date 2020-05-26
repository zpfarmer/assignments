import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import AddTodo from "./components/addTodo";
import Todo from "./components/todo";
import TodoList from "./components/todoList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <a href="/todos" className="author">Zach Farmer</a>
            <div className="nav">
              <li className="navItem">
                <Link to={"/todos"} className="navLink">
                  Todos
                </Link>
              </li>
              <li className="navItem">
                <Link to={"/add"} className="navLink">
                  Add Todo
                </Link>
              </li>
            </div>
          </nav>

          <div className="container">
            <Switch>
              <Route exact path={["/", "/todos"]} component={TodoList} />
              <Route exact path={["/add" ]} component={AddTodo} />
              <Route path="/todos/:id" component={Todo}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App