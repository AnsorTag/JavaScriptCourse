/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

//console output
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Job";

*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

*/

/*
let age = 30;
age = 31;

// const job;

var job = "programmer";
job = "teacher";

*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of three.

//math operators
const firstName = "Jonas";
const lastName = "Schmidtmann";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

*/

// const MarkMass = 78;
// const MarkHeight = 1.69;
// const JohnMass = 92;
// const JohnHeight = 1.95;

/*

const MarkMass = 95;
const MarkHeight = 1.88;
const JohnMass = 85;
const JohnHeight = 1.76;

let BMImark;
let BMIjohn;
let markHigherBMI;

BMImark = MarkMass / MarkHeight ** 2;
BMIjohn = JohnMass / JohnHeight ** 2;

markHigherBMI = BMImark > BMIjohn;

console.log(BMImark, BMIjohn, markHigherBMI);

*/

/*

const firstName = "Jonas";
const year = 2037;
const birthYear = 2005;
const job = "coder";

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasN = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasN);

console.log(
  "String with \n\
    multiple \n\
    lines"
);

console.log(`String
    with
    multiple
    lines`);

*/

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start drving licence 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah can NOT start drving licence! 🚗 ${yearsLeft} years left to start.`
  );
}

*/

/*

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/

/*

const MarkMass = 95;
const MarkHeight = 1.88;
const JohnMass = 85;
const JohnHeight = 1.76;

let BMImark;
let BMIjohn;

BMImark = MarkMass / MarkHeight ** 2;
BMIjohn = JohnMass / JohnHeight ** 2;

if (BMImark > BMIjohn) {
  console.log(`Mark's BMI (${BMImark}) is higher than John's (${BMIjohn})!`);
} else {
  console.log(`John's BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`);
}

*/

/*

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

*/

/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`); // this one acted because the value is false.
}

let height;
if (height) {
  console.log(`It's defined.`);
} else {
  console.log(`Undefined!`); // this one acted because the value is false.
}

*/

/*

const age = 18;
if (age === 18) console.log(`you just became an adult.`);

if (age === 18) console.log(`you just became an adult.`);

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`23 is an amazing number`);
} else if (favorite === 7) {
  console.log(`7 is also a cool number`);
} else {
  console.log(`number is not 7 or 23`);
}

if (favorite !== 23) console.log(`Why not 23?`);

*/

/*

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive`);
}

*/

/*

    CODE CHALLENGE #3

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

/*

const totalScoreDolphins = 96 + 108 + 89;
const totalScoreKoalas = 88 + 91 + 110;
const avgScoreDolphins = totalScoreDolphins / 3;
const avgScoreKoalas = totalScoreKoalas / 3;

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log(
//     `The winner is Dolphin Team! The scores: Dolphins(${avgScoreDolphins}) and Koalas(${avgScoreKoalas})`
//   );
// } else if (avgScoreDolphins === avgScoreKoalas) {
//   console.log(
//     `Draw! The scores: Dolphins(${avgScoreDolphins}) and Koalas(${avgScoreKoalas})`
//   );
// } else {
//   console.log(
//     `The winner is Koala Team! The scores: Dolphins(${avgScoreDolphins}) and Koalas(${avgScoreKoalas})`
//   );
// }

// BOOLEAN solution

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log(
    `The winner is Dolphin Team! The scores: Dolphins(${avgScoreDolphins}) and Koalas(${avgScoreKoalas})`
  );
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
  console.log(
    `The winner is Koala Team! The scores: Dolphins(${avgScoreDolphins}) and Koalas(${avgScoreKoalas})`
  );
} else if (
  (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins,
  avgScoreKoalas >= 100)
) {
  console.log(
    `Draw! The scores: Dolphins(${avgScoreDolphins}) and Koalas(${avgScoreKoalas})`
  );
}

*/

// const day = `monday`;

// switch (day) {
//   case `monday`: // if day === 'monday'
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case `tuesday`:
//     console.log(`Plan theory videos`);
//     break;
//   case `wednesday`:
//   case "thursday":
//     console.log(`Write code examples`);
//     break;
//   case "friday":
//     console.log(`Record videos`);
//     break;
//   case "saturday":
//   case "sunday":
//     console.log(`Enjoy the weekend`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
// }

/*

const day = `monday`;
let task;

if (day === `monday`) {
  task = `Plan course structure
Go to coding meetup`;
  console.log(task);
} else if (day === `tuesday`) {
  task = `Plan theory videos`;
  console.log(task);
} else if (day === `wednesday`) {
  task = `_`;
  console.log(task);
} else if (day === `thursday`) {
  task = `Write code examples`;
  console.log(task);
} else if (day === `friday`) {
  task = `Record videos`;
  console.log(task);
} else if (day === `saturday`) {
  task = `_`;
  console.log(task);
} else if (day === `sunday`) {
  task = `Enjoy the weekend!`;
  console.log(task);
} else {
  console.log(`Not a valid day!`);
}

*/

/*

const age = 23;
age >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine`;
} else drink2 = `water`;
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

*/

/* CODE CHALLENGE #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300

*/

// Prompt the user for input
// const inputBill = prompt("Enter a value: ");

// const tip =
//   inputBill >= 50 && inputBill <= 300
//     ? console.log(
//         `Bill:${inputBill}; tip:15%; Bill + tip:${0.15 * inputBill + inputBill}`
//       )
//     : console.log(
//         `Bill:${inputBill}; tip:20%; Bill + tip:${0.2 * inputBill + inputBill}`
//       );

// console.log(tip);

/*

const inputBill = prompt("Enter a value: ");
const bill = Number(inputBill);

const tip =
  bill >= 50 && bill <= 300
    ? 0.15 * bill // 15% tip
    : 0.2 * bill; // 20% tip

const total = bill + tip;

console.log(`Bill: ${bill}; tip: ${(tip / bill) * 100}%; Bill + tip: ${total}`);

*/