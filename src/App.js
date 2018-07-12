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
      teamList: [],
      currentTeam: {},
      loggedIn: false
    }
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

  componentDidMount() {
    this.fetchHeroList();
    this.fetchTeamList();
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

  fetchTeamList() {
    fetch('http://localhost:3000/api/v1/teams')
    .then(resp => resp.json())
    .then(teams => {
      this.setState({
        teamList: teams
      })
    })
  }


  addHeroToTeam = (hero) => {
    if(this.state.team.includes(hero)) {
      console.log('Hero is already in your team!');
    } else {
      this.setState({
        team: [...this.state.team, hero]
      })
    }
  }

  removeheroFromTeam = (teamHero) => {
    let index = this.state.team.indexOf(teamHero);
    let newTeam = this.state.team
    newTeam.splice(index, 1);
    this.setState({
      team: [...newTeam]
    })
  }
  


  render() {
    console.log(this.state.teamList);
    

    if (this.state.loggedIn === false) {
      return (
        <div className="row">
          <div className="col-4">
          <NavBar teamLogout={this.teamLogout} loggedIn={this.state.loggedIn} />
          <Login teamLogin={this.teamLogin} />
          </div>
        </div>
      )
    } else {
    return (
      <div className="row">
        <div className="col-4">
          <NavBar teamLogout={this.teamLogout} loggedIn={this.state.loggedIn} /> 
          <HeroList heroes={this.state.heroList} addHeroToTeam={this.addHeroToTeam}/>
          <div className="col-8">
            <TeamsList teams={this.state.teamList} currentTeam={this.state.team} removeHeroFromTeam={this.removeHeroFromTeam}/>
          </div> 
        </div>
      </div>
      )
    }
  }
}



export default App;
