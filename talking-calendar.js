const talkingCalendar = function(date) {
  let dateSplit = date.split("/");
  let year = dateSplit[0];
  let month = dateSplit[1];
  let day = dateSplit[2];
  const months = [ "January", "Februaru", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (month = 01) {
    month = months[0];
  } else if (month = 02) {
    month = months[1];
  } else if (month = 03) {
    month = months[2];
  } else if (month = 04) {
    month = months[3];
  } else if (month = 05) {
    month = months[4];
  } else if (month = 06) {
    month = months[5];
  } else if (month = 07) {
    month = months[6];
  } else if (month = 08) {
    month = months[7];
  } else if (month = 09) {
    month = months[8];
  } else if (month = 10) {
    month = months[9];
  } else if (month = 11) {
    month = months[10];
  } else {
    month = months[11]
  }
  if (day === "02" || day === "22") {
    day = Number(day) + "nd" //using unary + operator to get rid of the leading zero 
  } else if (day === "01" || day === "21" || day === "31") {
    day = Number(day) + "st"
  } else if (day === "03" || day === "23") {
    day = Number(day) + "rd"
  } else {
    day = Number(day) + "th"
  }
  let fullDate = month + " " + day + ", " + year;
  return fullDate;
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));