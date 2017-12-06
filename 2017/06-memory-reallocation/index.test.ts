import { memoryAllocation } from './';

const { input: INPUT } = require('./input.json');
const BASE = [0, 2, 7, 0];

describe('part one', () => {
  test('it handles base case', () => {
    expect(memoryAllocation(BASE)).toBe(5);
  });

  test('it handles input', () => {
    expect(memoryAllocation(INPUT)).toBe(14029);
  });
});

describe('part two', () => {
  test('it handles base case', () => {
    expect(memoryAllocation(BASE, true)).toBe(4);
  });

  test('it handles input', () => {
    expect(memoryAllocation(INPUT, true)).toBe(2765);
  });
});
