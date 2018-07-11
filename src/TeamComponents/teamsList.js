import React from 'react';
import Team from './team'

class TeamsList extends React.Component {

  render() {
    console.log("teamList Component");
    console.log(this.props);
    const teams = this.props.teams.map(team => {
      console.log("map team");
      console.log(team);
      return <Team team={team} />
    })


    return(
      <div className="container team-list">
        <div className="row">
          <div className="col-10">
            <Team team={this.props.currentTeam} />
            {this.props.teams.length > 0 ? teams : null}
          </div>
        </div>
      </div>
    )
  }
}

export default TeamsList;
