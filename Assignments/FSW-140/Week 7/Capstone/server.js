const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

const db = require("./client/src/models")

db.sequelize.sync()

app.get("/", (req, res) => {
    res.json({ message: "Welcome to your daily Todos."})
})

require("./client/src/routes/todoRoutes")(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})