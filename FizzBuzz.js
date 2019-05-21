'use strict';

const { FizzBuzzMath } = require('./Math');
const { WORDS } = require('./constants');

class FizzBuzz {
    static calcFizzBuzz(i) {
        const divByThree = FizzBuzzMath.isDivWithoutRemainder(3, i);
        const divByFive = FizzBuzzMath.isDivWithoutRemainder(5, i);

        return (!divByThree ? '' : WORDS.FIZZ) + (!divByFive ? '' : WORDS.BUZZ) || i;
    };

    static calcFizzBuzzLacky(i) {
        return FizzBuzzMath.isContains(3, i)
            ? WORDS.LUCKY
            : FizzBuzz.calcFizzBuzz(i);
    };

    // Step 1
    static fizzBuzz(from, to) {
        let i = from;
        const array = Array();

        while (i <= to) {
            array.push(FizzBuzz.calcFizzBuzz(i));
            ++i;
        };

        return array;
    };

    static fizzBuzzString(from, to) {
        return FizzBuzz.fizzBuzz(from, to).join(' ');
    };

    // Step 2
    static fizzBuzzLucky(from, to) {
        let i = from;
        const array = Array();

        while (i <= to) {
            array.push(FizzBuzz.calcFizzBuzzLacky(i));
            ++i;
        };

        return array;
    };

    static fizzBuzzLuckyString(from, to) {
        return FizzBuzz.fizzBuzzLucky(from, to).join(' ');
    };

    // Step 3
    static fizzBuzzLuckyWithCount(from, to) {
        const array = FizzBuzz.fizzBuzzLucky(from, to);
        const counter = FizzBuzzMath.calculateWords(array);

        return { array, counter };
    };

    static fizzBuzzLuckyWithCountString(from, to) {
        const result = FizzBuzz.fizzBuzzLuckyWithCount(from, to);
        return `${result.array.join(' ')}\nfizz: ${result.counter.fizz}\nbuzz: ${result.counter.buzz}\nfizzbuzz: ${result.counter.fizzbuzz}\nlucky: ${result.counter.lucky}\ninteger: ${result.counter.integer}`;
    };
}

module.exports = { FizzBuzz }; 