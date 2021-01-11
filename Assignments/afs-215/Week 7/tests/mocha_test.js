//let expect = require('chai').expect
//let fizzbuzz = require('../walmart.js');

let assert = require('assert');
let Checkout = require('../walmart.js');

describe('Checkout', function () {

    describe('Calculating total price with one item', function () {

        beforeEach(function () {
            this.checkout = new Checkout();

        });

        it('Should return 0 for unknown item', function () {
            this.checkout.scan('');
            let amount = this.checkout.getTotal();

            assert.equal(amount, 0);
        });

        it('Should return 50 for item A', function () {
            this.checkout.scan('A');
            let amount = this.checkout.getTotal();

            assert.equal(amount, 50);
        });

        it('Should return 30 for item B', function () {
            this.checkout.scan('B');
            let amount = this.checkout.getTotal();

            assert.equal(amount, 30);
        });

        it('Should return 20 for item C', function () {
            this.checkout.scan('C');
            let amount = this.checkout.getTotal();

            assert.equal(amount, 20);
        });

        it('Should return 15 for item D', function () {
            this.checkout.scan('D');
            let amount = this.checkout.getTotal();

            assert.equal(amount, 15);
        });

    });

    describe('Calculating total price for many items with no offers', function () {

        it('Should return 80 when "A" and "B" have been scanned', function () {
            let checkout = new Checkout();
            checkout.scan("A");
            checkout.scan("B");
            let amount = checkout.getTotal();

            assert.equal(amount, 80);
        });

        it('Should return 100 when 2 "A"s have been scanned', function () {
            let checkout = new Checkout();
            checkout.scan("A");
            checkout.scan("A");
            let amount = checkout.getTotal();

            assert.equal(amount, 100);
        });

        it('Should return 115 when all items are scanned once', function () {
            let checkout = new Checkout();
            checkout.scan("A");
            checkout.scan("B");
            checkout.scan("C");
            checkout.scan("D");
            let amount = checkout.getTotal();

            assert.equal(amount, 115);
        });

    });


    describe('Adding items', function () {

        it('Should have one item when it is added', function () {
            let checkout = new Checkout();

            checkout.scan('A');

            assert.equal(checkout.items.length, 1);
        });

        it('Should have both items when two are added', function () {
            let checkout = new Checkout();

            checkout.scan('A');
            checkout.scan('B');

            assert.equal(checkout.items.length, 2);
            assert.equal(checkout.items[0], 'A');
            assert.equal(checkout.items[1], 'B');
        });

    });

});