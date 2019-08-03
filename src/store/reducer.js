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

const initialState = {
  players: [
    { diskColor: ' ' },
    { diskColor: 'black-disk', playerName: 'Player One' },
    { diskColor: 'white-disk', playerName: 'Player Two' },
  ],
  gameBoard: newGameBoard,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER_NAME':
      return {
        ...state,
        players: [...state.players].map((player, index) => {
          if (index === action.playerNumber) {
            return {
              ...player,
              playerName: action.playerName,
            };
          }
          return player;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
