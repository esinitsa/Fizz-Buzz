const { WORDS } = require('./constants');

'use strict';

class FizzBuzzMath {
    static isDivWithoutRemainder(divider, base) {
        return base % divider === 0;
    };

    static isContains(char, base) {
        return base.toString().includes(char);
    };

    static calculateWords(array) {
        const counter = {
            [WORDS.FIZZ]: 0,
            [WORDS.BUZZ]: 0,
            [WORDS.FIZZ + WORDS.BUZZ]: 0,
            [WORDS.LUCKY]: 0,
            integer: 0,
        };

        array.forEach(item => typeof item === 'number' ? counter.integer++ : counter[item]++);

        return counter;
    };
};

module.exports = { FizzBuzzMath }; 