export function inputToArray(input: string) {
  return input
    .trim()
    .split('\n')
    .map(line => line.split(/\s+/g).map(value => parseInt(value, 10)));
}

export function correctionChecksum(rows: number[][]): number {
  let sum = 0;
  for (let row of rows) {
    let min;
    let max;
    for (let num of row) {
      if (!min || num < min) {
        min = num;
      }

      if (!max || num > max) {
        max = num;
      }
    }
    sum += max - min;
  }
  return sum;
}

export function correctionChecksumDivison(rows: number[][]): number {
  let sum = 0;
  for (let row of rows) {
    for (let i = 0; i < row.length; i++) {
      for (let j = i + 1; j < row.length; j++) {
        if ((row[i] / row[j]) % 1 === 0) {
          sum += row[i] / row[j];
          break;
        }
        if ((row[j] / row[i]) % 1 === 0) {
          sum += row[j] / row[i];
          break;
        }
      }
    }
  }
  return sum;
}
