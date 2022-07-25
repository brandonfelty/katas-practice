const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};



const camelCase = function (someString) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] === " ") {
      newString += someString[i + 1].toUpperCase();
      i++;
    } else if (i === 0) {
      newString += someString[i].toLowerCase();
    } else {
      newString += someString[i];
    }
  }
  return newString; 
};

// console.log(camelCase("Camel case for the homies"))

const pascalCase = function (someString) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (i === 0) {
      newString += someString[i].toUpperCase();
    } else if (someString[i] === " ") {
      newString += "";
    } else if (someString[i - 1] === " ") {
      newString += someString[i].toUpperCase();
    } else {
      newString += someString[i];
    }
  } 
  return newString;
};

// console.log(pascalCase("pascal case for the homies"))

const snakeCase = function(someString) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] === " ") {
      newString += "_";
    } else {
      newString += someString[i];
    }
  }
  return newString;
};

// console.log(snakeCase("snake case for the homies"))

const kebabCase = function(someString) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] === " ") {
      newString += "-";
    } else {
      newString += someString[i];
    }
  }
  return newString;
};

// console.log(kebabCase("kebab case for the homies"));

const titleCase = function(someString) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (i === 0) {
      newString += someString[i].toUpperCase();
    } else if (someString[i - 1] === " ") {
      newString += someString[i].toUpperCase();
    } else {
      newString += someString[i];
    }
  }
  return newString;
}

// console.log(titleCase("title case for the homies"));

const vowelChecker = function (letter) {
  if (letter === "a") {
    return true;
  } else if (letter === "e") {
    return true;
  } else if (letter === "i") {
    return true;
  } else if (letter === "o") {
    return true;
  } else if (letter === "u") {
    return true;
  } else {
    return false;
  }
};

const vowelCase = function(someString) {
  newString = "";
  for (let i = 0; i < someString.length; i++) {
      if (vowelChecker(someString[i])) {
        newString += someString[i].toUpperCase();
      } else {
        newString += someString[i];
      }
  }
  return newString;
};

// console.log(vowelCase("vowel case for the homies"));

const consonantCase = function(someString) {
  newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (!vowelChecker(someString[i])) {
      newString += someString[i].toUpperCase();
    } else {
      newString += someString[i];
    }
  }
  return newString;
};

// console.log(consonantCase("consonant case for the homies"));

const upperCase = function (someString) {
  let newString = "";
  return newString = someString.toUpperCase();
};

// console.log(upperCase("uppercase for the homies"));

const lowerCase = function (someString) {
  let newString = "";
  return newString = someString.toLowerCase();
};

// console.log(lowerCase("lowercase for the homies"));

const prioritizeCase = function(caseType) {
  if (caseType === "camel" || caseType === "pascal" || caseType === "snake" || caseType === "kebab" || caseType === "title") {
    return "first";
  } else if (caseType === "vowel" || caseType === "consonant") {
    return "second";
  } else {
    return "last";
  }
};


const makeCase = function(input, letterCase) {
  let newArray = [];
  let newString = "";

  if (Array.isArray(letterCase)) {
    for (let i = 0; i < letterCase.length; i++) {
      if (prioritizeCase(letterCase[i]) === "first") {
        newArray.unshift(letterCase[i]);
      } else if (prioritizeCase(letterCase[i]) === "last") {
        newArray.splice(newArray.length, 0, letterCase[i]);
      } else {
        newArray.splice(1, 0, letterCase[i])
      }
    } 
    for (let i = 0; i < newArray.length; i++) {

      if (newArray[i].includes("camel")) {
        newString = camelCase(input);
      } else if (newArray[i].includes("pascal")) {
        newString = pascalCase(input);
      } else if (newArray[i].includes("snake")) {
        
        newString = snakeCase(input);
        
      } else if (newArray[i].includes("kebab")) {
        newString = kebabCase(input);
      } else if (newArray[i].includes("title")) {
        newString = titleCase(input);
      } 
        // Priority 2
        else if (newArray[i].includes("vowel")) {
        newString = vowelCase(newString);
      } else if (newArray[i].includes("consonant")) {
        newString = consonantCase(newString);
      } 
        // priority 3
        else if (newArray[i].includes("upper")) {
        newString = upperCase(newString);

      } else if (newArray[i].includes("lower")) {
        newString = lowerCase(newString);
      } else {

        newString = "ERROR";
      }
    }
    return newString;
  } else {

    // priority 1
    if (letterCase.includes('camel')) {
      newString = camelCase(input);
    } else if (letterCase.includes('pascal')) {
      newString = pascalCase(input);
    } else if (letterCase.includes('snake')) {
      newString = snakeCase(input);
    } else if (letterCase.includes('kebab')) {
      newString = kebabCase(input);
    } else if (letterCase.includes('title')) {
      newString = titleCase(input);
    }
    
    // second priority
        else if (letterCase.includes('vowel')) {
          newString = vowelCase(input);
      } else if (letterCase.includes("consonant")) {
          newString = consonantCase(input);
      }
    
      // last priority
      else if (letterCase.includes("upper")) {
        newString = upperCase(input);
      } else if (letterCase.includes("lower")) {
        newString = lowerCase(input);
      } else {
        return "ERROR"
      }
    
  } 
  return newString;
};

 


assertEqual(makeCase("this is a string", "camel"), "thisIsAString");
assertEqual(makeCase("this is a string", "pascal"), "ThisIsAString");
assertEqual(makeCase("this is a string", "snake"), "this_is_a_string");
assertEqual(makeCase("this is a string", "kebab"), "this-is-a-string");
assertEqual(makeCase("this is a string", "title"), "This Is A String");
assertEqual(makeCase("this is a string", "vowel"), "thIs Is A strIng");
assertEqual(makeCase("this is a string", "consonant"), "THiS iS a STRiNG");
assertEqual(makeCase("this is a string", ["upper", "snake"]), "THIS_IS_A_STRING");