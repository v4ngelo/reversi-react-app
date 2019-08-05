import { Player } from '../components/constants';

// prettier-ignore
const newGameBoard = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 2, 0, 0, 0,
  0, 0, 0, 2, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

function newGame() {
  return {
    currentPlayer: Player.One,
    gameBoard: newGameBoard,
    boardHistory: [newGameBoard],
    playerHint: new Map(),
  };
}

const gameReducer = (state = newGame(), action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER_TURN':
      // eslint-disable-next-line no-case-declarations
      const nextPlayer = state.currentPlayer === Player.One ? Player.Two : Player.One;

      return {
        ...state,
        currentPlayer: nextPlayer,
      };
    default:
      return state;
  }
};

export default gameReducer;
