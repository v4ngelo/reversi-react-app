import React from 'react';
import PropTypes from 'prop-types';
import { diskClassColorToColor } from '../constants';

const PlayerData = ({ playerName, playerDiskColor, takesTurn }) => {
  const diskColor = diskClassColorToColor[playerDiskColor];
  const turnClass = takesTurn ? 'isNext' : '';

  return (
    <div className={turnClass}>
      <p> Player Name: </p>
      <p>
        {' '}
        {playerName}
        {' '}
      </p>
      <p> Disks Color: </p>
      <p>
        {' '}
        {diskColor}
        {' '}
      </p>
    </div>
  );
};

PlayerData.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerDiskColor: PropTypes.string.isRequired,
  takesTurn: PropTypes.bool.isRequired,
};

export default PlayerData;
