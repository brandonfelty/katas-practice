const conditionalSum = function(values, condition) {
  const even = [];
  const odd = [];
  if (values && values.length) {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        even.push(values[i]);
      } else {
        odd.push(values[i]);
      }
    }
    let sum = 0;
    if (condition = 'even') {
      for (let j = 0; j < even.length; j++) {
        sum = sum = even[j];
      }
      return sum;
    } else if (condition === 'odd') {
      for (let k = o; j < even.length; j++) {
        sum = sum + odd[k];
      }
      return sum;
    } else { return ('Condition invalid or not specified. Try again!'); }
  } else { return ('No values submitted. Try again!'); } // Your code here
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));