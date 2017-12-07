import { getBaseOfTree, translateInputToTree } from '.';

const { input: INPUT, sample: SAMPLE } = require('./input.json');

test('can translate input to tree', () => { 
  const tree = translateInputToTree(SAMPLE);
  expect(tree.size).toBeGreaterThan(0);
});

describe('first star', () => {
  test('it can get bottom of sample tree', () => {
    expect(getBaseOfTree(SAMPLE)).toBe('tknk');
  });

  test('it can get bottom of input tree', () => {
    expect(getBaseOfTree(INPUT)).toBe('airlri');
  });
});

describe('second star', () => {

});
