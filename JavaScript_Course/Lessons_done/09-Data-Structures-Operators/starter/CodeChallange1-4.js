`use strict`;

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// PLAYERS' NAME ARRAY DECLARATION
const players1 = game.players[0];
const players2 = game.players[1];
console.log(players1);
console.log(players2);

// GOALKEEPER1
const [goalKeeper1, ...fieldPlayers] = players1;
console.log(goalKeeper1);
console.log(fieldPlayers);

// GOALKEEPER2
const [goalKeeper2, ...fieldPlayers2] = players2;
console.log(goalKeeper2);
console.log(fieldPlayers2);

// ALL PLAYERS
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// SUBSTITUTE PLAYERS
const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

// ODDS VARIABLES

const { team1: team1, x: draw, team2: team2 } = game.odds;

console.log(team1);
console.log(draw);
console.log(team2);

// FUNCTION

// We pack it back into an array here
function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]}`);
  }

  console.log(players.length);
}

printGoals(...players1); // We spread the array here

let instance = !(team1 < team2); // We made TRUE ---> FALSE

instance ||= `Team1 is more likely to win`; // instance = instance || `Team1 is more likely to win`; intance is FALSE, so it's skipped and instance variable takes the string value.

console.log(instance);

// CODE CHALLANGE #2

console.log(`---------------- Code Challange #2 ----------------`);

// 1st Task
let i = 0;

for (const player of game.scored) {
  i++;
  console.log(`Goal ${i}: ${player}`);
}

// 2nd Task

const oddValues = Object.values(game.odds);

function avgCalc() {
  let d = 0;
  let sum = 0;

  for (let avg of oddValues) {
    d++;
    sum += avg;
  }

  const avgOdd = sum / d;
  console.log(avgOdd.toFixed(2));
}

avgCalc();

// 3rd Task

const oddKeys = Object.keys(game.odds);

function printOdds() {
  let g = 0;

  for (const teams of oddKeys) {
    if (teams === oddKeys[1]) {
      console.log(`Odd of draw: ${oddValues[g]}`);
    }
    if (teams !== oddKeys[1]) {
      console.log(`Odd of victory ${teams}: ${oddValues[g]}`);
      g++;
    }
  }
}

printOdds();

// 4th Task

const scorers = {};

for (const playerName of game.scored) {
  scorers[playerName] = (scorers[playerName] ?? 0) + 1;
}

console.log(scorers);

// CODE CHALLANGE #3

console.log(`---------------- Code Challange #3 ----------------`);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// MY OWN SOLUTION
// Task 1

const uniqueGameEvents = new Map();
const seenValues = new Set();

for (const [key, value] of gameEvents) {
  if (!seenValues.has(value)) {
    uniqueGameEvents.set(key, value);
    seenValues.add(value);
  }
}

const eventArray = [...uniqueGameEvents];
console.log(eventArray);

// Task 2

gameEvents.delete(64);
console.log(gameEvents);

// Task 3

// ez way
const avgEventOccurance = 90 / gameEvents.size;
console.log(
  `An event happened, on average, every ${avgEventOccurance} minutes`
);

// harder
const inTimeEvents = new Map();

for (const [key, value] of gameEvents) {
  if (key < 90) {
    inTimeEvents.set(key, value);
  }
}

const avgEventOccuranceInTime = 90 / inTimeEvents.size;
console.log(
  `An event happened, on average, every ${avgEventOccuranceInTime} minutes`
);

// Task 4

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}

// Course solution

// Task 1

const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2

gameEvents.delete(64);

// Task 3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happened, on averagem every ${time / gameEvents.size} minutes`
);

// Task 4

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// CODE CHALLANGE #4

console.log(`---------------- Code Challange #4 ----------------`);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector(`textarea`).textContent = `underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure`;

