"use strict";

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

// const interface = `Audio`;
// const private = 5000;
// const if = 20

*/

/*

function logger() {
  console.log(`My name is Jonas`);
}

//calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const apple_orangeJuice = fruitProcessor(2, 4);
console.log(apple_orangeJuice);

*/

/*

//Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(2005);

//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2005);

console.log(age1, age2);

*/

/*

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2005, `Ansor`));
console.log(yearsUntilRetirement(2000, `Jank`));

*/

/*

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces}pieces of apples and ${orangePieces}pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  //   return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2005, `Ansor`));
console.log(yearsUntilRetirement(1950, `Bobby`));

*/

/*

CODE CHALLENGE #5: FUNCTIONS

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 

*/

/* SOLUTION

const calcAverage = (totalScore) => totalScore / 3;
                                                                                DON'T REPEAT YOURSELF IN THE FUTURE!!!
function avgScoreTeam1(score1team1, score2team1, score3team1) {
  const totalScore = score1team1 + score2team1 + score3team1;
  const average1 = calcAverage(totalScore);
  return average1;
}

function avgScoreTeam2(score1team2, score2team2, score3team2) {
  const totalScore = score1team2 + score2team2 + score3team2;
  const average2 = calcAverage(totalScore);
  return average2;
}

function checkWinner(avgScoreTeam1, avgScoreTeam2) {
  if (avgScoreTeam1 > 2 * avgScoreTeam2) {
    const winner = `Dolphins`;
    console.log(`${winner} win (${avgScoreTeam1} vs. ${avgScoreTeam2})`);
  } else if (avgScoreTeam2 > 2 * avgScoreTeam1) {
    const winner = `Koalas`;
    console.log(`${winner} win (${avgScoreTeam1} vs. ${avgScoreTeam2})`);
  } else {
    console.log(`No team wins (${avgScoreTeam1} vs. ${avgScoreTeam2})`);
  }
}

//Data 1
// const score1team1 = 44;
// const score2team1 = 23;
// const score3team1 = 71;
// const score1team2 = 65;
// const score2team2 = 54;
// const score3team2 = 49;

//Data 2
const score1team1 = 85;
const score2team1 = 54;
const score3team1 = 41;
const score1team2 = 23;
const score2team2 = 34;
const score3team2 = 27;

const averageTeam1 = avgScoreTeam1(score1team1, score2team1, score3team1);
const averageTeam2 = avgScoreTeam2(score1team2, score2team2, score3team2);

checkWinner(averageTeam1, averageTeam2);

*/

/*

const friend1 = `Michael`;
const friend2 = `Steve`;
const friend3 = `Lupa`;

const friends = [`Michael`, `Steve`, `Lupa`];
console.log(friends);
// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);
// friends = [`bob`, `al`];

const firstName = `Jonas`;
const Jonas = [firstName, `Schmidtmann`, 2037 - 1991, `teacher`, friends];
console.log(Jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

*/

/*

const friends = [`Michael`, `Steve`, `Lupa`];

// Add elements
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Steve`));
console.log(friends.indexOf(`bbo`));

friends.push(23);
console.log(friends.includes(`Steve`));
console.log(friends.includes(`bbo`));
console.log(friends.includes(23));

if (friends.includes(`Steve`)) {
  console.log(`You have a friend called Steve`);
}

*/

/*  CODE CHALLENGE #6:ARRAYS

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 

*/

/*

// FIRST SOLUTION

function findTip(bill) {
  let tipValue;

  if (bill >= 50 && bill <= 300) {
    const tip = 0.15;
    tipValue = tip * bill;
  } else {
    const tip = 0.2;
    tipValue = tip * bill;
  }

  return tipValue;
}

function calcTip(bill) {
  const tipValue = findTip(bill);
  return bill + tipValue;
}

const Bills = [125, 555, 44];
const Tips = Bills.map(findTip);
const Total = Bills.map(calcTip);

console.log(Tips);
console.log(Total);

//SECOND SOLUTION

function calcTips(bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
}

console.log(calcTips(100));

const bills = [125, 555, 44];

const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
const total = [
  calcTips(bills[0]) + bills[0],
  calcTips(bills[1]) + bills[1],
  calcTips(bills[2]) + bills[2],
];

console.log(tips);
console.log(total);

*/

