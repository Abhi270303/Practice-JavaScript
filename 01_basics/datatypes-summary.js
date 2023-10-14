//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n //bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Thor", "Captain"]; //object
let myObj = {
    name: "Abhishek",
    age: 21,
} // object

const myFunction = function(){
    console.log("Hello world");
} // function

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3