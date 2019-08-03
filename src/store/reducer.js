const initialState = {
  players: [
    { diskColor: ' ' },
    { diskColor: 'black-disk', playerName: 'Player One' },
    { diskColor: 'white-disk', playerName: 'Player Two' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER_NAME':
      console.log(
        `Changed player name  to: ${action.playerName}, playerNumber: ${action.playerNumber}`,
      );
      break;
    default:
      return state;
  }
};

export default reducer;
