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

// //variables
// // end game logic
// let endSimulation = false;
// //user choice loop
// const choice = ['put hand in hole', 'find key', 'open door', 'end'];
// //keyStorage
// let inventory = {
//     key: false
// }
// functions
// // getKey = () => {
// //     const number = Math.floor((Math.random() * 10))
// //     //not equivalent to
// //     // number = Math.floor((Math.random() * 10))
// //     if (number <= 2) {
// //         // return the boolena of your key to true
// //         return true
// //     } else {
// //         return false
// //     }
// // }
// getKey = () => {
//     const number = Math.floor((Math.random() * 10))
    
//     if (number <= 2) {
//         inventory.key = true
//         console.log(inventory)
//     } else {
//         console.log('you did not find key')
//     }
// }
// endGame = () => {
//     console.log('you opened the door')
// }
// while (endSimulation === false) {
//     let indexOfChoice = readlineSync.keyInSelect(choice, 'What would you like to do?')
//     if (indexOfChoice === 1) {
//         inventory.key ? console.log('you already have a key') : getKey()
//     } else if (indexOfChoice === 2) {
//         //open the door logic
//         inventory.key ? endGame() : console.log('try again')
//     } else if (indexOfChoice === 3) {
//         //logic for me to end loop in order to program more shit
//         break
//     }
// }
