const organizeInstructors = function(instructors) {
  let organizedByCourse = {};
  // takes in an object of instructors with name and course as properties
  //need to loop through the instructors object
  for (let i = 0; i < instructors.length; i++) {
    // define variable that is equal to the course property
    let courseName = instructors[i].course;
    // returns true if the course is in the newly created object
    if (courseName in organizedByCourse) {
      organizedByCourse[courseName].push(instructors[i].name); //pushes the instructor name into the properties created
    } else { // create a property in the new object of the course name
      organizedByCourse[courseName] = [instructors[i].name];
    }
  }
  return organizedByCourse;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));