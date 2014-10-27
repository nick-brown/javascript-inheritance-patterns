// Parent class
var Homo = function() { };

// prototype property all children will receive
Homo.prototype.locomotion = 'bipedal';

// Child class
var Sapien = function() {
    // Pass arguments to parent
    Homo.apply(this, arguments);
};

var man1 = new Sapien();
// will not work because man1 was created before prototype chain was established
console.log(man1.locomotion); // undefined

// Establish prototype inheritance by pointing child prototype to a new empty 
// object that points to the parent's prototype
Sapien.prototype = Object.create(Homo.prototype);

var man2 = new Sapien();

console.log(man1.locomotion); // still won't work because man1 came before proto chain
console.log(man2.locomotion); // will work because man2 was created after proto chain
