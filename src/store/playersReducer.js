const initialState = {
  players: [
    { diskColor: ' ' },
    { diskColor: 'black-disk', playerName: 'Player One' },
    { diskColor: 'white-disk', playerName: 'Player Two' },
  ],
};

const playersReducer = (state = initialState, action) => {
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

export default playersReducer;
