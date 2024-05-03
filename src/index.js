import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './custom.js';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>,
  document.getElementById('root')
);