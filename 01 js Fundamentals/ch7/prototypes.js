function Vehicle(speed) {
    this.speed = speed;
    this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
    };
}

const Automobile = new Vehicle(55);
console.log(Automobile);
Automobile.wheels = 4;
Automobile.engine = 'electric';

console.log(Automobile);

const Truck = Object.create(Automobile);
console.log(Truck);

Automobile.doors = 4;

console.log(Truck);
Truck.hasOwnProperty('doors');
Truck.doors = 2;
Truck.hasOwnProperty('doors');
Truck.maxHaul = '1 ton';
Truck.hasOwnProperty('maxHaul');

// Deleting Object Properties
delete Truck.doors;