
const user = { //this keyword inside this works for current context
    username: "Abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // output will show window in browser
// console.log(this); //{}empty object in engine

// function chai(){
//     let username = "Abhi"
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "abhi"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "abhi"
//     console.log(this);
// }


//chai()

//writing return keyword is imp when {} curly braces is used
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//no need to write return keyword when () parenthesis is used
// const addTwo = (num1, num2) =>  num1 + num2  
// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Abhishek"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})