const express = require('express')
const votesRouter = express.Router()
const Votes = require('../models/issue.js')

votesRouter.get("/", (req, res, next) => {
    Votes.find((err, votes) => {
        if(err) {
            res.state(500)
            return next(err)
        }
        return res.status(200).send(votes)
    })
})

votesRouter.get("/:votesId", (req, res, next) => {
    Votes.findOne({_id: req.params.votesId}, (err, votes) => {
        if(err){
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(votes)
    })
})

votesRouter.post("/", (req, res, next) => {
    const newVotes = new Votes(req.body)
    newVotes.save((err, savedVotes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedVotes)
    })
})

votesRouter.delete("/:votesId", (req, res, next) => {
    Votes.findOneAndDelete({_id: req.params.votesId}, (err, deletedItem) => {
        if(err){
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`) 
    })
})

votesRouter.put("/:votesId", (req, res, next) => {
    Votes.findOneAndUpdate (
    {_id: req.params.votesId } ,
    req.body,
    { new: true } ,
    (err, updatedVotes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedVotes)
    }  
    )
})

module.exports = votesRouter