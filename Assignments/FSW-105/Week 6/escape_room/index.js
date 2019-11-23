const { question } = require("readline-sync")

let firstLine = question("You are stuck in a room! Type one to put hand in hole, two to find the key, or three to open the door")
let one = 'one'
let two = 'two'
let three = 'three'

getKey = () => {
    number = Math.floor((Math.random() * 10))
    if( number <= 2 ){
        return true
    } else {
        return false
    }
}    
//console.log(getKey())
const escapeRoom = (one, two, three) => {
    if(firstLine == 'one'){
        return "You have died!"
    } else if(firstLine == 'two'){
        if(getKey() == true){
            return "You have found the key!"
        } else if(getKey() == false){
            return "You couldn't find the key!"
        }
    } else if(firstLine == 'three'){
        return "It is locked!"
    }}
console.log(escapeRoom())

const solution = () => {
    if (escapeRoom = "You have found the key"){
        return "you have escaped"
    }
}
console.log(solution())
