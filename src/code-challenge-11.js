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
  return Math.max(...newArr);
};

// export function totalSum(matrix) {
/*   let newArr = [];
  if (matrix.length === 0) {
    return 0;
  } else {
    for (let element of matrix) {
      let sum = element.reduce(function(a, b) {
        newArr.push;
      }, matrix);
      newArr.push(sum);
      return sum;
    }
  }
}; */

export function totalSum(matrix) {
  let sum = 0;
  for (let x = 0; x < matrix.length; x++) {
    if (matrix[x] instanceof Array) {
      sum += totalSum(matrix[x]);
    } else {
      sum += matrix[x];
    }
  }
  return sum;
}