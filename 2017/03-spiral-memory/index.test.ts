import { spiralMemory } from './';

const { input: INPUT } = require('./input.json');

[
  [1, 0],
  [12, 3],
  [23, 2],
  [1024, 31],
  [INPUT, 475]
].forEach(([input, output]) => {
  test(`it handles ${input}`, () => {
    expect(spiralMemory(input)).toBe(output);
  });
});
