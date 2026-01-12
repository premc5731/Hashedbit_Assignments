// Filter out even numbers

function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log(getOddNumbers([1, 2, 3, 4, 5]));
