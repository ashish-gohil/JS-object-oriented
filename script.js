'use strict';
// OOP with constructor function
const Person = function (fname, birthYear) {
  this.fname = fname;
  this.birthYear = birthYear;

  //object method - not a efficient way
  //   this.calAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

// steps behind a scene
//1. new empty object is created
//2. function is called on newly created object and 'this' keyword is set to object
//3. object is linked to prototype
//4. function automatically return object
const ashish = new Person('ashish', 2000);
console.log(ashish);
// ashish.calAge();

console.dir(Person.prototype.constructor); // give constructor function itsef
console.log(Person.prototype);

// prototype of construction function
Person.prototype.calAge = function () {
  // prototype function(efficient way)
  console.log(2023 - this.birthYear);
};
console.log(ashish.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(ashish)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //flase
console.log(ashish.hasOwnProperty('calAge')); //flase
// prototype is a kind of collcetion of methods.. which instance/object(ex. ashish) can access
// .__proto__ is kind of method to access prototype of a constructor function/class
console.log(ashish.__proto__); // Person.prototype
console.log(ashish.__proto__.__proto__); // Object.prototype
console.log(ashish.__proto__.__proto__.__proto__); // null

// Built-in prtotype
const h1 = document.querySelector('h1');
console.log(h1); // it will show h1 element
console.dir(h1); // it will show h1 as object

//prototypal chaining
console.dir(h1); // h1 object
console.log(h1.__proto__); // HTMLHeadingElement
console.log(h1.__proto__.__proto__); // HTMLElement
console.log(h1.__proto__.__proto__.__proto__); // lement
console.log(h1.__proto__.__proto__.__proto__.__proto__); // Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); //EventTarget
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); //Object
console.log(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
); //null
