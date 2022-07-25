const generateBoard = function (whiteQueen, blackQueen) {

  let board = [];
  let boardJ = [];

  for (let i = 0; i < 8; i++) {
    let boardJ = [];
    for (let j = 0; j < 8; j++) {
      if ((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)) {
        boardJ.push(1)
      } else {
        boardJ.push(0)
      }
    }
    board.push(boardJ)
  }
  return board
}

const queenThreat = function(generatedBoard) {
  let result = 'false'
  if (
    (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) ||
    (blackQueen[0] === whiteQueen[0]) ||
    (blackQueen[1] === whiteQueen[1])
  ) {
    result = true;
  }
  return result;
}

let whiteQueen = [0, 5];
let blackQueen = [1, 6];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));