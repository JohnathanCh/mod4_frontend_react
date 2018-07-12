import React from 'react';
import HeroCard from '../HeroComponents/HeroCard';

class Team extends React.Component {
  render() {

    const teamHeroes = this.props.team.map(teamHero => {
      return <HeroCard key={teamHero.id} hero={teamHero} handleClick={this.props.removeHeroFromTeam}/>
    })
    return(
      <div className="team container">
        <div>
          <ul>
            <li className="d-flex justify-content-left" style={{width: "10rem"}}>
              {teamHeroes}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Team;
