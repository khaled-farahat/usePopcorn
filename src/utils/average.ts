const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length + (i * 0), 0);

export default average;
