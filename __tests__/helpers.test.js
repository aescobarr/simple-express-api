const functions = require('../helpers/functions');

test('test sum function', () => {
    expect( functions.sum(1,2) ).toBe(3);
    expect( functions.sum(-1,-1) ).toBe(-2);
    expect( functions.sum(-200,200) ).toBe(0);    
});