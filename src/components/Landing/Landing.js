import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="content">
    <p>This is player One:</p>
    <input />
    <p>This is player Two:</p>
    <input />

    <Link className="button js-button" to={{ pathname: '/game' }}>
      {' '}
      Start Game
      {' '}
    </Link>
  </div>
);

export default Landing;
