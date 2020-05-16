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

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE 14May2020';

    db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('Database Created Successfully')
    })
})

app.get('/createtable', (req, res) => {
    let sql = "CREATE TABLE projects( id INT AUTO_INCREMENT, title varchar(50), description varchar(250), PRIMARY KEY(id))";
    
    db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('Table Projects Created Successfully')
    })
})

app.get('/addpost1', (req, res) => {
    let post = {title: 'Project One', description: 'This is my first Project'};
    let sql = 'INSERT INTO projects SET ?';
    
    let query = db.query(sql, post, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('First Row Created Successfully')
    })
})

app.get('/addpost2', (req, res) => {
    let post = {title: 'Project Two', description: 'This is my second Project'};
    let sql = 'INSERT INTO projects SET ?';
    
    let query = db.query(sql, post, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('Second Row Created Successfully')
    })
});

app.get('/getprojects', (req, res) => {
    let sql = "SELECT * FROM projects";
    
    db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('SELECT query executed successfully')
    })
})

app.get('/getproject/:id', (req, res) => {
    let sql = `SELECT * FROM projects WHERE id = ${req.params.id}`;
    
    db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('Restricted SELECT query executed successfully')
    })
})


app.get('/updateproject/:id', (req, res) => {
    let newTitle = 'This is via UPDATE statement'
    let sql = `UPDATE projects SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    
    let query = db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('Row Changed via UPDATE statement')
    })
})

app.get('/deleteproject/:id', (req, res) => {
    let sql = `DELETE FROM projects WHERE id = ${req.params.id}`;
    
    let query = db.query(sql, (err, result) => {
        if(err)
        {
            throw err
        }
        console.log(result);
        res.send('Row Changed via DELETE statement')
    })
})


app.listen('3000', () => {
    console.log('Local Web Server started at Port: 3000')
})

