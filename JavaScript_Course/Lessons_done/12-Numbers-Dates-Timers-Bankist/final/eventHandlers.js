`use strict`;

// global variables
let currentAccount, timer;
let sorted = false;

// first function calls
usernameCreator(accounts);

// MAIN
////////////////////
// Event Handlers //

// Login
loginButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPassword.value) {
    labelWecome.textContent = `Welcome back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    labelWelcomeDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    appContainer.style.opacity = 100;

    inputLoginUsername.value = inputLoginPassword.value = ``;

    if (timer) clearInterval(timer);
    timer = tickTimer();

    UIupdate(currentAccount);
  }
});

// Sorting
sortButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// Transfer
transferButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  const inputAmount = +inputAmountTransfer.value;
  const receiverAccount = accounts.find(
    account => account.username === inputToUserTransfer.value
  );

  inputAmountTransfer.value = inputToUserTransfer.value = ``;

  if (
    inputAmount > 0 &&
    receiverAccount &&
    currentAccount.balance >= inputAmount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-inputAmount);
    receiverAccount.movements.push(inputAmount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    // upd UI
    UIupdate(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = tickTimer();
  }
});

// Loan
loanButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Math.floor(inputAmountLoan.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //timer
    setTimeout(function () {
      currentAccount.movements.push(amount);

      currentAccount.movementsDates.push(new Date().toISOString());

      UIupdate(currentAccount);

      // Timer reset
      clearInterval(timer);
      timer = tickTimer();
    }, 2500);

    inputAmountLoan.value = ``;
  }
});

// Close
closeButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputUsernameClose.value === currentAccount.username &&
    +inputPasswordClose.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    appContainer.style.opacity = 0;
  }

  inputPasswordClose.value = inputUsernameClose.value = ``;
});
