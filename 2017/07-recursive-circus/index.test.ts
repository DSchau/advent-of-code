import { getNodeWeights, getBaseOfTree, getNodeWeight, translateInputToTree } from '.';

const { input: INPUT, sample: SAMPLE } = require('./input.json');

test('can translate input to tree', () => { 
  const tree = translateInputToTree(SAMPLE);
  expect(tree.size).toBeGreaterThan(0);
});

test('it can get a node weight', () => {
  const tree = translateInputToTree(SAMPLE);

  expect(getNodeWeight(tree, 'pbga')).toBe(tree.get('pbga').weight);
  expect(getNodeWeight(tree, 'fwft')).toBe(243);
  expect(getNodeWeight(tree, 'padx')).toBe(243);
  expect(getNodeWeight(tree, 'ugml')).toBe(251);
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
  test('it can get weights of bases', () => {
    expect(Array.from(getNodeWeights(SAMPLE).keys())).toEqual([251, 243]);
  });

  test('it can get weights of bases', () => {
    expect(Array.from(getNodeWeights(INPUT).keys())).toEqual([152523, 152514]);
  });

  test('it can get difference required in weight', () => {
    const tree = translateInputToTree(INPUT);
    const nodes = tree.get('tylelk').nodes;
    nodes
      .forEach(node => {
        console.log(node, getNodeWeight(tree, node));
      });
  });
});
