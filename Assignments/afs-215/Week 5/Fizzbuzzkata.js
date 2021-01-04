let expect = require('chai').expect;

function solve(n) {
    let words = new Array()
    if (n % 3 === 0)
        words.push("fizz")
    if (n % 5 === 0)
        words.push("buzz")
    return  words.join('')
}

module.exports.solve = solve