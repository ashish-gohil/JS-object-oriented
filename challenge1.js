'use strict';
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// OOP with constructor function
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;

  // function attached to all the objects not efficient as it will create one copy for each object
  this.car = function () {
    console.log(`${this.make} car`);
  };
};
// prototype methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
Car.prototype.display = function () {
  // console.log(this);
  console.log(`'${this.make}' going at ${this.speed}km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercdes', 95);
console.log(car1);
console.log(car2);

car1.accelerate();
car1.brake();
car2.brake();
car2.accelerate();

console.log(`'${car1.make}' going at ${car1.speed}km/h`);
car1.display();
console.log(`'${car2.make}' going at ${car2.speed}km/h`);

// arrow function does not have this keyword it will borrow this keyword from its parent element
// const func = () => {
//   console.log(this);
// };
// func();
