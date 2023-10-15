// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semi colon to end this part of code otherwise will run continously

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Abhishek')
