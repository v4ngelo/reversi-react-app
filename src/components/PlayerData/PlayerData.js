import React from 'react';
import PropTypes from 'prop-types';

const PlayerData = ({ playerName, playerDiskColor, takesTurn }) => (
  <div>
    <p>
      {' '}
      Player Name:
      {playerName}
      {' '}
    </p>
    <p>
      {' '}
      Disks Color:
      {playerDiskColor}
      {' '}
    </p>
  </div>
);

PlayerData.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerDiskColor: PropTypes.string.isRequired,
  takesTurn: PropTypes.bool.isRequired,
};

export default PlayerData;
