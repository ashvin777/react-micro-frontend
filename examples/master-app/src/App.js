import React from 'react';
import logo from './logo.svg';
import { Microfrontend } from 'react-micro-frontend';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Master Application</header>

      <Microfrontend
        name={'MicrofrontendApp1'}
        host={'http://localhost:4001'}
        pathname={'/'}
      ></Microfrontend>
    </div>
  );
}

export default App;
