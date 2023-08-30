
var assert = require('chai').assert;
const expect = require('chai').expect;
const { getSum } = require('./sumWithChai')
describe('testing', () => {
    describe('getSum', () => {
        it('should return the sum of two numbers ', () => {
            const n1 = 5, n2 = 6;
            expect(getSum(n1, n2)).to.eq(11);
        })
    })
})

describe('testing', () => {
    it('Array should have presingting number', () => {
        var numbers = [1, 2, 3, 4, 5];
        assert.include(numbers, 2);
    })
})


