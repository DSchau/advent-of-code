// https://www.reddit.com/r/adventofcode/comments/7h7ufl/2017_day_3_solutions/dqoxrb7/
export function spiralMemory(input): number {
  if (input === 1) {
    return 0;
  }
  const root = Math.ceil(Math.sqrt(input));

  const curR = root % 2 !== 0 ? root : root + 1;
  const numR = (curR - 1) / 2;
  const cycle = input - (curR - 2) ** 2;
  const innerOffset = cycle % (curR - 1);

  return numR + Math.abs(innerOffset - numR);
}
