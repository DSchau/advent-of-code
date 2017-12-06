function reallocate(blocks: number[]) {
  const next = num => (num + 1) % blocks.length;

  const maxIndex = blocks.indexOf(Math.max(...blocks));
  let numBlocks = blocks[maxIndex];
  blocks[maxIndex] = 0;
  let index = next(maxIndex);
  while (numBlocks) {
    blocks[index] += 1;
    numBlocks -= 1;
    index = next(index);
  }
  return blocks;
}

function findNextDuplicateAllocation(blocks: number[]) {
  const cloned = blocks.slice(0);
  let counter = 1;
  while (blocks.join(' ') !== reallocate(cloned).join(' ')) {
    counter += 1;
  }
  return counter;
}

export function memoryAllocation(
  blocks: number[],
  findDuplicate: boolean = false
): number {
  let clone = blocks.slice(0);
  let unique = new Map();
  let counter = 1;
  while (unique.size !== unique.set(reallocate(clone).join(' '), true).size) {
    counter += 1;
  }
  return findDuplicate ? findNextDuplicateAllocation(clone.slice(0)) : counter;
}
