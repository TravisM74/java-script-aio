const pencil = {
    length: "7.5 inches",
    shape: "hexagonal",
    diameter: "1/4 inch",
    write: function(){
        /*do writing*/
    } ,
    erase: function(){/*do erasing*/},
    sharpen: function(){/*do sharpening*/},
}

console.log(pencil);
pencil.length = 7;
console.log(pencil);
const newPencil = {...pencil};
console.log(newPencil);
// 4 ways to create objects
/*
    » Use object literal notation.
    » Use the new keyword.
    » Use Object.create().
    » Define a class.
*/
//object literal notation
const person = {eyes: 2, feet: 2, eyeColor: 'brown'};
console.log(person);
// literal dot notation.
const person2 = {};
person2.hair = 'black';
person2.hands = 2;
person2.fullName = {firstName:'Lamont',lastName:'Rudnick'};
console.log(person2);

// using a constructor function
function Cat(name, type){
    this.name = name;
    this.type = type;
    }
    const ourCat = new Cat('Murray', 'domestic short hair')
console.log(ourCat);

// Making objects with class
class Cat2 {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
}
class Pet {
    constructor(name,type){
    this.name = name;
    this.type = type;
    }
}
const ourDog = new Pet('Chauncey','AmStaff');
console.log(ourDog);

// Making objects with Object.create()

const computer = {memory:'16GB',HD:'8TB'}
const laptop = Object.create(computer);

// Modifying Objects
// dot notation
const myLocation = {
    city: {
        id: 2643743,
        name: 'London',
        coord: {
            lon: -0.1258,
            lat: 51.5085,
        },
        country: 'GB',
        population: 9820000,
        timezone: 3600,
    },
};
console.log(myLocation.city.coord.lat);

//Using square brackets notation

console.log(myLocation['city']);
console.log(myLocation['city']['name']);

//Comparing and Copying Objects
console.log('Comparing and Copying Objects');

const firstObject = {prop1:'test', prop2:'test2'};
const secondObject = {prop1:'test', prop2:'test2'};
// the two seem the same but test as not the same because they are not the same object.
console.log(firstObject === secondObject);
//the propertiees of the object can be compaired and return a true result if they are the same.
console.log(firstObject.prop1 === secondObject.prop1);
const thirdObject = secondObject;
thirdObject.prop1 = 'orange';
console.log (secondObject.prop1 === thirdObject.prop1);
// third object if just a referance to secondObject. not a copy.
thirdObject.prop3 = 'claw hammer';
console.log (secondObject.prop3);
const fourthObject = {...secondObject};
// uses the spread operator to create a seperate Shallow copy of secondObject.

//Understanding Prototypes
console.log('Understanding Prototypes')