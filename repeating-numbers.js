//let input = [[1, 2], [2, 3]];

const repeatNumbers = function(data) {
  let output = [];
  let result = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0];
      //output.push(data[i][0])
    }
    output.push(result);
    result = '';
  }
  return output.join(',')
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));