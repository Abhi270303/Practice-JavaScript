// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// even different datatypes are accepted
// console.log("2" > 1);
// console.log("02" > 1);
// console.log("0" == 0);

// we should avoid null and undefined, to keep clean code

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
//Because equality(=) and comparisons(<,>,<=,>=) work differently
//comparisons convert null to number, treating it as 0
//that why null >= 0 is true and nill > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); //stictly checks datatypes