const calculateChange = function (total, cash) {
  remainder = cash - total;
  let change = {
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    oneDollar: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  while (remainder > 0) {
    if (remainder >= 2000) {
      change.twentyDollars += 1;
      remainder -= 2000;
    } else if (remainder >= 1000) {
      change.tenDollars += 1;
      remainder -= 1000;
    } else if (remainder >= 500) {
      change.fiveDollars += 1;
      remainder -= 500;
    } else if (remainder >= 200) {
      change.twoDollars += 1;
      remainder -= 200;
    } else if (remainder >= 100) {
      change.oneDollar += 1;
      remainder -= 100;
    } else if (remainder >= 25) {
      change.quarters += 1;
      remainder -= 25;
    } else if (remainder >= 10) {
      change.dimes += 1;
      remainder -= 10;
    } else if (remainder >=1) {
      change.pennies += 1;
      remainder -= 1;
    }
  }
  for (let prop in change) {
    if (change[prop] === 0) {
    delete change[prop];
    }
  }  
  return change;
} 

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));