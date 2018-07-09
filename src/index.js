import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './navbar';

ReactDOM.render(
    <div>
        <NavBar />
        <App />
    </div>,
    document.getElementById('root')
  );
registerServiceWorker();
