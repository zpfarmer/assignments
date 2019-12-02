const { question } = require("readline-sync")
//const readline = require('readline-sync')
// const choices = ['put hand in hole', 'find key', 'open the door'],
// let endSimulation = false;
// endSimulation ? console.log('game over') 
// : const index = readlineSync.keyInSelect(choice, 'What would you like to do?')

// if(endSimulation === false) {
    // let index = readline.keyInSelect(choice, 'What would you like to do?')
}
let firstLine = question("You are stuck in a room! Type one to put hand in hole, two to find the key, or three to open the door")


getKey = () => {
    number = Math.floor((Math.random() * 10))
    if( number <= 2 ){
        return true
    } else {
        return false
    }
}    

let one = "one"
let two = "two"
let three = "three"
//console.log(getKey())
const escapeRoom = () => {
    if(firstLine == one){
        return "You have died!"
    } else if(firstLine == two){
        if(getKey() == true){
            return question("You have found the key! What would you like to do with it?")
        } else if(getKey() == false){
            return "You couldn't find the key!"
        }
    } else if(firstLine == three){
        return "It is locked!"
    }}
console.log(escapeRoom())

//console.log(solution())



while (endSim)) => {
    console.log('--You said "' + )
}