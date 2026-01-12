// merge objects 

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log(
  mergeObjects(
    { name: "anshul", age: 22, occupation: "student" },
    { name: "anshul", age: 20, occupation: "SDE" } 
  )
);
