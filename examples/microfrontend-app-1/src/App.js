import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ host }) {
  return (
    <div className="App1">
      <header className="App1-header">
        <img src={logo} className="App1-logo" alt="logo" />
        <p>
          Loaded from host {host} <br/>
          Edit <code>examples/microfrontend-app-1/src/App.js</code> and save to reload.
        </p>
        <a
          className="App1-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
