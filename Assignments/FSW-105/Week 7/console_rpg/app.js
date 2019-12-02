const readlineSync = require('readline-sync');

let endSimulation = false
let name = readlineSync.question('Hello, what is your name?')

//const choice = ['walk forward', 'check inventor', 'end sim']

let inventory = {
    coins: 0,
    armor: 0,
    weapons: 0
}

let monster = {
    hp: 20
}

 //console.log("Hello " + name + "please press 1 to walk, 2 to check your inventory, or 3 to end game")

 walk = () => {
     const number = Math.floor((Math.random() * 10))
     if (number < 3) {
        console.log("A monster has appread!");
        monsterAppears()
     } else {
         console.log("You have not found anything, please keep walking")
     }
 }

 while (endSimulation === false) {
    let action = readlineSync.question("Hello " + name + " please press w to walk, 'print' to check your inventory, or x to end game")
    
    if (action === "w") {
        return monsterAppears()
    } else if (action === "print") {
    console.log(inventory)
    } else if (action === "x"){
        break
 }}

monsterAppears