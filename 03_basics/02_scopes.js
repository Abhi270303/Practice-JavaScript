//var c = 300 // we'll not use var

//Global scope
let a = 300

if (true) { //block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Abhishek"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Abhishek"
    if (username === "Abhishek") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) // function ko declaration ke pehle access kar sakte isme

function addone(num){
    return num + 1
}



// addTwo(5) // function ko declaration ke pehle access nahi kar sakte isme
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))