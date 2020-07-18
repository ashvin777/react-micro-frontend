import React from 'react';
import { register } from 'react-micro-frontend';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

register({
  name: 'MicrofrontendApp2',
  containerId: 'root',
  render: (props) => (
    <React.StrictMode>
      <App {...props}/>
    </React.StrictMode>
  )
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
