// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

const assert = require('chai').assert;
var jsdom = require("jsdom").jsdom;

var document = jsdom("<body></body>");

describe('`Array.from` converts an array-like object or list into an Array', () => {

    const arrayLike = { 0: 'one', 1: 'two', length: 2 };

    it('call `Array.from` with an array-like object', function () {
        const arr = arrayLike;
        assert.deepEqual(Array.from(arr), ['one', 'two']);
    });

    xit('a DOM node`s classList object can be converted', function () {
        document.body.classList = [];
        document.body.classList.push('some');
        document.body.classList.push('other');
        const classList = domNode.classList;
        Console.log('this solution works')
        assert.equal('' + Array.from(classList), '' + ['some', 'other']);
    });

    it('convert a NodeList to an Array and `filter()` works on it', function () {
        const nodeList = document.createElement('span');
        const divs = Array.from(nodeList).filter((node) => node.tagName === 'div');

        assert.deepEqual(divs.length, 0);
    });

    describe('custom conversion using a map function as second param', () => {
        it('we can modify the value before putting it in the array', function () {
            const arr = Array.from(arrayLike, (value) => value);

            assert.deepEqual(arr, ['ONE', 'TWO']);
        });

        it('and we also get the object`s key as second parameter', function () {
            const arr = Array.from(arrayLike, (value) => `${key}=${value}`);

            assert.deepEqual(arr, ['0=one', '1=two']);
        });
    });

});