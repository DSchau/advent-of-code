export function getMazeSteps(input: number[], modifier?: number) {
  let index = 0;
  let steps = 0;
  const clone = input.slice(0);
  while (index >= 0 && index < input.length) {
    const jump = clone[index];
    const temp = index;
    index += jump;
    clone[temp] = modifier && jump >= modifier ? jump - 1 : jump + 1;
    steps += 1;
  }
  return steps;
}
