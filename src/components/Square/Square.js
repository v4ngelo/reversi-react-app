import React from 'react';
import PropTypes from 'prop-types';
import Disk from '../Disk/Disk';

const Square = ({ row, column, owner }) => (
  <div className="square" row={row} column={column}>
    <Disk diskColor={`disk ${owner}`} />
  </div>
);

Square.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Square;
