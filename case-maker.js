const camelCase = function(input) {
  let output = "";
  for (i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") {
      output += (input.charAt(i + 1).toUpperCase())
      i++;
    } else {
      output += input.charAt(i);
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));