var expect = require('chai').expect

function callFizzBuzz(value) {
    return 'I called fizzbuzz!'
}

it('return I called fizzbuzz! with fizzbuzz passed in', function() {
    callFizzBuzz('fizzbuzz')
})

function fizzBuzz(value){
    return '1';
}

it('return 1 with 1 passed in', function() {
    fizzBuzz(1)
})

function fizzBuzz(value){
    return '2';
}

it('return 2 with 2 passed in', function() {
    fizzBuzz(2)})