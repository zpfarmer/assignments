const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")


const bounties = [
    { 
    Name: "Luke Skywalker", 
    Living: "True", 
    BountyAmount: 500000, 
    Type: "Jedi",
    _id: uuid()
    },
    {
    Name: "Darth Vader", 
    Living: "False", 
    BountyAmount: "0", 
    Type: "Sith", 
    _id: uuid()
    }
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req,res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted movie!")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

module.exports = bountyRouter