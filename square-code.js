const squareCode = function(message) {
  const cleanString = message.replace(/\s+/g, '').toLowerCase();
  const rowLength = Math.ceil(Math.sqrt(cleanString.length));

  // need to get matrix or array
  let row = "";
  let rectangle = [];

  for (let i = 0; i < cleanString.length; i++) {
    row += cleanString[i];
    if (i % rowLength === 0 && i !== 0) {
      rectangle.push(row.slice(0, -1));
      row = cleanString[i];
    }
  }
  rectangle.push(row);
  //console.log(rectangle)

  let results = ""

  for (let i = 0; i < rectangle[0].length; i++) {
    for (let j = 0; j < rectangle.length; j++) {
      if (rectangle[j][i]) {
        results += rectangle[j][i]
      }
    }
    results += " ";
  }
  return results;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));