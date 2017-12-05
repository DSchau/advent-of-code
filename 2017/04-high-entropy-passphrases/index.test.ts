import { passphraseValidator, getValidPassphrases } from './';

const { input: INPUT } = require('./input.json');

describe('part one', () => {
  [
    ['aa bb cc dd ee', true],
    ['aa bb cc dd aa', false],
    ['aa bb cc dd aaa', true]
  ].forEach(([input, expected], index) => {
    test(`${index} has expected result`, () => {
      expect(passphraseValidator(input as string)).toBe(expected);
    });
  });

  test('it can get all valid passphrases from input', () => {
    expect(getValidPassphrases(INPUT)).toBe(451);
  });
});

describe('part two', () => {
  [
    ['abcde fghij', true],
    ['abcde xyz ecdab', false],
    ['a ab abc abd abf abj', true],
    ['iiii oiii ooii oooi oooo', true],
    ['oiii ioii iioi iiio', false]
  ].forEach(([input, expected], index) => {
    test(`${index} has expected result`, () => {
      expect(passphraseValidator(input as string, true)).toBe(expected);
    });
  });

  test('it can get all valid passphrases from input', () => {
    expect(getValidPassphrases(INPUT, true)).toBe(223);
  });
});
