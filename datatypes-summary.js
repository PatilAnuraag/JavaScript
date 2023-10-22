// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 342334535345434545n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "anuraag",
  age: 27,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof myFunction);

/* 
primitive data type has 7 type
Number = number , 
String = string,
Boolean = Boolean,
undefined = object, 
symbol=symbol,
bigint=number,
 null = object.
Non primitive
Array, object, function 
*/

/* There are 2 types of datatype
1. Primitive datatype:-
    1.String
    2. Number
    3. Boolean (true / false)
    4. null (iska matlab hai empty or zero nahi hai)
    5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
    6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
    7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

2. Preference datatype (Non Primitive datatype)
    1. Array ( [ ] )
    2. Object ( { } )
    3. Function ( function( ){ } ) */
