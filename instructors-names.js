const instructorWithLongestName = function(instructors) {
  let longestName = "";
  let index = -1;
  for (i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name;
    if (instructors[i].name.length > longestName.length) {
      longestName = nameLength;
      index = longestName.indexOf(longestName[i]);
    }
  }
  return instructors[index];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));