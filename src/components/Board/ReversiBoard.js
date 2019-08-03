// prettier-ignore
export const newGameBoard = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 2, 0, 0, 0,
  0, 0, 0, 2, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

export function getSquareOwner(board, row, column) {
  return board[row * 8 + column];
}

export function setSquareOwner(board, row, column, owner) {
  board[row * 8 + column] = owner;
  return board;
}
