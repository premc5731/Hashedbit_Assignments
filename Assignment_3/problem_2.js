// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = 'I love my India';

let wordsArray = str.split(' ');
let reversedArray = wordsArray.reverse();
let result = reversedArray.join(' ');

console.log(result);