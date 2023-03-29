import React from 'react';
import logo from './assets/svg/logo.svg';
import { HashRouter } from 'react-router-dom';
import Routers from './router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HashRouter>
          <Routers />
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
