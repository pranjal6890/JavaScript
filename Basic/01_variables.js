console.log('hello world');
const AccountId=23516
let AccountName="Pranjal"
var AccountPlace="Jaipur"
AccountEmail="gdvhe@gmail.com" // a variable can be create dwithout intializing

// AccountId=23456(const cant be updated it will give a warning)
console.log(AccountId);

AccountName="pg" // let and var can be updated . but var is not used commonly as its scope is not defined
console.log(AccountName);

let EmptyVariable // this type of variables can be created but they will give  avalue undefined

// instead of printig all these one by one we will use a table
console.table([AccountId,AccountName,AccountPlace,AccountEmail,EmptyVariable])