/*

const JonasArray = [
  `firstName`,
  `Schmidtmann`,
  2037 - 1991,
  `teacher`,
  [`Mich`, `Lop`, `Sui`],
];

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmidtman`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Mich`, `Lop`, `Sui`],
};

*/

/*

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmidtman`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Mich`, `Lop`, `Sui`],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = "Name";
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

// console.log(jonas.`last` + nameKey)

const interestedIn = prompt(
  `What do you want to know about Jonas? Choose: first name, last name, age, job, and friends`
);

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    `Wrong request. Choose: first name, last name, age, job, and friends`
  );
}

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmidtman`;
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

// const Jonas = {
//   firstName: `Jonas`,
//   NoOfFriends: 3,
//   bestFriend: `Michael`,
// };

// console.log(
//     `${Jonas.firstName} has ${Jonas.NoOfFriends} friends, and his best friend is called ${Jonas.bestFriend}`
//   );

*/

/*

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmidtman`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Mich`, `Lop`, `Sui`],
  hasDriverLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    if (this.hasDriverLicense == true) {
      console.log(
        `${this.firstName} is a ${this.age}-years old ${this.job}, and he has a driver's license`
      );
    } else {
      console.log(
        `${this.firstName} is a ${this.age}-years old ${this.job}, and he has no driver's license`
      );
    }
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas[`calcAge`](1991));

// if (jonas.hasDriverLicense == true) {
//   console.log(
//     `${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he has a driver's license`
//   );
// } else {
//   console.log(
//     `${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he has no driver's license`
//   );
// }

console.log(jonas.getSummary());

*/

/* CODE CHALLENGE #7:OBJECTS AND METHODS

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall

*/

// SOLUTION

/*

const Mark = {
  firstName: `Mark`,
  lastName: `Bell`,
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  firstName: `John`,
  lastName: `Jay`,
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

Mark.calcBMI();
John.calcBMI();

if (Mark.calcBMI > John.calcBMI) {
  console.log(
    `${Mark.firstName}'s BMI (${Mark.BMI}) is higher than ${John.firstName}'s BMI (${John.BMI})!`
  );
} else {
  console.log(
    `${John.firstName}'s BMI (${John.BMI}) is higher than ${Mark.firstName}'s BMI (${Mark.BMI})!`
  );
}

console.log(John.BMI);

console.log(`---------`);

*/

/*

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep}`);
}

*/

/*

const JonasArray = [
  `Jonas`,
  `Schmidtmann`,
  2037 - 1991,
  `teacher`,
  [`Mich`, `Lop`, `Sui`],
  true,
];

const types = [];

for (let i = 0; i < JonasArray.length; i++) {
  console.log(JonasArray[i], typeof JonasArray[i]);

  // Filling types array
  //   types[i] = typeof JonasArray[i];

  // Filling with push method
  types.push(typeof JonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < JonasArray.length; i++) {
  if (typeof JonasArray[i] !== `string`) continue;

  console.log(JonasArray[i], typeof JonasArray[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < JonasArray.length; i++) {
  if (typeof JonasArray[i] === `number`) break;

  console.log(JonasArray[i], typeof JonasArray[i]);
}

console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < JonasArray.length; i++) {
  if (typeof JonasArray[i] !== `string`) continue;

  console.log(JonasArray[i], typeof JonasArray[i]);
}

*/

/*

const JonasArray = [
  `Jonas`,
  `Schmidtmann`,
  2037 - 1991,
  `teacher`,
  [`Mich`, `Lop`, `Sui`],
  true,
];

for (let i = JonasArray.length - 1; i >= 0; i--) {
  console.log(JonasArray[i]);
}

// LOOP IN LOOP

for (let excercise = 1; excercise <= 3; excercise++) {
  console.log(`---- Starting excercise ${excercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${excercise}:Lifting weights repitition ${rep} 🏋️‍♀️`);
  }
}

*/

// for (let rep = 1; rep < 6; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
// }

// console.log(`--- --- --- ---`);

/*

let rep = 1;

while (rep <= 10) {
  //   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}

*/

/* CODE CHALLENGE #8:FOR LOOPS AND WHILE LOOPS

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

*/

// SOLUTION

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  let totalV = bills[i] + tips[i];
  total.push(totalV);
}

console.log(tips);
console.log(total);

// Bonus

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  const avg = sum / arr.length;
  return avg;
}

console.log(calcAverage(bills));
