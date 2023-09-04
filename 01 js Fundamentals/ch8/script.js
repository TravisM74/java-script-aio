bodyE = document.getElementById('body');

//Writing and Running Functions

console.log(String(10));
function addNumbers(num1, num2){
    return num1 + num2;
   }
console.log(addNumbers(2, 4));
const add2 = (num1,num2) => {return num1 +  num2}  
console.log(add2(2, 4));

bodyE.innerHTML ='<div>Functions: An Introduction</div><div id="list"><div>'
// Functions: An Introduction
listE =document.getElementById('list');
listE.innerHTML = '<li>Top-level functions</li><li>Methods of built-in objects</li>'
//Top-level functions
//Methods of built-in objects
const myString = '10'
console.log(myString);
// Using methods of built-in objects
//myString.parseInt() // parseInt() is not a function
Number.parseInt(myString);
console.log(myString);

const favoriteFood = 'tacos';
makeDinner(favoriteFood);

function makeDinner(whatToMake) {
 console.log(`I see you want ${whatToMake}.`);
 whatToMake = 'salad';
 console.log(`I've decided to make ${whatToMake} instead.`);
}

const user = { username: 'funguy37', password: '123456' };

const loginStatus = login(user);
console.log(loginStatus);

console.warn(`The password is now ${user.password}`);
function login(userCredentials) {
 if (userCredentials.password === '123456') {
 let randomString = Math.random().toString(36).slice(-16);
 userCredentials.password = randomString;
 return `Terrible password. Your password has been reset to a random string.`;
 }
 return 'Logged In';
}

// Writing Functions

function updatePageTitle(title){
    document.title = title;
   }
updatePageTitle("Welcome to my web page");

//Using a callback function
/*
    function greetInSpanish(name){
        return `Hola, ${name}`;
    }
    function getUserName(callback){
    let firstName = prompt('Enter your first name');
    return callback(firstName);
    }
    console.log(getUserName(greetInSpanish));
*/


function greetUser(firstName='Valued', lastName='Customer'){
    alert(`Hello, ${firstName} ${lastName}`);
   }
// greetUser('bob');

//given a default empty array 
function makeUnorderedList(array=[]) {
    let listItems = array.map(function (element) {
    return `<li>${element}</li>`;
    });
    return `<ul>${listItems.join('')}</ul>`;
   }
// without the default Array empty this function would throw an error
   const listOutd = makeUnorderedList();
   console.log(listOutd);
//given values to use
   const listOut = makeUnorderedList(['cat','dog','fox','rabbit']);
   console.log(listOut);
   //const listOut3 = makeUnorderedList('rabbit');
   //console.log(listOut3);

   function displayWeatherForecast(forecast){
    document.getElementById('forecast').innerHTML = `Here's the current weather 
   forecast: ${forecast}`;
   }
   displayWeatherForecast('cold and windy'); 

   function getLocalWeather(postalCode){
    if (postalCode === undefined) {
        return `I don't know what the weather is where you are.`;
        }       
    return `I don't know what the weather is like in ${postalCode}. Maybe 
   try looking out the window.`;
    
   }
   console.log(getLocalWeather(1123));

   function dR(value){
    console.log(value);
   }
   dR(getLocalWeather(4454));

   dR(getLocalWeather());

   
//Function declaration scope and hoisting


// Declaring Anonymous functions
// this example fails to run.
function doSomething(callback){
    return callback}

doSomething(function(){console.log('done.');});


//Defining function expressions
const convertMilesToKM = function (distanceInMiles) {
    const distanceInKM = distanceInMiles * 1.609;
    return distanceInKM;
   };
   console.log(convertMilesToKM(5));
//8-7


   function getThere(distance) {
    let estimatedTripDuration;
    if (water === true) {
    const getSwimTime = function () {
        method = 'swimming'
    return distance / 2;
    };
    estimatedTripDuration = getSwimTime();
    } else {
    const getWalkTime = function () {
        method = 'walking'
    return distance / 4;
    };
    estimatedTripDuration = getWalkTime();
    }
    return estimatedTripDuration;
   }
   let method = ''
   let water = true;
   let distance = 30;
   console.log(`It will take ${getThere(distance)} hours ${method} to get there.`);

   //Writing anonymous functions as arrow functions
   const pickAMovie = function (choices) {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick;
   };

   const pickAMovie2 = (choices) => {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick;
   };

   const pickAMovie3 = choices => choices[Math.floor(Math.random() * choices.
    length)];


