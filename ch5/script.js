// if . . . else statements
let country = 'Liberia';
let temperature = 90;
if (country === "United States" || country === "Liberia"){
    temperature = temperature + "F";
   } else {
    temperature = (temperature - 32) * 5 / 9 + "C";
   }
   let coffeeMakerIsOff = false;
   if (coffeeMakerIsOff) {
    turnOnCoffeeMaker();
   }
// Multiple paths with if else
let pet = 'kangaroo'; 
   if (pet === 'cat') {
    greeting = 'Good kitty';
   } else if (pet === 'dog') {
    greeting = 'Who\'s a good boy or girl?';
   } else if (pet === 'parrot') {
    greeting = 'Wanna cracker?';
   } else {
    greeting = 'Hi.';
   }

   /*
   The ternary operator
Conditional statements can also be written using the conditional operator. The 
conditional operator is also known as the ternary operator. The conditional operator shortens if ... else statements to a single expression, which is often useful 
when doing conditional rendering with ReactJS, Vue.js, or Svelte.
*/
const dt = new Date();
console.log(dt);

const hours = dt.getHours();
console.log(hours);
let msg;
msg = hours < 12 ? ('Good morning!') : ('Welcome');
console.log(msg);

/*
Switch statements
The switch statement decides which statement to run based on the result of a 
single expression. Each possible outcome of a switch statement is called a case. 
Here’s the syntax for the switch statement
*/
let expression = 'x';
switch(expression){
    case 'x':
    // code to run when expression === x
    break;
    case 'y':
    // code to run when expression === y
    break;
    default:
    // code to run if nothing else matches expression
   }

   //for . . . of loops
   const pets = ['cat', 'dog', 'chicken'];
    for (let pet of pets) {
    console.log(pet);
}
let text = "spell me.";
for (let character of text) {
 console.log(character);
}
/*
break and continue statements
The break and continue statements can be used to interrupt the execution of a 
loop. The break statement causes the current loop or control statement to exit. 
You may have read about break earlier in this chapter, where I tell you about the 
switch statement
*/
let phoneNumber = "555-757-1212";
for (let digit of phoneNumber) {
    // continue is used to remove dashes from it:
 if (digit==='-') continue;
 console.log(digit);
}