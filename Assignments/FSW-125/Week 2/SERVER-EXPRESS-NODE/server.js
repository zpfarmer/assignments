const express = require("express")
const app = express()

app.get("/movies", (req, res) => {
    res.send(
        [
            {name: "2012", year: "2009"}, 
            {name: "Hancock", year: "2008"},
            {name: "I am Legend", year: "2007"},
            {name: "Hitch", year: "2005"},
            {name: "Bad Boys", year: "1995"},
            {name: "Pursuit of Happiness", year: "2006"},
            {name: "7 pounds", year: "2008"},
        ])
})

app.get("/actors", (req, res) => {
    res.send(
        [
            {name: "Cameron Boyce", age: "17"},
            {name: "Jaden Smith", age: "18"},
            {name: "Asa Butterfield", age: "19"},
            {name: "Tom Holland", age: "20"},
            {name: "Troye Sivan", age: "21"},
            {name: "Ansel Elgort", age: "22"},
        ]
    )
})

app.get("/directors", (req, res) => {
    res.send(
        [
            {name: "William Wyler", oscars: "39"},
            {name: "Steven Spielberg", oscars: "32"},
            {name: "David Lean", oscars: "27"},
            {name: "Fred Zinnemann", oscars: "24"},
            {name: "Vincent Minnelli", oscars: "23"},
            {name: "James Cameron", oscars: "21"},
            {name: "Elia Kazan", oscars: "21"},
        ])
})
 



app.listen(9000), () => {
    console.log("this server is running")
}