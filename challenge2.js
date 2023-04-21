'use strict';
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

class CarCl {
  //constructor function
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //prototype methods
  accelerator() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  static discription() {
    console.log('This is a class of car with ES6');
  }
}
const car1 = new CarCl('BMW', 100);
const car2 = new CarCl('Volvo', 120);
console.log(car1);
console.log(car2);
console.log(car1.speedUS);
car1.speedUS = 100;
console.log(car1.speed);
// car1.discription(); //error
CarCl.discription();
