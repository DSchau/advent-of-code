import { inverseCaptcha } from './';

const getName = input =>
  input.length > 10 ? input.slice(0, 10) + '...' : input;

const { input: INPUT } = require('./input.json');

[
  ['1234', 0],
  ['1122', 3],
  ['1111', 4],
  ['91212129', 9],
  [INPUT, 1102]
].forEach(([input, expected]) => {
  test(`it handles ${getName(input)}`, () =>
    expect(
      inverseCaptcha(
        input as string,
        (index, range) => (index + 1 === range.length ? 0 : index + 1)
      )
    ).toBe(expected));
});

[
  ['1212', 6],
  ['1221', 0],
  ['123425', 4],
  ['123123', 12],
  ['12131415', 4],
  [INPUT, 1076]
].forEach(([input, expected]) => {
  test(`part two: it handles ${getName(input)}`, () =>
    expect(
      inverseCaptcha(
        input as string,
        (index, range) => (index + range.length / 2) % range.length
      )
    ).toBe(expected));
});
