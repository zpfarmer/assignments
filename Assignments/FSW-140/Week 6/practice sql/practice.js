const express = require("express")
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "14May2020"
})

db.connect((err) => {
    if(err)
    {
        throw err;
    }
    console.log('MySQL Database Connection Successfull')
})

const app = express()

app.get('/getprojects', (req, res) => {
    let sql = "SELECT * FROM projects";
    
    db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send({db})
    })
})

app.listen('3000', () => {
    console.log('Local Web Server started at Port: 3000')
})