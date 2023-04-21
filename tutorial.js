'use strict';

// ////////////////////////////////////////////
// // ES6 class
// // behind a scene classes are implemented as constructor function

// // class decleration
// // class Person {}

// // class expretion
// const PersonCl = class {
//   constructor(fullname, birthYear) {
//     this.fullname = fullname; // this will call sretter method first to set fullname property
//     this.birthYear = birthYear;

//     // non-prototypal method (same as methods which are declered inside constuctor function)
//     this.func = function () {
//       console.log(this.fullname);
//     };
//   }

//   //   static method
//   static fun = function () {
//     console.log('hello! inside static method');
//   };

//   //prototype methods are included here after constructoe func.
//   calAge() {
//     console.log(2023 - this.birthYear);
//   }

//   //getter
//   get fullname() {
//     return this._fullname;
//   }

//   //setter
//   set fullname(name) {
//     if (name.includes(' ')) this._fullname = name;
//     else alert('Enter full name!');
//   }
// };

// const ashish = new PersonCl('ashish gohil', 2000);
// console.log(ashish);
// console.log(ashish.hasOwnProperty('func')); //true
// console.log(ashish.hasOwnProperty('calAge')); //false
// console.log(PersonCl.hasOwnProperty('func')); //false
// console.log(PersonCl.hasOwnProperty('calAge')); //false
// console.log(PersonCl.hasOwnProperty('fun')); //true (static method)
// ashish.calAge(); //23
// console.dir(Object());
// console.dir(PersonCl);
// PersonCl.fun(); //hello! inside static method

// ////////////////////////////////////////////
// // getter setter : it is used when need a property which will require some pre calculations

// // getter-setter in object literal
// const obj = {
//   name: 'Ashish',
//   movement: [10, 20, 30],
//   get latest() {
//     return this.movement.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };
// console.log(obj.latest); // get latest movement
// obj.latest = 40; // add latest movement at last
// console.log(obj.movement);

// // getter-setter in class - refer above class
// console.log(ashish.fullname); //this will call first get method and fetch fullname
// ashish.fullname = 'Payal barvaliya'; // this will first call setter method and set fullname property with 'Payal barvaliya'

// //////////////////////////////////////////////////////////
// // Object.create

// const PersonProto = {
//   calAge() {
//     console.log(2023 - this.birthYear);
//   },
//   displayName() {
//     console.log(`My name is ${this.fname}`);
//   },
//   init(fname, birthYear) {
//     this.fname = fname;
//     this.birthYear = birthYear;
//   },
// };

// const ashishProto = Object.create(PersonProto);
// ashishProto.init('Ashish', 2000);
// console.log(ashishProto);

// //
// ///////////////////////////////////////////////
// Inheritance

// 1) inheritance with constructor function
const Parent = function (name, dob) {
  this.name = name;
  this.dob = dob;
};

const Child = function (name, dob, gender) {
  Parent.call(this, name, dob);
  this.gender = gender;
};
Parent.prototype.calAge = function () {
  console.log(2023 - this.dob);
};
// console.log(Object.create(Parent.prototype)); // empty object
Child.prototype = Object.create(Parent.prototype); //fake object is created and assigned to Child prototype

// child prototype methods must be created after child prototype is linked with person prototype
Child.prototype.intro = function () {
  console.log(this);
};

Child.prototype.constructor = Child; // In order to point Child.prototype.constructor to Child itself otherwise it will point to Parent constructor function
// console.dir(Parent.prototype.constructor);
// console.dir(Child.prototype.constructor);
Child.prototype.intro = function () {
  console.log(this);
};

// //
// 2) inheritance with ES6 class
class ParentCl {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }
  // prototype methods
  calAge() {
    console.log(2023 - this.dob);
  }
}

class ChildCl extends ParentCl {
  constructor(name, dob, gender) {
    super(name, dob);
    this.gender = gender;
  }
  //prototype methods (use w/o function keyword)
  intro() {
    console.log(this);
  }
}

const p1 = new Parent('Ashish', 2000);
// console.dir(p1); //Parent.prototype
const c1 = new Child('Payal', 1998, 'female');
const c2 = new ChildCl('Payal', 1997, 'female');
const p2 = new ParentCl('Ashish', 2000);
console.log(c2);
console.log(c1);
console.log(c1.hasOwnProperty('intro')); // false
console.log(c2.hasOwnProperty('intro')); // false
console.log(c1 instanceof Parent); // true
console.log(c2 instanceof ParentCl); // true
console.log(p1);
console.log(p2);
console.log(c1.__proto__ === Child.prototype); // true
// console.log(Child.prototype);
// console.log(Child.prototype === Parent.prototype); //false
// console.log(Child.prototype === Parent); //false
// console.log(Child instanceof Parent); // false
console.log(Child.prototype.__proto__ === Parent.prototype); //true ->>>> IMP.
// console.log();
// console.log(Parent.prototype);
console.log(p1.__proto__ === Parent.prototype); // true
console.log(ChildCl.__proto__ === ParentCl); //true ]->>>>>>> IMP
// console.log(ChildCl.__proto__ === ParentCl.prototype.constructor); //true
console.log(ChildCl.prototype.__proto__ === ParentCl.prototype); //true
//

//
// 3) inheritance with bject.create

const ParentProto = {
  calAge() {
    console.log(2023 - this.dob);
  },
  init(name, dob) {
    this.name = name;
    this.dob = dob;
  },
};

const p3 = Object.create(ParentProto);
p3.init('Ashish', 2000);

const ChildProto = Object.create(ParentProto);
ChildProto.init = function (name, dob, gender) {
  ParentProto.init.call(this, name, dob);
  this.gender = gender;
};
ChildProto.intro = function () {
  console.log(this);
};
const c3 = Object.create(ChildProto);
c3.init('Payal', 1997, 'female');

console.log(p1);
console.log(c1);
console.log(p2);
console.log(c2);
console.log(p3);
console.log(c3);
// console.log(Parent.prototype.hasOwnProperty('calAge')); // true
// console.log(ParentCl.prototype.hasOwnProperty('calAge')); //true
// console.log(ParentProto.prototype.hasOwnProperty('calAge')); // there is no prototype for Object.create (throw error)

// //
/////////////////////////////////////////////////////////////////
// Encapsulation in Java Script (public/protected/private attribute and methods)
class Account {
  // public
  locale = navigator.language;

  //protected
  _movement = [];

  //private
  #pin;
  // #movement = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.#movement = [];
    this.locale = navigator.language;
    console.log('Thank you for registration!');
  }
  deposite(val) {
    this._movement.push(val);
  }
  withdrow(val) {
    this.deposite(-val);
  }
  #approveLoan(val) {
    console.log(val);
    return True;
  }
  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposite(val);
    }
  }
}

const acc1 = new Account('Ashish', 'INR', 1111);
acc1.deposite(400);
acc1.deposite(434);
acc1.withdrow(300);
acc1.requestLoan(2000);
// console.log(acc1.#pin); // private is not accessbile outside
console.log(acc1._movement); // protected
// console.log(acc1.#movement);
// console.log(acc1.#approveLoan(45));
