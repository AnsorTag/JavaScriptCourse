'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING VARIABELS

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS
const {
  fri: { open, close },
} = openingHours;
// console.log(fri);

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

[secondary, main] = [secondary, main];
console.log(main, secondary);

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// THE SPREAD OPERATOR

console.log(`----------THE SPREAD OPERATOR: LECTURE----------`);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays

const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

const str = `Jonas`;
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// const ingridients = [
//   prompt(`Let's make pasta! Ingridient 1?`),
//   prompt(`Ingridient 2?`),
//   prompt(`Ingridient 3?`),
// ];

// console.log(ingridients);

// restaurant.orderPasta(...ingridients);

// OBJECTS
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };

const restaurantCopy = { ...restaurant }; // Shallow copy

// REST PATTERN

console.log(`----------REST PATTERN & PARAMETERS: LECTURE----------`);

// Spread on the right side of =
const array = [1, 2, ...[3, 4]];

// Rest on the left side of =
const [A, B, ...others] = [1, 2, 3, 4, 5];
console.log(A, B, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

// 2.Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 7, 8, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
restaurant.orderPizza(`mushrooms`);

// SHORT CIRCUITING

console.log(`----------SHORT CIRCUITING: LECTURE----------`);

console.log(`---------- OR ----------`);

// USE ANY DATA TYPEM RETURN ANY DATA TYPE, SHORT-CIRCUITING
console.log(3 || `Jonas`);
console.log('' || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`---------- AND ----------`);

console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

console.log(`Hello` && 23 && null && `jonas`);

if (restaurant.oderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

// THE NULLISH COALESCING OPERATOR ??

console.log(
  `----------THE NULLISH COALESCING OPERATOR (??): LECTURE----------`
);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guest2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// LOGICAL ASSIGNMENT OPERATORS

console.log(`----------LOGICAL ASSIGNMENT OPERATORS: LECTURE----------`);

const rest1 = {
  name: `Capri`,
  numGuests: 0,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni JoJo`,
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// NULLISH assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest2.owner = rest2.owner && `<ANONYMOUS>`;

rest2.owner &&= `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);

// LOOPING ARRAYS: THE FOR-OF LOOP

console.log(`----------LOOPING ARRAYS: THE FOR-OF LOOP: LECTURE----------`);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu2.entries()]);

// ENHANCED OBJECT LITERALS

console.log(`----------ENHANCED OBJECT LITERALS: LECTURE----------`);

// OPTIONAL CHAIN ?.

console.log(`----------OPTIONAL CHAIN (?.): LECTURE----------`);

// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

console.log(
  `----------LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES----------`
);

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}`;
}

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// SETS

console.log(`----------SETS----------`);

const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
console.log(ordersSet);
console.log(new Set(`Jonas`));

console.log(ordersSet.size);
console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Bread`));
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
ordersSet.delete(`Risotto`);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// EXAMPLE
const staff = [`Waiter`, `Chef`, `Waiter`, `Manage`, `Chef`, `Waiter`];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set([`Waiter`, `Chef`, `Waiter`, `Manage`, `Chef`, `Waiter`]).size
);

console.log(new Set(`honasschmedtmann`).size);

// MAPS

console.log(`----------MAPS----------`);

const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
console.log(rest.set(2, `Lisbon, Portugal`));

rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open`)
  .set(false, `We are closed`);

console.log(rest.get(`name`));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get(`open`) && time < rest.get(`close`));

console.log(rest.has(`categories`));
rest.delete(2);
// rest.clear();

const arra = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector(`h1`), `Heading`);
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// MAPS: ITERATION

console.log(`----------MAPS: ITERATION----------`);

const question = new Map([
  [`question`, `What's the best programming language in the world`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct!!!`],
  [false, `Try Again`],
]);

console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// const rightAnswer = answer === 3;
// console.log(question.get(rightAnswer));

// console.log(question.get(question.get(`correct`) === answer));

console.log(...question);

// WORKING WITH STRINGS I

console.log(`----------WORKING WITH STRINGS I----------`);

const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[0]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`You got middle seat`);
  else console.log(`You got lucky`);
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

// WORKING WITH STRINGS II

console.log(`----------WORKING WITH STRINGS II----------`);

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization

const passenger = `anSoRItO`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing email

const email = `hello@jonas.io`;
const loginEmail = `Hello@Jonas.Io \n`;

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing

const priceGB = `288,97£`;
const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
console.log(priceUS);

const announcment = `All passengers come to boarding door 23. Boarding door 23!`;

console.log(announcment.replaceAll(`door`, `gate`));

console.log(announcment.replace(/door/g, `gate`));

// Booleans
const plane1 = `Airbus A320neo`;
console.log(plane1.includes(`A320`));
console.log(plane1.includes(`Boeing`));
console.log(plane1.startsWith(`Air`));
console.log(plane1.endsWith(`neo`));

if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`)) {
  console.log(`Part of the NEW Airbus family`);
}

// Practice excercise
function checkBaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are not allowed on board!`);
  } else {
    console.log(`Welcome aboard!`);
  }
}

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for self-protection`);

// WORKING WITH STRINGS II

console.log(`----------WORKING WITH STRINGS III----------`);

// Split and Join
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));

const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

function capitalizaNameMy(name) {
  const nameArray = name.split(` `);

  const capitalizedArr = nameArray.map(n => n[0].toUpperCase() + n.slice(1));

  const finalName = capitalizedArr.join(` `);

  console.log(finalName);

  // console.log(nameArray);
}

function capitalizaName(name) {
  const nameArray = name.split(` `);
  const nameUpper = [];

  for (const n of nameArray) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(nameUpper.join(` `));

  // console.log(nameArray);
}

capitalizaName(`jessica ann smith davis`);
capitalizaName(`ansor tagaev`);

// Padding a string

const message = `Go to gate 23!`;
console.log(message.padStart(20, `+`).padEnd(35, `+`));
console.log(`Ansor`.padStart(20, `+`).padEnd(35, `+`));

function maskCreditCard(number) {
  const str = number + ``;

  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
}

console.log(maskCreditCard(233484209));
console.log(maskCreditCard(154897412346454));
console.log(maskCreditCard(`154897412346455652134`));

// Repeat

const messageRepeat = `Bad weather... All Departures Delayed...`;
console.log(messageRepeat.repeat(5));

function planesInLine(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);

// STRING METHODS PRACTICE

// My own solution

console.log(`----------STRING METHODS PRACTICE----------`);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const separetedFlights = flights.split(`+`);
console.log(separetedFlights);

for (const item of separetedFlights) {
  const [flightStatus, flightOut, flightIn, time] = item.split(`;`);

  const flightStatusSign = flightStatus.includes(`Delayed`)
    ? flightStatus.replace(`_`, `🔴 `).replaceAll(`_`, ` `)
    : flightStatus.replace(`_`, ``);

  const flightOutTrimmed = flightOut.slice(0, 3).toUpperCase();
  const flightInTrimmed = flightIn.slice(0, 3).toUpperCase();
  const [hour, minutes] = time.split(`:`);
  const timeTrimmed = time.replace(`:`, `h`);

  const output = `${flightStatusSign.padStart(
    20
  )} from ${flightOutTrimmed} to ${flightInTrimmed} (${timeTrimmed})`;

  console.log(output);
}
