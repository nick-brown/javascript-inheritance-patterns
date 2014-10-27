console.log(person, 'object literal');

console.log(returnObj(), 'function returned object');

console.log(new constructorFunc(), 'constructor function object');


console.log(new constWithProto(), 'construction function with prototype');
new constWithProto().about();


console.log(createdObj, 'created with Object.create');

var myCar = new Car(2011);
myCar.drive();
myCar.stop();

var myHonda = new Honda();
myHonda.drive();
myHonda.stop();
