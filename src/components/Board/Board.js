import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';
import { getSquareOwner } from './ReversiBoard';

class Board extends Component {
  static createSquare(row, column, owner, key) {
    return <Square row={row} column={column} owner={owner} key={key} />;
  }

  render() {
    const { board, players } = this.props;
    const rows = [];
    for (let row = 0; row < 8; row += 1) {
      const cols = [];
      for (let column = 0; column < 8; column += 1) {
        const owner = getSquareOwner(board, row, column);
        cols.push(Board.createSquare(row, column, players[owner], row * 8 + column));
      }
      rows.push(
        <div className="board-row" key={row}>
          {cols}
        </div>,
      );
    }
    return <div className="board">{rows}</div>;
  }
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  players: PropTypes.shape({
    0: PropTypes.string.isRequired,
    1: PropTypes.string.isRequired,
    2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Board;
