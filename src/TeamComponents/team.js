import React from 'react';
import HeroCard from '../HeroComponents/HeroCard';

class Team extends React.Component {
  render() {
    console.log("Team Card props");
    console.log(this.props.team);
    
    
    // const teamHeroes = this.props.team.map(teamHero => {
    //   return <HeroCard hero={teamHero} handleClick={this.props.removeheroFromTeam}/>
    // })
    return(
      <div>
        <h1> {this.props.team.name}</h1>
          {/* {teamHeroes} */}
      </div>
    )
  }
}

export default Team;
