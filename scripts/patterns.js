// Object literal
// one time objects, singletons, or hashes
var person = {
    name: 'Dave',
    age: 33, 
    occupation: 'Supply Chain Manager'
};


// Function that returns an object 
// factory pattern -- complex objects that obfuscate how it's built
var returnObj = function() {
    
    // private method 
    var adder = function(op1, op2) {
        return op1 + op2; 
    };

    // public properties
    return {
        name: 'Dave',
        age: adder(11, 22),
        occupation: 'Supply Chain Manager'
    }

    // assigning a prototype to returnObj will not yield any results because 
    // the actual object literal that is returned has none
};

// Constructor function 
// "CLASS" -- used with new keyword
var constructorFunc = function() {
    // calling new while building this function will...
    // -make a newly created object available to the constructor's 'this' keyword
    // -assign the object's prototype to the one pointed by the constructor's ptotoype property
    // -returns it implicitly 
    this.name = 'Dave';
    this.age = 33;
    this.occupation = 'Supply Chain Manager';

    // no return statement because the new object is returned implicitly
};


// Constructor with a prototype
var constWithProto = function() {
    this.name = 'Dave';
    this.age = 33;
    this.occupation = 'Supply Chain Manager';
};


// the prototype -- when you assign the prototype property of a function it is 
// NOT the function's prototype, but where the prototype of a new function will
// point IF this function is used as a constructor

// prototypes are a reference to the prototypes of objects created by that 
// function, meaning that if I point it to an entirely new object, the 
// prototype chain will not travel any further than that object
constWithProto.prototype.about = function() {
    console.log(this.name + ' is a ' + this.age + ' year old ' + this.occupation);
};

var dave = new constWithProto();
dave.about(); // Dave is a 33 year old Supply Chain Manager

constWithProto.prototype.about = function() {
    console.log('who cares how old this person is or what they do?');
};

var chris = new constWithProto();
dave.about(); // who cares how old this person is or what they do?
chris.about(); // who cares how old this person is or what they do?


// Creator -- sets the created object's prototype to the passed object
var createdObj = Object.create({
    about: function() {
        console.log(this.name + ' is a ' + this.age + ' year old ' + this.occupation);
    }
}, {
    foo: { writable: false, configurable: true, value: 'hello' },
    bar: { 
        configurable: false,
        get: function() { return 10; },
        set: function(value) { console.log('setting createdObj.bar to', value); }
    }
});

// "Parent" class
var Car = function(year) {
    this.year = year;
};

Car.prototype.drive = function() {
    console.log('Vrooom');
};

// "Child" class
var Honda = function(make) {
    this.make = make;

    // take "make" out of the arguments and pass the rest on to Car
    Car.apply(this, Array.prototype.slice.call(arguments, 1));
};

// A prototype constructor -- using this intermediary layer prevents methods
// set on the child's prototype from being added to the parent's prototype
var ctor = function() { };
ctor.prototype = Car.prototype;

// Inheritance by indirectly setting the prototype to the parent's prototype
Honda.prototype = new ctor();

Honda.prototype.stop = function() {
    console.log('stooopppp!');
};

Car.prototype.crash = function() {
    console.log('screeeeeechcrash!');
};
