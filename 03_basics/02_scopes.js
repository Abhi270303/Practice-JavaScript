//var c = 300 // we'll not use var

//Global scope
let a = 300

if (true) { //block scope
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);
