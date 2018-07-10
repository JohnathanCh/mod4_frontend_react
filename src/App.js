import React, { Component } from 'react';
import './App.css';
import HeroList from './HeroComponents/HeroList'
import HeroContainer from './HeroComponents/HeroContainer';

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
    fetch('http://localhost:3000/api/v1/heroes')
    .then(resp => resp.json())
    .then(heroList => {
      this.setState({
        heroList
      })
    })

  }


  render() {
    return (
      <div>
        <HeroList heroes={this.state.heroList}/>
      </div>
    );
  }
}

export default App;
