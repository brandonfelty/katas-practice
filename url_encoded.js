const urlDecode = (text) => {
  let result = {};
  let word = "";

  for (let i = 0; i < text.length; i++) {
    word += text[i];
    if (text[i] === "=") {
      key = word.slice(0, -1);
      word = "";
    }
    if (text[i] === "%") {
      word = word.slice(0, -1) + " ";
      i++;
      i++;
    }
    if (text[i] === "&") {
      result[key] = word.slice(0, -1);
      word = "";
    }
  }
  result[key] = word;
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


