import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/main.scss'
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

