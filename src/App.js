import React, { Component } from 'react';
import './App.css';
import HeroList from './HeroComponents/HeroList'
import TeamsList from './TeamComponents/teamsList'
import HeroContainer from './HeroComponents/HeroContainer';
import Login from './Login/Login';
import NavBar from './navbar'

class App extends Component {

  constructor() {
    super();

    this.state = {
      heroList: [],
      loggedIn: false,
      currentTeam: {},
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
        {this.state.loggedIn === false ? <Login /> : <div>
        <HeroList heroes={this.state.heroList}/>
        <TeamsList /> </div>}
      </div>
    );
  }
}

export default App;
