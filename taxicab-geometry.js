const blocksAway = function(directions) {
  let coordinates = {
    east: 0,
    north: 0
  };

  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "right") {
      coordinates.east += directions[i + 1];
    } else if (directions[i] === "left") {
      coordinates.east -+ directions[i + 1];
    } 
  }
  
  return coordinates;
}