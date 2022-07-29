const blocksAway = function(directions) {
  let coordinates = {
    east: 0,
    north: 0
  };

  let facing =  "north";
  if (directions[0] === "left") {
    facing = "east";
  }

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "right") {
      switch (facing) {
        case 'north':
          coordinates.east += directions[i + 1];
          facing = 'east';
          break;
        case 'east': 
          coordinates.north -= directions[i + 1];
          facing = 'south';
          break;
        case 'south': 
          coordinates.east -= directions[i + 1];
          facing = 'west';
          break;
        case 'west': 
          coordinates.north += directions[i + 1];
          facing = 'north';
          break;
        default:
          console.log("please use directions")
      }
    } 
    if (directions[i] === "left") {
      switch (facing) {
        case 'north':
          coordinates.east -= directions[i + 1];
          facing = 'west';
          break;
        case 'east': 
          coordinates.north += directions[i + 1];
          facing = 'north';
          break;
        case 'south': 
          coordinates.east += directions[i + 1];
          facing = 'east';
          break;
        case 'west': 
          coordinates.north -= directions[i + 1];
          facing = 'south';
          break;
        default:
          console.log("please use directions")
      }
    } 
  }
  
  return coordinates;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));