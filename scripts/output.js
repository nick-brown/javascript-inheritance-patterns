console.log(person, 'object literal');

console.log(returnObj(), 'function returned object');

console.log(new constructorFunc(), 'constructor function object');


console.log(new constWithProto(), 'construction function with prototype');
new constWithProto().about();


console.log(createdObj, 'created with Object.create');

var myCar = new Car(2011), myHonda = new Honda('Element', 2011);
myCar.drive(); // works because it's on the car prototype
try {
    myCar.stop(); // DOES NOT work because it's on the Honda prototype
} catch(e) { }
myCar.crash();

myHonda.drive(); // works because it's on the car prototype
myHonda.stop(); // works because it's on the Honda prototype
myHonda.crash();

console.log(myCar, myHonda);
