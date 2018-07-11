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

  teamLogin = (team) => {
    console.log("team login");
    console.log(team);
    
    this.setState({
      loggedIn: true,
      currentTeam: team,
    })

  }

  teamLogout = () => {
    this.setState({
      loggedIn: false,
      currentTeam: {},
    })
  }

  render() {
    console.log("App State");
    console.log(this.state);
    
    
    return (
      <div>
      <NavBar teamLogout={this.teamLogout} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn === false ? <Login teamLogin={this.teamLogin} /> : <div>
        <HeroList heroes={this.state.heroList}/>
        <TeamsList /> </div>}
      </div>
    );
  }
}

export default App;
