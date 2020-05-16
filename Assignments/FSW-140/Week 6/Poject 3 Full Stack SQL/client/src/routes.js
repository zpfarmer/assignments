const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '14may2020'
})

const app = express() 

app.get('/projects', function (req, res) {
    connection.getConnection(function (err, connection) {
        connection.query('SELECT * FROM projects', function (error, results, fields) {
            if (error) throw error; 
            res.send(JSON.stringify(results))
        })
    })
})

app.listen(3000, () => {
    console.log('Go to http://localhost:3000/projects so you can see the data')
})