'use strict';

const logSeparator = (str, strLength = 50, char = `+`) =>
  str.padStart((str.length + strLength) / 2, char).padEnd(strLength, char);

// CHALLANGE I: MY SOLUTION
console.log(logSeparator(` CODE CHALLANGE I: MY OWN SOLUTION `));
console.log(logSeparator(` ---------------- `));

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

function checkDogs(jData, kData) {
  //   console.log(`OG array: ${jData}`);

  const trimmedDataJulia = jData.slice(1, -2);

  //   console.log(`The trimmed array: ${trimmedDataJulia}`);

  const combinedArray = trimmedDataJulia.concat(kData);

  combinedArray.forEach(function (dogAge, index) {
    dogAge > 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
  });
}

console.log(logSeparator(` first data `));

checkDogs(juliaData, kateData);

console.log(logSeparator(` Second data `));

checkDogs(juliaData2, kateData2);

// CHALLANGE I: COURSE SOLUTION
console.log(logSeparator(` CODE CHALLANGE I: COURSE SOLUTION `));
console.log(logSeparator(` ---------------- `));

const checkDogsCourse = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dogAge, index) {
    dogAge >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
  });
};

console.log(logSeparator(` first data `));

checkDogsCourse(juliaData, kateData);

console.log(logSeparator(` Second data `));

checkDogsCourse(juliaData2, kateData2);

// CHALLANGE II: MY SOLUTION

// SOLUTION I
console.log(`\n`);
console.log(logSeparator(` CODE CHALLANGE II: MY OWN SOLUTION `));

const Data1Challange2 = [5, 2, 4, 1, 15, 8, 3];
const Data2Challange2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHuman(array) {
  const ageArray = [];
  let humanAge = 0;
  let avgAge = 0;

  array.forEach(function (age) {
    humanAge = age <= 2 ? (humanAge = 2 * age) : (humanAge = 16 + age * 4);
    ageArray.push(humanAge);
  });

  const adultHumanAge = ageArray.filter(currentElement => currentElement > 18);

  console.log(adultHumanAge);

  avgAge =
    adultHumanAge.reduce((acc, age) => acc + age, 0) / adultHumanAge.length;

  console.log(`Average age is : ${Math.round(avgAge)}`);
}

console.log(logSeparator(` data1 `));

calcAverageHuman(Data1Challange2);

console.log(logSeparator(` data2 `));

calcAverageHuman(Data2Challange2);

// SOLUTION II
console.log(`\n`);
console.log(logSeparator(` CODE CHALLANGE II: MY OWN SOLUTION №2 `));

function calcAverageHumanII(array) {
  const humanAges = array.map(age => (age <= 2 ? 2 * age : 16 + 4 * age));

  const adultHumanAges = humanAges.filter(age => age >= 18);
  console.log(`Adult human ages: ${adultHumanAges}`);

  const avgAge =
    adultHumanAges.reduce((acc, age) => acc + age, 0) / adultHumanAges.length;
  console.log(`Average age is: ${Math.round(avgAge)}`);
}

console.log(logSeparator(` data1Solution2 `));

calcAverageHumanII(Data1Challange2);

console.log(logSeparator(` data2Solution2 `));

calcAverageHumanII(Data2Challange2);

// CHALLANGE II: COURSE SOLUTION

console.log(`\n`);
console.log(logSeparator(` CODE CHALLANGE II: COURSE SOLUTION `));

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adultDogs = humanAges.filter(age => age >= 18);

  //   const avgAge =
  //     adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

  const avgAge = adultDogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return avgAge;

  console.log(humanAges);
  console.log(adultDogs);
};

const avg1 = calcAverageHumanAge(Data1Challange2);
const avg2 = calcAverageHumanAge(Data2Challange2);

console.log(avg1, avg2);

// CHALLANGE III: MY SOLUTION
console.log(`\n`);
console.log(logSeparator(` CODE CHALLANGE III: MY OWN SOLUTION `));

const Data1Challange3 = [5, 2, 4, 1, 15, 8, 3];
const Data2Challange3 = [16, 6, 10, 5, 6, 1, 4];
// function calcAverageHumanII(array) {
//     const humanAges = array.map(age => (age <= 2 ? 2 * age : 16 + 4 * age));

//     const adultHumanAges = humanAges.filter(age => age >= 18);
//     console.log(`Adult human ages: ${adultHumanAges}`);

//     const avgAge =
//       adultHumanAges.reduce((acc, age) => acc + age, 0) / adultHumanAges.length;
//     console.log(`Average age is: ${Math.round(avgAge)}`);
//   }

function calcAverageHumanArrow(array) {
  const avgAge = array
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(adultAgeOnly => adultAgeOnly >= 18)
    .reduce((acc, age, index, array) => acc + age / array.length, 0);

  console.log(avgAge);
}

console.log(logSeparator(` data1Solution3 `));

calcAverageHumanArrow(Data1Challange3);

console.log(logSeparator(` data2Solution3 `));

calcAverageHumanArrow(Data2Challange3);

// COURSE CHALLANGE III: COURSE SOLUTION

// COURSE CHALLANGE IV: MY SOLUTION
console.log(`\n`);
console.log(logSeparator(` CODE CHALLANGE IV: MY OWN SOLUTION `));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Calculate and add recommended portion
dogs.forEach(curObject => {
  curObject.recommendedPortion = Math.round(curObject.weight ** 0.75 * 28);
  curObject.weight += 'kg';
});

// Create arrays for owners
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > 1.1 * dog.recommendedPortion)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < 0.9 * dog.recommendedPortion)
  .flatMap(dog => dog.owners);

// Log the msg
if (ownersEatTooMuch.length > 0) {
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
}

if (ownersEatTooLittle.length > 0) {
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
}

// Find Sarah's dog and check
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (sarahsDog) {
  if (sarahsDog.curFood > 1.1 * sarahsDog.recommendedPortion) {
    console.log("Sarah's dog is eating too much");
  } else if (sarahsDog.curFood < 0.9 * sarahsDog.recommendedPortion) {
    console.log("Sarah's dog is eating too little");
  } else {
    console.log("Sarah's dog is eating an okay amount");
  }
} else {
  console.log("Sarah's dog not found.");
}

// Exact amount
const anyDogEatingExact = dogs.some(
  dog => dog.curFood === dog.recommendedPortion
);
console.log(anyDogEatingExact);

// Okay amount
const anyDogEatingOkay = dogs.some(
  dog =>
    dog.curFood > 0.9 * dog.recommendedPortion &&
    dog.curFood < 1.1 * dog.recommendedPortion
);
console.log(anyDogEatingOkay);

// Okay amount New array
const dogsEatingOkay = dogs
  .filter(
    dog =>
      dog.curFood > 0.9 * dog.recommendedPortion &&
      dog.curFood < 1.1 * dog.recommendedPortion
  )
  .map(dog => dog.owners.join(' and ') + "'s dog");

console.log(dogsEatingOkay);

// Shallow copy
const shallowCopy = dogs.slice();
console.log(
  shallowCopy.sort((a, b) => a.recommendedPortion - b.recommendedPortion)
);

console.log(dogs);
console.log('Owners of dogs who eat too much:', ownersEatTooMuch);
console.log('Owners of dogs who eat too little:', ownersEatTooLittle);
