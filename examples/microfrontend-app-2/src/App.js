import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {  
  return (
    <div className="App2">
      <header className="App2-header">
        <img src={logo} className="App2-logo" alt="logo" />
        <p>
          Loaded from host {props.host} <br/>
          Edit <code>examples/microfrontend-app-2/src/App.js</code> and save to reload.
        </p>
        <a
          className="App2-link"
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
