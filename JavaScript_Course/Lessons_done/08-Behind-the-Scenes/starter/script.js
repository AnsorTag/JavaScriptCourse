'use strict';

/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    var millenial = true;
    const firstName = 'Steven';

    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = `New output`;
    }
    console.log(millenial);

    console.log(output);
  }
  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);

*/

// Hoisting with vairables

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// // let job = 'teacher';
// const year = 1991;

// // Hoisting with funtions

// console.log(addDeclaration(2, 3));
// // console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

/*

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

*/

/*

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1991);

console.log(this);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

f();

*/

/*

var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // SOLUTION 1

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // SOLUTION 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

//argument keyword

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpression(2, 5);
addExpression(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 6);

*/

/*

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: `Jonas`,
  age: 30,
};

const friend = me;

friend.age = 27;

console.log(`Friend:`, friend);
console.log(`Me:`, me);

*/

// PRIMITIVE TYPES
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;

console.log(lastName, oldLastName);

//REFERENCE TYPES
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
// console.log(`Before marriage:`, jessica);
// console.log(`After marriage:`, marriedJessica);

// COPYING OBJECTS
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;
console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);
