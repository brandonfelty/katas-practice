const urlEncode = function(text) {
  text.trim();
  let newText = '';
  let percent = '%20';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newText += percent;
    } else {
      newText += text[i];
    }
  }
  return newText;
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is green than purple for sure'));