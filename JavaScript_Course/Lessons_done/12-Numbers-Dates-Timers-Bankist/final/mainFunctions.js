`use strict`;

////////////////////
// Main functions //
// Money movement display
function displayMovements(account, sort = false) {
  movementContainer.innerHTML = ``;

  const moves = sort // -> a new array of sorted movements
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  moves.forEach(function (movement, index) {
    const typeOfMovement = movement >= 0 ? `deposit` : `withdrawal`;

    const date = new Date(account.movementsDates[index]);
    const formattedDate = formattedMovementDate(date, account.locale);
    const formattedValue = formatCurrency(
      movement,
      account.locale,
      account.currency
    );

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${typeOfMovement}">${typeOfMovement}</div>
          <div class="movements__date">${formattedDate}</div>
          <div class="movements__value">${formattedValue}</div>
          </div>
          `;

    movementContainer.insertAdjacentHTML(`afterbegin`, html);
  });
}

// Display balance
function displayBalance(account) {
  account.balance = account.movements.reduce(
    (acc, movement) => acc + movement,
    0
  );
  labelBalance.textContent = `${formatCurrency(
    account.balance,
    currentAccount.locale,
    currentAccount.currency
  )}`;
}

// IN OUT INTEREST -> SUMMARY DISPLAY
function displaySummary(account) {
  const income = account.movements
    .filter(movement => movement >= 0)
    .reduce((accum, inc) => accum + inc);
  labelIncome.textContent = `${formatCurrency(
    income,
    currentAccount.locale,
    currentAccount.currency
  )}`;

  const outcome = account.movements
    .filter(movement => movement < 0)
    .reduce((accum, inc) => accum + inc);
  labelOutcome.textContent = `${formatCurrency(
    Math.abs(outcome),
    currentAccount.locale,
    currentAccount.currency
  )}`;

  const interest = account.movements
    .filter(movement => movement >= 0)
    .map(deposits => (deposits * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelInterest.textContent = `${formatCurrency(
    interest,
    currentAccount.locale,
    currentAccount.currency
  )}`;
}

function tickTimer() {
  function tick() {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(Math.trunc(time % 60)).padStart(2, 0);

    timerLabel.textContent = `${minutes}:${seconds}`;

    if (time === 0) {
      clearInterval(timer);
      labelWecome.textContent = `Log in to get started`;
      appContainer.style.opacity = 0;
    }

    time--;
  }

  let time = 5;

  tick();

  const timer = setInterval(tick, 1000);

  return timer;
}
