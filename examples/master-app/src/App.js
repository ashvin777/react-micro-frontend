import React from 'react';
import { Microfrontend } from 'react-mfe';
import './App.css';

function App() {
  return (
    <div className='Main'>
      <header className='Main-header'>Master Application</header>

      <div className='Main-content'>
        <Microfrontend
          name={'MicrofrontendApp1'}
          host={'http://localhost:4000'}
          pathname={'/'}
        />

        <Microfrontend
          name={'MicrofrontendApp2'}
          host={'http://localhost:4001'}
          pathname={'/'}
        />
      </div>
    </div>
  );
}

export default App;