// Knowing the limits of arrow functions
/*
THIS behavior, arrow functions created as methods of an object are 
said to be auto-bound.

Arrow functions don't have the arguments object

you can use a rest parameter, like this
*/
const myFunction = (...args) => {
    console.log(`The value of the first argument is ${args[0]}`);
   }

//   Writing Methods
// A function inside an object is called a method.
const myCar = {
    speed: 0,
    drive: function (speedLimit) {
        this.speed = speedLimit;
        console.log(`Driving at ${this.speed}mph.`);
        },
    };
    // or with dot notation
    const myCar2 = {
        speed: 0,
        drive(speedLimit) {
        this.speed = speedLimit;
        console.log(`Driving at ${this.speed}mph.`);
        },
       };

       myCar.drive(32), myCar2.drive(32);

       //Understanding Context and this
       console.log('Understanding Context and this')
       /*

       */

       // A function without context
       const myTruck = {
        speed: 0,
       };
       const myCar3 = {
        speed: 0,
       };
       function drive(speedLimit) {
        this.speed = speedLimit;
        console.log(`Driving at ${this.speed}mph.`);
       }
       drive(359);
       function drive2(vehicle, speedLimit) {
        vehicle.speed = speedLimit;
        console.log(`Driving at ${vehicle.speed}mph.`);
       }
       drive2(myTruck,60);
       drive2(myCar,90);
// Setting the context of a function

    // Using call()
       drive.call(myCar,65);
    //using apply()
    /*
    The apply() method works the same as call() but takes an array as its second 
    parameter, which will be passed to the function that apply() is applied to.
    */
    // using bind()
    const driveMyCarOnTheFreeway = drive.bind(myCar,85);
    driveMyCarOnTheFreeway();

 // Passing a function from one object to another   
    const myCar4 = {
        speed: 0,
        operate(speedLimit, callback) {
        boundCallback=(speedLimit);
        console.log(`myCar is driving at ${this.speed}`);
        },
   };
   function drive(speed) {
        this.speed = speed;
        console.log(`Start driving at ${this.speed}`);
   }
   myCar4.operate(55, drive);
   console.log(' window speed',window.speed);
   // 
   const myCar5 = {
    speed: 0,
    operate(speedLimit, callback) {
        boundCallback = callback.bind(this);
        boundCallback(speedLimit);
        console.log(`myCar is driving at ${this.speed}`);
    },
};
function drive(speed) {
    this.speed = speed;
    console.log(`Driving at ${this.speed}`);
}
myCar5.operate(55, drive);


//Passing a function to a child to change the parent

const bookstore = {
    books: ['Ulysses', 'The Great Gatsby'],
    removeBook(title) {
        let newList = this.books.filter((book) => book != title);
        this.books = newList;
        this.displayBookstore();
    },
    displayBookstore() {
        const renderTarget = document.getElementById('bookstore');
        const bookList = this.books.map((book) => `<p>${book}</p>`);
        renderTarget.innerHTML = bookList.join('');
    },
    
};
bookstore.displayBookstore();
//bookstore.removeBook('The Great Gatsby');
//bookstore.displayBookstore();


const shoppingCart = {
    itemsInCart: ['The Great Gatsby'],
    handleClick() {
        //do something here
    },
    displayCart() {
        const renderTarget = document.getElementById('cart');
        const itemsInCart = this.itemsInCart.map((item) => `<p>${item}</p>`);
        const checkoutButton = "<button id='checkout'>Check out</button>";
        renderTarget.innerHTML = itemsInCart + checkoutButton;
        document
        .getElementById('checkout')
        .addEventListener('click', () => this.handleClick());
    },
};
shoppingCart.displayCart();

// see bookstore.html
// Chaining Functions

    console.log(" my string. ".toUpperCase().trim());


    const robot = {
        currentActivity: undefined,
        walk() {
            this.currentActivity = 'walking';
            return this;
        },
        talk() {
            this.currentActivity = 'talking';
            return this;
        },
        write() {
            this.currentActivity = 'writing';
            return this;
        },
    };
    let result = robot.walk();
    let result2 = robot.talk(result);
    let result3 = robot.write(result2);
    console.log(robot.walk().talk().write());




    function greetInSpanish(name){
        return `Hola, ${name}`;
    }
    function getUserName(callback){
        let firstName = prompt('Enter your first name');
        return callback(firstName);
    }
       
       
    console.log(getUserName(greetInSpanish));