/*
const input = document.querySelector(`textarea`).textContent;

console.log(input);

function converter(input) {
  const lowerCase = input.toLowerCase();

  console.log(lowerCase);

  const cleanerInput = lowerCase
    .replaceAll(`  `, `-`)
    .replaceAll(`_`, `-`)
    .replaceAll(`\n`, `-`);

  console.log(cleanerInput);

  const trimmedInput = cleanerInput.trim();
  console.log(trimmedInput);

  const cleanerInputTrimmed = trimmedInput
    .replaceAll(` `, `-`)
    .replaceAll(`--`, `-`);

  console.log(cleanerInputTrimmed);

  const splitArr = cleanerInputTrimmed.split(`-`);
  console.log(splitArr);

  function camelConvert(splitArr) {}
}

document.querySelector(`button`).addEventListener(`click`, converter(input));
*/

// SOLUTION

/*

const input = document.querySelector(`textarea`).value;

const lines = input.split(`\n`);
console.log(lines);

function converter(str) {
  const cleanInput = str.toLowerCase().trim().split(`_`);

  return cleanInput
    .map((part, index) => {
      if (index === 0) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(``);
}

document.querySelector(`button`).addEventListener(`click`, () => {
  const input = document.querySelector(`textarea`).value;
  const lines = input.split(`\n`);
  lines.forEach((line, index) => {
    const camelCaseVar = converter(line);
    console.log(`${camelCaseVar} ${`✅`.repeat(index + 1)}`);
  });
});

*/

// SOLUTION 2
/*
document.querySelector(`button`).addEventListener(`click`, () => {
  const input = document.querySelector(`textarea`).value;

  const inputLines = input.split(`\n`);
  console.log(inputLines);

  const str = inputLines.join(` `);
  console.log(str);

  const str2 = str.replaceAll(`   `, ` `);
  console.log(str2);

  const str3 = str2.replace(`  `, ` `);
  console.log(str3);

  const str4 = str3.replaceAll(`_`, ` `);
  console.log(str3);

  const str5 = str4.toLowerCase();
  console.log(str4);

  const inputArray = str5.split(` `);
  console.log(inputArray);

  const newArr = [];

  for (i = 0; i < inputLines.length; i++) {
    let camelCaseStr = inputArray[0];
    for (let j = 1; j < inputArray.length; j++) {
      camelCaseStr += inputArray[j][0].toUpperCase() + inputArray[j].slice(1);
    }

    console.log(camelCaseStr);

    console.log(`${camelCaseStr} ${`✅`.repeat(i + 1)}`);
  }
});
*/

/*

document.querySelector(`button`).addEventListener(`click`, () => {
  const input = document.querySelector(`textarea`).value;

  // Split input by new lines
  const inputLines = input.split(`\n`);
  console.log(inputLines);

  // Iterate over each line using a traditional for loop
  for (let i = 0; i < inputLines.length; i++) {
    let line = inputLines[i].trim().toLowerCase();
    let words = line.split('_');

    // Convert to camelCase
    let camelCaseStr = words[0];
    for (let j = 1; j < words.length; j++) {
      camelCaseStr += words[j][0].toUpperCase() + words[j].slice(1);
    }

    console.log(camelCaseStr);
    // Output the result with the appropriate number of check marks
    console.log(`${camelCaseStr} ${'✅'.repeat(i + 1)}`);
  }
});

*/

// MY SOLUTION

document.querySelector(`button`).addEventListener(`click`, () => {
  const input = document.querySelector(`textarea`).value;

  const inputLines = input.split(`\n`);
  console.log(inputLines);

  for (let i = 0; i < inputLines.length; i++) {
    let trimVals = inputLines[i].trim().toLocaleLowerCase();
    let separateWords = trimVals.split(`_`);

    let outputStr = separateWords[0];
    for (j = 1; j < separateWords.length; j++) {
      outputStr +=
        separateWords[j][0].toUpperCase() + separateWords[j].slice(1);
    }

    console.log(`${outputStr.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});

// COURSE SOLUTION

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split(`_`);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
