const name = "Abhishek"
const repoCount = 20

// console.log(name + repoCount + " Value"); //this is outdated, don't use this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('abhishek-ay-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   abhi    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims whitespace

const url = "https://hitesh.com/abhi%20yadav"

console.log(url.replace('%20', '-')) // replaces one character ffrom another


console.log(url.includes('iconic')) // checks if the string is present in url or not

console.log(gameName.split('-')); // splits based on character