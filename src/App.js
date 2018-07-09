import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroContainer from './HeroComponents/HeroContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello from the App</h1>
          <HeroContainer />
      </div>
    );
  }
}

export default App;
