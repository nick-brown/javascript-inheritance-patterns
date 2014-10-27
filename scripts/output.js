console.log(person, 'object literal');

console.log(returnObj(), 'function returned object');

console.log(new constructorFunc(), 'constructor function object');


console.log(new constWithProto(), 'construction function with prototype');
new constWithProto().about();


console.log(createdObj, 'created with Object.create');

var myCar = new Car(2011);
myCar.drive(); // works because it's on the car prototype
myCar.stop(); // DOES NOT work because it's on the Honda prototype

var myHonda = new Honda();
myHonda.drive(); // works because it's on the car prototype
myHonda.stop(); // works because it's on the Honda prototype
