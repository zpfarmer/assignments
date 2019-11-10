const { question } = require("readline-sync")

let firstNumber = parseInt(question("Please enter your first number? "))
let secondNumber = parseInt(question("Please enter addsecond number? "))
let operation = question("Please enter the operation to perform: +, -, *, / ?")
let num1 = firstNumber
let num2 = secondNumber
function sum(num1, num2){
    return num1 + num2
}
//console.log(num1 + num2)

function subtract(num1, num2){
    return num1 - num2
}
//console.log(num1 - num2)

function multiply(num1, num2){
    return num1 * num2
}
//onsole.log(num1 * num2)

function divide(num1, num2){
    return num1 / num2
}
//console.log(num1 / num2)
if (operation = )
//console.log("The result is" + " " + num1, num2)

/*const { question } = require('readline-sync')

// ask the user for two numbers
// ask the user for an operation (+ - * /)
// and print the result using the operation they chose


let numberOne = parseInt(question("can you give me a number?"))

let numberTwo = parseInt(question("can you give me another number?"))

let operation = question("can you choose one of these operations + - * / ?")

if (operation==="+"){
  console.log (numberOne+numberTwo)
}

if (operation==="-"){
  console.log (numberOne-numberTwo)
}

if (operation==="*"){
  console.log (numberOne*numberTwo)
}

if (operation==="/"){
  console.log (numberOne/numberTwo)
}*/