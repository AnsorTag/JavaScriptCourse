`use strict`;

const logSeparator = (str, strLength = 50, char = `+`) =>
  str.padStart((str.length + strLength) / 2, char).padEnd(strLength, char);

// CODING CHALLANGE I
/*

Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉

*/

// Solution 1

/*

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const input = prompt(`What is your favourite programming language?
${this.options[0]}
${this.options[1]}
${this.options[2]}
${this.options[3]}
(Write option number)`);

  console.log(`This is the input: ${input}`);

  if (input >= 0 && input <= 3) {
    this.answers[input]++;
    console.log(this.answers[input]);
  } else {
    console.log(`Your input was incorrect, please choose number between 0 - 3`);
  }

  return (poll.displayResults = function (type = `array`) {
    if (type === `string`) {
      console.log(
        `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
      );
    } else {
      console.log(this.answers);
    }
  });
};

poll.displayResults = function (type = `array`) {
  if (type === `string`) {
    console.log(
      `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
    );
  } else {
    console.log(this.answers);
  }
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

*/

// Solution 2

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = Number(
      prompt(`${this.question}
  ${this.options.join('\n')}
  (Write option number)`)
    );

    console.log(`This is the input: ${input}`);

    if (
      typeof input === 'number' &&
      input >= 0 &&
      input < this.answers.length
    ) {
      this.answers[input]++;
      console.log(`Answer count updated: ${this.answers[input]}`);
    } else {
      console.log(
        `Your input was incorrect, please choose a number between 0 - 3`
      );
    }

    this.displayResults();
    this.displayResults('string');
  },

  // bonus part start
  displayResults(type = 'array', answer = this.answer) {
    type === 'string'
      ? console.log(`Poll results are ${this.answers.join(', ')}`)
      : console.log(this.answers);
    // bonus part end
  },
};

const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

//bonus start
poll.displayResults.call({ answers: Data1 }, `array`);
poll.displayResults.call({ answers: Data1 }, `string`);
poll.displayResults.call({ answers: Data2 }, `array`);
poll.displayResults.call({ answers: Data2 }, `string`);
//bonus end

// COURSE SOLUTION I

console.log(logSeparator(` COURSE SOLUTION CHALLANGE I `));

const pollCourse = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    // console.log(answer);

    typeof answer === `number` &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);

    this.displayResults();
    this.displayResults(`string`);
  },

  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  },
};

// pollCourse.registerNewAnswer();

document
  .querySelector(`.poll`)
  .addEventListener(`click`, pollCourse.registerNewAnswer.bind(pollCourse));

pollCourse.displayResults.call({ answers: Data1 }, `string`);
pollCourse.displayResults.call({ answers: Data1 });
pollCourse.displayResults.call({ answers: Data2 }, `string`);
pollCourse.displayResults.call({ answers: Data2 });

// CODE CHALLANGE II

/*

This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
(function

*/

// My own SOLUTION

console.log(logSeparator(` CODE CHALLANGE II `));

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();

// Course solution

console.log(logSeparator(` COURSE SOLUTION CHALLANGE II`));

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
