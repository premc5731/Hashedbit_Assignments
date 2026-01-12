function scopeExample() {
  var x = 1;   // let, const, and var + scope differences
  let y = 2;   
  const z = 3;  

  if (true) {
    var x = 10;  
    let y = 20;   
    const z = 30; 
  }

  console.log(x); 
  console.log(y); 
  console.log(z); 
}
