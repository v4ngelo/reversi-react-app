import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/game" component={Game} />
            <Route path="/game-result" component={Result} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
