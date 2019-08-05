import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from '../Board/Board';
import PlayerData from '../PlayerData/PlayerData';

class Game extends Component {
  render() {
    return (
      <div>
        <Board board={this.props.gameBoard} players={this.props.players} />
        <PlayerData
          playerName={this.props.players[1].playerName}
          playerDiskColor={this.props.players[1].diskColor}
          takesTurn={this.props.currentPlayer === 1}
        />
        <PlayerData
          playerName={this.props.players[2].playerName}
          playerDiskColor={this.props.players[2].diskColor}
          takesTurn={this.props.currentPlayer === 2}
        />
        <button className="button" onClick={this.props.changeTurn}>
          Skip Turn
        </button>
      </div>
    );
  }
}

Game.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      diskColor: PropTypes.string.isRequired,
      playerName: PropTypes.string,
    }),
  ).isRequired,
  gameBoard: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  currentPlayer: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  players: state.playersReducer.players,
  gameBoard: state.gameReducer.gameBoard,
  currentPlayer: state.gameReducer.currentPlayer,
});

const mapDispatchToProps = dispatch => ({
  changeTurn: () => dispatch({ type: 'CHANGE_PLAYER_TURN' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
