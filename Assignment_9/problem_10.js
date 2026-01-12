// sum of numbers

function sumNumbers(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers([1, 2, 3, 4, 5]));
