import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
