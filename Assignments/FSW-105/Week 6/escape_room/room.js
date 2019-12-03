const readlineSync = require('readline-sync')

let endSimulation = false;

const choice = ['put hand in hole', 'find key', 'open door', 'end'];

let inventory = {
    key: false
}

getKey = () => {
    const number = Math.floor((Math.random() * 10))
    
    if (number <= 2) {
        inventory.key = true
        console.log(inventory)
    } else {
        console.log('You could not find key, please try again')
    }
}
endGame = () => {
    console.log('you opened the door')
}
while (endSimulation === false) {
    let indexOfChoice = readlineSync.keyInSelect(choice, 'What would you like to do?')
    if (indexOfChoice === 0) {
        console.log("You have died!");
        break
    }
    if (indexOfChoice === 1) {
        inventory.key ? console.log('you already have a key') : getKey()
    } else if (indexOfChoice === 2) {
        inventory.key ? endGame() : console.log('try again')
    } else if (indexOfChoice === 3) {
        break
    }
}
