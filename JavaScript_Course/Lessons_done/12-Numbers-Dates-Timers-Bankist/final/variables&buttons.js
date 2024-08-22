`use strict`;

// Account info
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Element selection
const loginButton = document.querySelector(`.login`);
const sortButton = document.querySelector(`.btn--sort`);
const transferButton = document.querySelector(`.form__btn--transfer`);
const loanButton = document.querySelector(`.form__btn--loan`);
const closeButton = document.querySelector(`.form__btn--close`);

const timerLabel = document.querySelector(`.timer`);

const labelWelcomeDate = document.querySelector(`.date`);

const labelIncome = document.querySelector(`.summary__value--in`); // SUMMARY LABELS
const labelOutcome = document.querySelector(`.summary__value--out`);
const labelInterest = document.querySelector(`.summary__value--interest`);

const inputLoginUsername = document.querySelector(`.login__input--user`); // LOGIN INPUT FIELDS
const inputLoginPassword = document.querySelector(`.login__input--pin`);

const inputAmountTransfer = document.querySelector(`.form__input--amount`); // TRANSFER INPUT FIELDS
const inputToUserTransfer = document.querySelector(`.form__input--to`);

const inputAmountLoan = document.querySelector(`.form__input--loan-amount`); // LOAN INPUT FIELD

// CLOSE INPUT FIELDS
const inputUsernameClose = document.querySelector(`.form__input--user`);
const inputPasswordClose = document.querySelector(`.form__input--pin`);

const appContainer = document.querySelector(`.app`);
const movementContainer = document.querySelector(`.movements`);

const labelWecome = document.querySelector(`.welcome`);
const labelBalance = document.querySelector(`.balance__value`);
