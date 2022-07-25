const urlDecode = function(text) {
  let decodedURL = {};
  let textSplit = text.replace(/%20/g, "").split("=").join(" ").split("&").join(" ").split(" ");
    // loop through the text
  for (let i = 0; i < textSplit.length; i += 2) {
    decodedURL[textSplit[i]] = textSplit[i + 1];
  }
  return decodedURL;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);