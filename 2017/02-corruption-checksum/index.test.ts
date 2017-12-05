import {
  correctionChecksum,
  correctionChecksumDivison,
  inputToArray
} from './';

const { input: INPUT } = require('./input.json');

[
  [
    'sample record',
    `
5 1 9 5
7 5 3
2 4 6 8`,
    18
  ],
  ['actual puzzle', INPUT, 44887]
].forEach(([name, input, output]) => {
  test(`it handles ${name}`, () => {
    expect(correctionChecksum(inputToArray(input as string))).toBe(output);
  });
});

[
  [
    'sample record',
    `
5 9 2 8
9 4 7 3
3 8 6 5
`,
    9
  ],
  ['actual puzzle', INPUT, 242]
].forEach(([name, input, output]) => {
  test(`division: it handles ${name}`, () => {
    expect(correctionChecksumDivison(inputToArray(input as string))).toBe(
      output
    );
  });
});
