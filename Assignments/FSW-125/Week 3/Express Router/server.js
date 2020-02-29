//required packages
const express = require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())

//bounty array to get me started

const bounty = [
    { 
    FirstName: "Luke", 
    LastName: "Skywalker", 
    Living: true, 
    BountyAmount: 500000, 
    Type: "Jedi", 
    _id: uuid()
    },
    {
    FirstName: "Darth", 
    LastName: "Vader", 
    Living: false, 
    BountyAmount: 0, 
    Type: "Sith", 
    _id: uuid()
    }
]

//my get request to have my data display in Postman

app.get("/bounty", (req, res) => {
    res.send(bounty)
})

//my post request to be able to add data to my bounty array and a log to let me know that a new bounty has been posted successfully

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.FirstName} to the database`)
})


//a simply console log to let me know that my server is working
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})