const express = require('express')
//const commerceRouter = exppress.Router()
const Commerce = require('../models/commerce.js')

commerceRouter.get("/", (req, res, next) => {
    Commerce.find((err, commerce) => {
        if(err) {
            res.state(500)
            return next(err)
        }
        return res.status(200).send(commerce)
    })
})