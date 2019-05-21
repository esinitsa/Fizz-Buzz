'use strict';

const { FizzBuzz } = require('./FizzBuzz');
const { step3Result, step1Result, step2Result } = require('./constants');
describe('FizzBuzz algorithm', function () {
    it('should return Fizz for multiples of 3', function () {
        expect(FizzBuzz.calcFizzBuzz(3)).to.equal('fizz');
        expect(FizzBuzz.calcFizzBuzz(6)).to.equal('fizz');
    });

    it('should return Buzz for multiples of 5', function () {
        expect(FizzBuzz.calcFizzBuzz(5)).to.equal('buzz');
        expect(FizzBuzz.calcFizzBuzz(10)).to.equal('buzz');
    });

    it('should return FizzBuzz for numbers which are multiple of both factors', function () {
        expect(FizzBuzz.calcFizzBuzz(15)).to.equal('fizzbuzz');
        expect(FizzBuzz.calcFizzBuzz(75)).to.equal('fizzbuzz');
    });

    it('should return the number itself when not a multiple of these factors', function () {
        expect(FizzBuzz.calcFizzBuzz(2)).to.equal(2);
        expect(FizzBuzz.calcFizzBuzz(14)).to.equal(14);
    });

    it('should be equal for range 1-20 fizzbuzz', function () {
        expect(FizzBuzz.fizzBuzzString(1, 20)).to.equal(`1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz`);
    });

    it('should return lucky for contains a three', function () {
        expect(FizzBuzz.calcFizzBuzzLacky(3)).to.equal('lucky');
        expect(FizzBuzz.calcFizzBuzzLacky(13)).to.equal('lucky');
    });

    it('should be equal for range 1-20 fizzbuzzlucky', function () {
        expect(FizzBuzz.fizzBuzzLuckyString(1, 20)).to.equal(`1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz`);
    });

    it('should return count of integers in range', function () {
        expect(FizzBuzz.fizzBuzzLuckyWithCount(1, 5).counter.integer).to.equal(3);
        expect(FizzBuzz.fizzBuzzLuckyWithCount(1, 10).counter.fizz).to.equal(2);
        expect(FizzBuzz.fizzBuzzLuckyWithCount(1, 10).counter.buzz).to.equal(2);
        expect(FizzBuzz.fizzBuzzLuckyWithCount(10, 15).counter.fizzbuzz).to.equal(1);
        expect(FizzBuzz.fizzBuzzLuckyWithCount(2, 15).counter.lucky).to.equal(2);

    });

    it('should be equal for range 1-20 fizzbuzzlucky with count', function () {
        expect(FizzBuzz.fizzBuzzLuckyWithCountString(1, 20)).to.equal(`1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz
fizz: 4
buzz: 3
fizzbuzz: 1
lucky: 2
integer: 10`);
    });
});