const readlineSync = require('readline-sync');

let endSimulation = false
let name = readlineSync.question('Hello, what is your name?')

let inventory = {
    coins: 0,
    armor: 0,
    weapons: 0
}

let monster = {
    hp: 20
}


const choice = ['fight', 'run away']


run = () => {
    let runChance = Math.floor((Math.random() * 10))
    if (runChance <= 5) {
        console.log("You escaped! What would you like to do now?")
    } else {
        console.log("You did not escape and the monster killed you!")
    }
}

fight = () => {
    let winFight = Math.floor((Math.random() * 10)) 
        if (winFight <= 5) {
            console.log("You have defeated the monster!")
        } else {
            console.log("You have been slain by the monster!")
        }
}

monsterAppears = () => {
    
    let indexOfChoice = readlineSync.keyInSelect(choice, "A monster has appeard! Would you like to fight it or run away?")
        if (indexOfChoice === 0) {
            return fight()
        } else if (indexOfChoice === 1) {
            return run()
        }
    }

walk = () => {
     const number = Math.floor((Math.random() * 10))
     if (number < 3) {
        return monsterAppears();
    } else {
         console.log("You have not found anything, please keep walking")
         return endSimulation
     }
 }

  while (endSimulation === false) {
    let action = readlineSync.question("Hello " + name + " please press w to walk, 'print' to check your inventory, or x to end game")
    
    if (action === "w") {
        return walk()
    } else if (action === "print") {
    console.log(inventory)
    } else if (action === "x"){
        break
    }
  }
