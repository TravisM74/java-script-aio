class Beverage {
    constructor(size,temperature) {
    this.size = size;
    this.temperature = temperature;
    }
    drink(){
        if (this.temperature !== 'scalding'){
            console.log('now drinking');
        }
    }
       
}

class Coffee extends Beverage {
    constructor(size, temperature, hasCaffeine, howYouTakeIt){
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
    }
    //overriding a method
    drink(){
        if (this.temperature != 'scalding') {
            console.log('now drinking coffee');
        }
    }
}

const morningCoffee = new Coffee('64oz', 'hot', true, 'black');
console.log(morningCoffee);
morningCoffee.drink();

// Defining methods, properties, and fields

class Cat {
    //fields
    paws = 4;
    sound = 'meow';
    //static
    static species = 'Felis catus';
    //private
    #isSleeping = true;
    constructor(name, favoriteToy) {
        this.name = name;
        this.favoriteToy = favoriteToy;
    }
    //static
    static herd(){
        throw new Error(`You can't do that.`);
        }
    //private
    #takeNap(){
        this.#isSleeping = true;
        }
    //public
    wakeup(){
        this.#isSleeping = false;
    }
    play(){
        if (this.#isSleeping) console.log(this.name + ' is sleeping') 
        else {
            console.log(this.name + ' is playing with ' + this.favoriteToy );
            this.#takeNap();
        }
    }
}

    // Public members
    // fields are by default public members
    //private members use a # before the field.

    //Static members

    //Practicing and Becoming comfortable with Classes
    const cat1 = new Cat('Mr. Furly', 'tinfoil');
    const cat2 = new Cat('Sparky', 'box');
    
    cat1.play();
    console.log(cat2);
    cat1.wakeup();
    cat1.play();
    console.log(cat1.paws);
    //Cat.herd();
    
    class ShortHair extends Cat {
        fur = 'short';
        constructor(name, favoriteToy){
            super(name, favoriteToy);
        }
    }
    const cat3 = new ShortHair('murry', 'keyboard');
    console.log(cat3);
