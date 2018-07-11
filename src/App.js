import React, { Component } from 'react';
import './App.css';
import HeroList from './HeroComponents/HeroList'
import TeamsList from './TeamComponents/teamsList'
import HeroContainer from './HeroComponents/HeroContainer';

class App extends Component {

  constructor() {
    super();

    this.state = {
      heroList: [],
      teamList: [],
      team: []
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
    console.log("team List in app");
    console.log(this.state.teamList);
    console.log(this.state.team);

    return (
      <div className="row">
        <div className="col-4">
          <HeroList heroes={this.state.heroList} addHeroToTeam={this.addHeroToTeam}/>
        </div>
        <div className="col-8">
          <TeamsList teams={this.state.teamList} currentTeam={this.state.team} removeHeroFromTeam={this.removeHeroFromTeam}/>
        </div>
      </div>
    );
  }
}



export default App;
