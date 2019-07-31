import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Board from './components/Board/Board';
import Result from './components/Result/Result';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
          <Route path="/game" component={Board} />
          <Route path="/game-result" component={Result} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
