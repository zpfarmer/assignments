const express = require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())

const items = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },
    {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },
    {
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },
    {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },
    {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },
    {
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },
    {
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]

app.get("/", (req, res) => {
    res.send(items)
})

app.get("/:itemsId", (req, res) => {
    const itemsId = req.params.itemsId
    const foundItems = items.find(items => items._id === itemsId)
    res.send(foundItems)
})

app.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredItems = items.filter(item => item.type === type)
    res.send(filteredItems)
})

app.listen(3000, () => {
    console.log("The server is running on port 3000")
})