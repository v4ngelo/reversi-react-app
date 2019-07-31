import React, { Component } from 'react';
import Square from '../Square/Square';

class Board extends Component {
  static createSquare() {
    return <Square />;
  }

  render() {
    const rows = [];
    for (let j = 0; j < 8; j += 1) {
      const cols = [];
      for (let i = 0; i < 8; i += 1) {
        cols.push(Board.createSquare());
      }
      rows.push(
        <div className="board-row" key={j}>
          {cols}
        </div>,
      );
    }
    return <div className="board">{rows}</div>;
  }
}

export default Board;
