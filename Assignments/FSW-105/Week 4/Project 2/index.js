const readlineSync = require("readline-sync")

var firstNumber = readlineSync.question('Please enter your first number? ')
var secondNumber = readlineSync.question('Please entersecond number? ')
var operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div')

function sum(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    console.log(num1 * num2)
}

function divide(num1, num2){
    return num1 / num2
}

console.log("The result is" + " " + num1, num2)