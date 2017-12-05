type GetNextIndex = (index: number, range: number[]) => number;

export function inverseCaptcha(input: string, getNext: GetNextIndex): number {
  const range: number[] = input.split('').map(value => parseInt(value, 10));
  return range.reduce((sum, num, index) => {
    const next = getNext(index, range);
    if (num === range[next]) {
      sum += num;
    }
    return sum;
  }, 0);
}
