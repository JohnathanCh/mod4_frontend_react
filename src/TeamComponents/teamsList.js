import React from 'react';
import Team from './team'

class TeamsList extends React.Component {

  render() {
    const teams = this.props.teams.map(team => {
      return <Team team={team} removeHeroFromTeam={this.props.removeHeroFromTeam}/>
    })

    return(
      <div className="container team-list">
        <div className="row">
          <div className="col-10">
            <Team team={this.props.currentTeam} removeHeroFromTeam={this.props.removeHeroFromTeam} />
            {this.props.teams.length > 0 ? teams : null}
          </div>
        </div>
      </div>
    )
  }
}

export default TeamsList;
