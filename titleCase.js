const titleCase = (string) => {
  if (string === '') {
    return '';
  }
  let newString = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      newString += ' ' + string[i + 1].toUpperCase();
      i++;
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
};

module.exports = titleCase;