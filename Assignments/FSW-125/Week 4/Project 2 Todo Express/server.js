//required packages
const express = require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())

const todo = [
    { 
    name: "My Name",
    description: "Please describe what needs done",
    imageURL: "Please paste an image",
    completed: false,
    _id: uuid()
    }
]

app.get("/:todo", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.setEncoding(foundTodo)
})

app.post("/todo", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todo.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database`)
})

app.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo = todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

app.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todos => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted Todo!")
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})