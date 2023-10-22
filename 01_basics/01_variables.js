const accountId = 4578392;
let accountEmail = "anuraag@gamil.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;

// accountId = 2; // not allowed for const

accountEmail = "anuraag@acadspace.org";
accountPassword = "54321";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer notify to use var
beacuse of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
