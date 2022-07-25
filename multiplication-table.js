const multiplicationTable = function(maxValue) {
  let table = '';
  for (let x = 1; x <= maxValue; x++) {
    for (let y = 1; y <= maxValue; y++) {
      if (y % maxValue === 0) {
        table += (x * y) + "\n";
      } else {
        table += (x * y) + " ";
      }
    }
  }
  return table;
}


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));