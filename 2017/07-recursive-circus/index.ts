interface Tree {
  weight: number;
  nodes: string[];
}

type TreeMap = Map<String, Tree>;

export function translateInputToTree(input: string): TreeMap {
  return input.split("\n")
    .reduce((tree, value) => {
      let [, name, weight, , nodes = ''] = /(\w+)\s?\((\d+)\)(\s*->\s*(.+))?/.exec(value)
      tree.set(name, {
        weight: parseInt(weight, 10),
        nodes: nodes.length > 0 ? nodes.split(', ') : []
      });
      return tree;
    }, new Map());
}

const isRoot = (tree, current) => {
  const entries = tree.entries();

  for (let [name, value] of entries) {
    if (value.nodes.includes(current)) {
      return false;
    }
  }
  return true;
}

// TODO: make this less shitty
export function getBaseOfTree(input: string) {
  const tree = translateInputToTree(input);
  const entries = tree.entries();
  for (let [name] of entries) {
    if (isRoot(tree, name)) {
      return name;
    }
  }
  return null;
}

export function getNodeWeight(tree: TreeMap, node: string) {
  const el = tree.get(node);
  if (!el.nodes.length) {
    return el.weight;
  }
  return el.nodes
    .reduce((weight, nestedNode) => {
      return weight + getNodeWeight(tree, nestedNode);
    }, el.weight);
}

export function getNodeWeights(input: string) {
  const tree = translateInputToTree(input);
  const base = getBaseOfTree(input);
  const nodes = tree.get(base).nodes;
  return nodes
    .reduce((weights, node) => {
      const weight = getNodeWeight(tree, node);
      if (weights.has(weight)) {
        const existing = weights.get(weight);
        weights.set(weight, existing.concat(node));
      } else {
        weights.set(weight, [node]);
      }
      return weights;
    }, new Map());
}
