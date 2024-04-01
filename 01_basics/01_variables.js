const accountId = 144563
let accountEmail = "yuvrajsinhjadeja710@gmail.com"
var acountPassword = "12345"
accountCity = "Ahmedabad"

let accountState;

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Jamnagar"

/*
->prefer not to use var
because of issue in block scope and functional scope

->mostly used Let and const only

->const - once value declare then its not change
->let - after value declare you also change value

->when you declare variable but you not add value then JavaScript accept it undefined
*/ 


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
