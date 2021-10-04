import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import avatar from './assets/avatar.jpg'
import user from './constants/user.json'

ReactDOM.render(
  <React.StrictMode>
    <App user={user} avatar={avatar}/>
  </React.StrictMode>,
  document.getElementById('root')
);

