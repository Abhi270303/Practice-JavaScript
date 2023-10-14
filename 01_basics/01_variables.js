const accountId = 17765
let accountEmail = "abhishek@google.com"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ay@ay.com"
accountPassword = "987654321"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])