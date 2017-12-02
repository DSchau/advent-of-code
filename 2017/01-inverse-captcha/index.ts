// TODO: improve this algorithm!
export function inverseCaptcha(input: string): number {
  const range: number[] = input.split('').map(value => parseInt(value, 10));
  const count = range
    .reduce((matches, num, index) => {
      if (index + 1 === range.length ? num === range[0] : num === range[index + 1]) {
        matches[num] = (matches[num] || 0) + 1;
      }
      return matches;
    }, {});

  return Object.keys(count)
    .reduce((sum, key) => {
      const value = parseInt(key, 10);
      return sum + (value * count[key]);
    }, 0);
}
