let expect = require('chai').expect
let fizzbuzz = require('../Fizzbuzzkata.js');


describe('fizzbuzz solver', () => {

    it('should return "" if n is not divisible by 3 or 5', function(){
        expect(fizzbuzz.solve(1)).to.equal("");
        expect(fizzbuzz.solve(7)).to.equal("");
        expect(fizzbuzz.solve(11)).to.equal("");
    })

    it('should return "fizz" if n is divisible by 3 but not 5', function() {
        expect(fizzbuzz.solve(3)).to.equal("fizz");
        expect(fizzbuzz.solve(6)).to.equal("fizz");
        expect(fizzbuzz.solve(9)).to.equal("fizz");
    })

    it('should return "buzz" if n is divisible by 5 but not 3', function() {
        expect(fizzbuzz.solve(5)).to.equal("buzz");
        expect(fizzbuzz.solve(10)).to.equal("buzz");
        expect(fizzbuzz.solve(20)).to.equal("buzz");
    })

    it('should return "fizz buzz" if n is divisible by 3 and 5', function() {
        expect(fizzbuzz.solve(3*5)).to.equal("fizzbuzz");
        expect(fizzbuzz.solve(30)).to.equal("fizzbuzz");
        expect(fizzbuzz.solve(3*5*7)).to.equal("fizzbuzz");
    })
})