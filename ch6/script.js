const colors = ['red','green','blue'];
console.log(colors);

/*
Method Return Value
concat()    A new array made up of the current array, joined with other arrays and/or values
every()     True if every element in the given array satisfies the provided testing function
filter()    A new array with all the elements of a current array that test true by the given function
forEach()   Completes the function once for each element in the array
includes()  Determines whether an array includes a specified value and returns true or false
indexOf()   Finds the first occurrence of the specified value within the array; returns –1 if the value 
            is not found
join()      Joins all elements of an array into a string
lastIndexOf() Finds the last occurrence of the specified value within the array; returns –1 if the value 
            is not found
map()       Creates a new array with the result of a provided function on every element in the array
pop()       Removes the last element in an array
push()      Adds new items to the end of an array
reduce()    Reduces the values in an array to a single value by applying a function to them (from 
            left to right)
reverse()   Reverses the order of elements in an array
shift()     Removes the first element from an array and returns that element, resulting in a change 
            in length of an array
slice()     Selects a portion of an array and returns it as a new array
some()      Returns true if one or more elements satisfy the provided testing function
sort()      Creates a new array by sorting the elements in an array
splice()    Returns a new array composed of elements that were added or removed from a 
            given array
toString()  onverts an array to a string
unshift()   Returns a new array with a new length by the addition of one or more elements
*/

const ingredients = ['eggs','milk','cheese','garlic','onion','kale','salt',
'pepper'];
console.log(ingredients);
let removedElement = ingredients.pop();
console.log(removedElement);
console.log(ingredients);
ingredients.push('chili flakes');
console.log(ingredients);
let removedFirst = ingredients.shift();
console.log(removedFirst);
console.log(ingredients);
ingredients.unshift('eggs');
console.log(ingredients);
const ingedSlice = ingredients.slice(3,6);
console.log(ingedSlice);
console.log(ingredients);
ingredients.splice(3,3);
console.log(ingredients);
//Looping with Array Methods
console.log('Looping with Array Methods');
function doMath(value,mathToDo){
    let result = mathToDo(value);
    return result;
}
const circumference = doMath(4,function(radius){return 2*Math.PI*radius});

console.log(circumference);

// Reducing an array
console.log('Reducing an array')
let prices = [4.99,3,98,54.99];
let total = 0;

total = prices.reduce(
    function(previousValue,currentValue){
    return previousValue + currentValue;
    }
);
console.log(total);

/* Mapping an array
The map() array function takes a callback function and returns a new array with 
the result of applying the callback function to each element of the array.
*/
console.log('Mapping an array');
const ingredientsNew = [
    'eggs',
    'milk',
    'cheese',
    'garlic',
    'onion',
    'kale',
    'salt',
    'pepper',
   ];
   let listItems = ingredientsNew.map(
        (singleIngredient) => `<li>${singleIngredient}</li>`
   );
   console.log(listItems);
   
