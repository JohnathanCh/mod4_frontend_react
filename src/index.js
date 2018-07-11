import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './navbar';

ReactDOM.render(
    <div className="container">
        <div>
          <NavBar />
        </div>
        <div>
          <App />
        </div>
    </div>,
    document.getElementById('root')
  );
registerServiceWorker();
