function modifyArray(arr) {
  arr.push("New Element"); 
  arr.pop();              
  return arr;             
}

let myArray = [1, 2, 3, 4];
let result = modifyArray(myArray);

console.log(result); 