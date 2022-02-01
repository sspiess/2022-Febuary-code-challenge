const pricing = require('./pricing.js');

test('Given Example', () => {
    expect(pricing.computeTotalPrice(['A','A','B','B','C','C','D','E'])).toBe('$1,928.55');
});

test('One Product', () => {
    expect(pricing.computeTotalPrice(['A'])).toBe('$299.00');
});

test('Two Same Products', () => {
    expect(pricing.computeTotalPrice(['A', 'A'])).toBe('$598.00');
});

test('Two Different Products', () => {
    expect(pricing.computeTotalPrice(['A', 'B'])).toBe('$568.10');
});