export function returnTen(str) {
  const split = str.split('');
  return split.slice(-10);
}

export function findMax(matrix) {
  const newArr = [];
  for (let element of matrix) {
    let max = Math.max(...element);
    newArr.push(max);
  }
  console.log(newArr);
  return Math.max(...newArr);
};