import React, { Component } from 'react';
import { newGameBoard } from '../Board/ReversiBoard';
import Board from '../Board/Board';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      board: newGameBoard,
    };
  }

  render() {
    const { board } = this.state;
    const { players } = this.props;
    return <Board board={board} players={players} />;
  }
}
