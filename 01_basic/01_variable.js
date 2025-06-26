
const accountId = 144553  //constant
let accountEmail = "Keshav@google.com"  //character/string  (Mostly Used)
var accountPassword = "12345"    //character/string
accountCity = "Jaipur"     //character/string
let accountState;         //Undefined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
