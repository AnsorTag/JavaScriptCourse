`use strict`;

//////////////////////////////
// Supplemenetary functions //
// full name -> initials; Jonas Schmedtmann -> js
function usernameCreator(accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(` `)
      .map(word => word[0])
      .join(``);
  });
}

// UI update
function UIupdate(account) {
  // display movements
  displayMovements(account);

  // display balance
  displayBalance(account);

  // display summary
  displaySummary(account);
}

// Currency format
function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
}

// Date format
function formattedMovementDate(date, locale) {
  const calculateDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calculateDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}
