import React from 'react';
import ReactDOM from 'react-dom';
import { register } from 'react-micro-frontend';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

register({
  name: 'MicrofrontendApp1',
  containerId: 'root',
  render: () => (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
});

//   'MicrofrontendApp1',
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   'root'
// )

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
