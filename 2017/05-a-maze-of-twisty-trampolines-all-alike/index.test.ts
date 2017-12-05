import { getMazeSteps } from './';

const SAMPLE = [0, 3, 0, 1, -3];
const { input: INPUT } = require('./input.json');

describe('part one', () => {
  test('it handles sample', () => {
    expect(getMazeSteps(SAMPLE)).toBe(5);
  });

  test('it handles input', () => {
    expect(getMazeSteps(INPUT)).toBe(372139);
  });
});

describe('part two', () => {
  test('it handles sample', () => {
    expect(getMazeSteps(SAMPLE, 3)).toBe(10);
  });

  test('it handles input', () => {
    expect(getMazeSteps(INPUT, 3)).toBe(29629538);
  });
});
