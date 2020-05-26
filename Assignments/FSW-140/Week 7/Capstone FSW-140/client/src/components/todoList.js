import React, { Component } from "react";
import TodoDataService from "../services/todoService"
import { Link } from "react-router-dom"

export default class TodosList extends Component {
    constructor(props) {
        super(props)
        this.onChangeSeachTitle = this.onChangeSeachTitle.bind(this)
        this.retrieveTodos = this.retrieveTodos.bind(this)
        this.refreshList = this.refreshList.bind(this)
        this.setActiveTodo = this.setActiveTodo.bind(this)
        this.removeAllTodos = this.removeAllTodos.bind(this)
        this.searchTitle = this.searchTitle.bind(this)

        this.state = {
            todos: [],
            currentTodo: null,
            currentIndex: -1,
            searchTodo: ""
        }
    }

    componentDidMount() {
        this.retrieveTodos()
    }

    onChangeSeachTitle(e) {
        const searchTodo = e.target.value;

        this.setState({
            searchTodo: searchTodo
        })
    }

    retrieveTodos() {
        TodoDataService.getAll()
        .then(response => {
            this.setState({
                todos: response.data
            })
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    refreshList() {
        this.refreshList.retrieveTodos();
        this.setState({
            currentTodo: null,
            currentIndex: -1
        })
    }

    setActiveTodo(todo, index) {
        this.setState({
            currentTodo: todo,
            currentIndex: index
        })
    }

    removeAllTodos() {
        TodoDataService.deleteAll() 
            .then(response => {
                console.log(response.data)
                this.refreshList()
            })
            .catch(e => {
                console.log(e)
            })
    }

    searchTitle() {
        TodoDataService.findByTitle(this.state.searchTitle)
        .then(response => {
            this.setState({
                todos: response.data
            })
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        const { searchTitle, todos, currentTodo, currentIndex } = this.state;

        return (
            <div className="listRow">
                <div>
                    <div>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSeachTitle}
                        />
                        <div>
                            <button
                                className="btnOutline"
                                type= "button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div> 
                    <h4>All Todos</h4>

                    <ul className="list-group">
                        {todos &&
                        todos.map((todo, index) => (
                            <li
                                className={
                                    "list-group-item" +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveTodo(todo, index)}
                                key={index}
                            >
                                {todo.title}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="btnDelete"
                        onClick={this.removeAllTodos}
                    >
                        Remove All Todos
                    </button>
                </div>
                <div className="currentTodo">
                    {currentTodo ? (
                        <div>
                            <h4>Todo</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentTodo.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentTodo.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Status: </strong>
                                </label>{" "}
                                {currentTodo.published ? "Published" : "Pending"}
                            </div>

                            <Link
                                to={"/todos/" + currentTodo.id}
                                className="badgeWarning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Todo</p>
                        </div>
                    )}
                </div>
                </div>
        )
    }
}