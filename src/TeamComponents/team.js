import React from 'react';
import HeroCard from '../HeroComponents/HeroCard';

class Team extends React.Component {
  render() {

    const teamHeroes = this.props.team.map(teamHero => {
      return <HeroCard hero={teamHero} handleClick={this.props.removeheroFromTeam}/>
    })
    return(
      <div>
        <h1> Team Component </h1>
        <ul>
          {teamHeroes}
        </ul>
      </div>
    )
  }
}

export default Team;
