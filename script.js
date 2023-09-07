'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.Person = firstName;
//   this.birthYear = birthYear;

//   // Never assign functions to this object as this makes as many copies of the function as there are instance of Person
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);

// // `new` is a very special keyword for OOP, here is what is does;
// // 1. New {} is created
// // 2. function is called, this = create new object
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// // Prototypes

// console.log(`💎 Person.prototype: `, Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// console.log(`💎 jonas: `, jonas);

// console.log(`💎 jonas.__proto__: `, jonas.__proto__);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(jonas));

// console.log('💎 jonas.__proto__.__proto_', jonas.__proto__.__proto__);
// console.log(
//   '💎 jonas.__proto__.__proto__.__proto__',
//   jonas.__proto__.__proto__.__proto__
// );
// console.log(`💎 Person.prototype.constructor: `, Person.prototype.constructor);

// const arr = [3, 2, 5, 2, 3, 5, 2];
// console.log(`💎 arr.__proto__: `, arr.__proto__);

// console.log(`💎 arr.__proto__.__proto__: `, arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1')

// ES6 classes (not work like traditional classes, it is just a sugarcoat to above prototype inheritance example in coding challenge #1)

// class expression
// const PersonCl = class {
//
// }

// // class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(`💎 2037 - this.birthYear: `, 2037 - this.birthYear);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(`💎 jessica: `, jessica);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(`💎 account.latest: `, account.latest);

// account.latest = 50;
// console.log(`💎 account.movements: `, account.movements);

// Object.create()

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // I don't know that this does, learn this again
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Student.prototype is now object that inherits the Person.prototype object
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}!`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();

// Student.prototype.constructor = Student;

// Coding challenge #2 - use ES6 classes
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed; // in km/h
//   }
//   get speedUS() {
//     return this.speed / 1.6; // returns speed in mi/h
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6; //accepts speed in mi/h and sets in km/h
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`Accelarated speed = `, this.speed);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`Slowed speed = `, this.speed);
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford);

// // // Coding Challenge #1
// // 1.
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed; // in km/h
// };

// // 2.
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelarated speed = `, this.speed);
// };

// // 3.
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Slowed speed = `, this.speed);
// };

// // 4.
// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// BMW.accelerate();
// BMW.brake();

// Coding challenge #3

// // 1
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge; // in %
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeTo = function (charge) {
//   this.charge = charge;
// };

// EV.prototype.accelerate = function() {
//   this.speed += 20
//   this.charge--
//   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`)
// }

// const tesla = new EV('Tesla Model X', 110, 95);

// Inheritance with ES6 classes

// class StudentCl extends PersonCl {
//   //this constructor shall have same arguments of the parent constructor, with extended params of this child class
//   constructor(fullName, birthYear, course) {
//     // no manual parent constructor call required, instead call super() function
//     // This super call has always to be done first thing in this constructor
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012);
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // const steven = Object.create(PersonProto)

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}!`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science')

// // account we used in our bankist using class
// class Account {
//   // 1) Public fields defining syntax (instances)
//   locale = navigator.language;

//   // 2) Private fields
//   #movements = [];
//   #pin;
//   static num = 10;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property - it is not a truly protected variable, it is just used convention to signify that this is not meant to be accessed
//     this.#pin = pin;

//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening account, ${owner}!`);
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(mov) {
//     this.#movements.push(mov);
//     return this;
//   }

//   withdrawal(mov) {
//     this.deposit(-mov);
//     return this;
//   }

//   #approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved!`);
//       return this;
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// // acc1.movements.push(250)
// // acc1.movements.push(-14)
// acc1.deposit(250);
// acc1.withdrawal(140);
// acc1.requestLoan(1000);

// console.log(acc1);
// // console.log(acc1.#movements);
// // console.log(acc1.#approveLoan(100))

// // Chaining
// acc1
//   .deposit(300)
//   .deposit(500)
//   .withdrawal(35)
//   .requestLoan(25000)
//   .withdrawal(4000);

// console.log(`💎 acc1.num: `, acc1.num);
// console.log(`💎 Account.num: `, Account.num);

// Coding challenge #3

// // 1
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge; // in %
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeTo = function (charge) {
//   this.charge = charge;
// };

// EV.prototype.accelerate = function() {
//   this.speed += 20
//   this.charge--
//   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`)
// }

// const tesla = new EV('Tesla Model X', 110, 95);

// Coding challenge #4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

class EVCl extends CarC1 {
  constructor(make, speed, charge) {
    super(make, speed);

    this.charge = charge;
  }
}
