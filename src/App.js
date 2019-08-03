import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import Landing from './components/Landing/Landing';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      players: {
        0: ' ',
        1: 'black-disk',
        2: 'white-disk',
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          <BrowserRouter>
            <Route path="/" exact render={() => <Landing players={this.state.players} />} />
            <Route path="/game" render={() => <Game players={this.state.players} />} />
            <Route path="/game-result" component={Result} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
