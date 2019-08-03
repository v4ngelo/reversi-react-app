import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    const { changePlayerName } = this.props;
    return (
      <div className="content">
        <p>Enter first player's name:</p>
        <input
          type="text"
          name="playerOneName"
          defaultValue=""
          onChange={event => changePlayerName(1, event.target.value)}
        />
        <p> Enter second player's name:</p>
        <input
          type="text"
          name="playerTwoName"
          defaultValue=""
          onChange={event => changePlayerName(2, event.target.value)}
        />

        <Link className="button js-button" to={{ pathname: '/game' }}>
          {' '}
          Start Game
          {' '}
        </Link>
      </div>
    );
  }
}

Landing.propTypes = {
  changePlayerName: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changePlayerName: (playerNumber, playerName) => dispatch({ type: 'CHANGE_PLAYER_NAME', playerNumber, playerName }),
});

export default connect(
  null,
  mapDispatchToProps,
)(Landing);
