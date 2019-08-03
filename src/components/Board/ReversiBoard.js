export function getSquareOwner(board, row, column) {
  return board[row * 8 + column];
}

export function setSquareOwner(board, row, column, owner) {
  board[row * 8 + column] = owner;
  return board;
}
