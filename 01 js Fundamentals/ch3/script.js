let phoneNumber ;
phoneNumber = '503-555-5555';

let favoriteColor = 'red';

let seven = 7;
let eight = 8;
let sum = seven + eight;
console.log(sum);

/*
let firstNumber = prompt("pick a number ?");
let secondNumber = prompt("pick another number ?");
let numberSum = parseInt(firstNumber) + parseInt(secondNumber);
alert(numberSum);
*/
console.log("Types of ");
console.log(typeof "1");
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "true");
console.log(typeof a);
console.log(typeof "a");

let firstName = "Andrea";
let lastName = "wallace";
let fullName = firstName + " " + lastName;
console.log(fullName);


// using strings and functions
let randomLetters = 'pdfsdj';
randomLetters.charAt(4);

let houseNumber = '555';
let streetName = 'Shady Lane';
houseNumber.concat(' ', streetName);

let typeOfTree = 'Pine';
console.log(typeOfTree.indexOf('e'));

let vowelsList = 'a,e,i,o,u';
console.log(vowelsList.split(','));

let phoneNumber1 = '313-555-1234';
phoneNumber1.substring(12, 4);

let phoneNumber2 = '313-555-1234';
phoneNumber2.slice(4, 12);

let message = 'Learn FORTRAN.';
message.replace('FORTRAN', 'JavaScript');

let username = 'ChrisMinnick';
username.toLowerCase();

let stateName = 'texas';
stateName.toUpperCase();

// Working with numbers

console.log(parseInt(5.343235));
console.log(parseFloat(10.01));

// Knowing when to convert between strings and numbers
let tip = "8.50";
let total = 40;
let tax = 0;
let orderTotal = parseFloat(tip) + (tax) + (total);
console.log(orderTotal.toFixed(2));

// Boolean data type
console.log('Boolean comparisons');
console.log(3<10);
console.log(90<10);
console.log(true === false);
console.log(0!=="0");
console.log("apples" === "oranges");

/*
NaN data type
NaN stands for Not a Number. NaN is what you get when you try to perform 
impossible mathematical operations or when you try to perform mathematical 
operations with strings.
*/

/*
Undefined data type
Undefined is the default data type and value of a variable that’s been declared but 
not initialized in JavaScript. It’s also the value that will be returned by a statement 
or function that doesn’t specifically return a value.
*/

console.log('Symbol data type');
let symbol1 = Symbol("mysymbol");
let symbol2 = Symbol("mysymbol");
console.log(symbol1===symbol2);
 /*
Wrangling the Object: The 
Complex Data Type
In addition to its seven primitive data types, JavaScript also has a complex data 
type called object. Objects are containers for related data and functionality. For 
example, an object called customerInfo might contain a name and an address and 
various other values related to a particular customer of a business
*/
const customer = {
    name: 'Laura Wigfall',
    address: '3427 Crummit Lane',
    city: 'Providence',
    state: 'RI',
    zipcode: '02905',
    customerId: 4,
    isInLoyaltyClub: true,
   };

   console.log(customer.name);
/*
   Examining the Array — a Special 
Kind of Object
*/
const favoriteCities = [
    'Rome',
    'Berlin',
    'New York',
    'Paris',
    'Astoria',
   ];

   console.log(favoriteCities[2]);
/*
   Getting a Handle on Scope
The location where you declare a variable determines where your program can 
make use of that variable. This concept is called variable scope. JavaScript has three 
kinds of variable scope:
» Global-scoped variables can be used anywhere inside a program.

» Function-scoped variables can be used anywhere within the function where it 
was declared. You can read about functions in Book 1, Chapter 8. Function-scoped variables are created using the var keyword.

» Block-scoped variables are variables created using the let or const keyword 
and initialized inside of a block. A block in JavaScript is a unit of code that starts 
with a left curly brace ({) and ends with a right curly brace (}). Block scoped 
variables can be used anywhere within the block where they are declared.
*/