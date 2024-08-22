'use strict';

const logSeparator = (str, strLength = 50, char = `+`) =>
  str.padStart((str.length + strLength) / 2, char).padEnd(strLength, char);

/*

const bookingArr = [];

function createBooking(flightNum, numPassengers = 1, price = 199) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingArr.push(booking);
}

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);

const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 2374987240984,
};

function CheckIn(flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr.` + passenger.name;
  if (passenger.passport === 2374987240984) {
    alert(`Check in`);
  } else {
    alert(`Wrong passport!`);
  }
}

// CheckIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas);
CheckIn(flight, jonas);

*/

/*

function oneWord(str) {
  return str.replace(/ /g, ``).toLowerCase();
}

function upperFirstWord(str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
}

function transformer(str, fn) {
  console.log(`Original sctring: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

// JS uses callbacks all the time
function high5() {
  console.log(`👋`);
}
document.body.addEventListener(`click`, high5);

[`Jonas`, `Martha`, `Adam`].forEach(high5);

// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);

greet(`Hello`)(`Jonas`);

// Arrow version

const logSeparator = (str, strLength = 50, char = `+`) =>
  str.padStart((str.length + strLength) / 2, char).padEnd(strLength, char);

console.log(logSeparator(` Arrow function version `));

const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);

const arrowGreetHey = arrowGreet(`Hey`);
arrowGreetHey(`Antonio`);
arrowGreetHey(`Loa`);

arrowGreet(`Hello`)(`Ansor`);

*/

// THE CALL AND APPLY METHOD

const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
  },
};

lufthansa.book(239, `Jonas Schmedtmann`);
lufthansa.book(635, `John Doe`);

const eurowings = {
  name: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

// book(23, `Sarah Williams`);

book.call(eurowings, 23, `Sarah Williams`);

book.call(lufthansa, 23, `Sarah Williams`);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 583, `Mary Cooper`);

// Apply method
const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, `Sarah Williams`);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steven Williams`);

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Jonas Schmedtmann`);
bookEW23(`Martha Cooper`);

// OBJECTS WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const pushTax = (rate, value) => vat => value + value * vat;

console.log(pushTax(0.1, 100)(0.23));

// MINI CHALLANGE

// My own solution

console.log(logSeparator(` MINI CHALLANGE `));

function adTax(rate, value) {
  console.log(value + value * rate);

  return function (vatRate) {
    console.log(value + value * vatRate);
  };
}

adTax(0.1, 100)(0.23);

// Course solution

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(() => console.log(logSeparator(` IIFE `)))();

(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

// console.log(isPrivate)
(() => console.log(`This will never run again`))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);

// CLOSURES

console.log(logSeparator(` CLOSURES `));

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// MORE CLOSURE EXAMPLES

console.log(logSeparator(` CLOSURE EXAMPLES `));

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
