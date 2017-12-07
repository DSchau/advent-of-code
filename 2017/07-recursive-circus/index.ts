interface Tree {
  weight: number;
  nodes: string[];
}

export function translateInputToTree(input: string): Map<String, Tree> {
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
  if (!tree.has(current)) {
    return false;
  }

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