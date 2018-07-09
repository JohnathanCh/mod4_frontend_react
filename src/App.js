import React, { Component } from 'react';
import './App.css';
import HeroContainer from './HeroComponents/HeroContainer';
import HeroList from './HeroComponents/HeroList'

class App extends Component {

  constructor() {
    super();

    this.state = {
      heroList: []
    }
  }

  componentDidMount() {
    this.fetchHeroList();
  }

  fetchHeroList() {
    fetch('http://localhost:3001/api/v1/heroes')
    .then(resp => resp.json())
    .then(heroList => {
      this.setState({
        heroList
      })
    })

  }


  render() {
    return (
      <div className="App">
          <h1>Hello from the App</h1>
          <HeroContainer />
      {/* <div>
        <HeroList heroes={this.state.heroList}/> */}

      </div>
    );
  }
}

export default App;
