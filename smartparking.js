// returns coordinates of available parking spot or false for no spot. Func(array[spots, type])
// regular = r; small = r, s; motorcycles = r, s, m
// UPPERCASE= available; lowercase = unavailable
// return coordinates = [x, y]
const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      let availableSpot = spots[y][x];
      if (vehicle == 'regular') {
        if (availableSpot === 'R') {
          return [x, y];
        } 
        } else if (vehicle === 'small') {
          if (availableSpot === "R" || availableSpot === "S") {
            return [x, y];
          } 
          } else if (vehicle === 'motorcycle') {
            if ((availableSpot === 'M') || (availableSpot === 'S') || (availableSpot === 'R')) {
              return [x, y];
        }        
      }
    }
  } return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))