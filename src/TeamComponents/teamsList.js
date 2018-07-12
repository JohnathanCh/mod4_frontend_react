import React from 'react';
import Team from './team'

class TeamsList extends React.Component {

  render() {
    console.log("teamList Component");
    console.log(this.props);

    const teams = this.props.teams.map(team => {
      console.log("map team");
      console.log(team);
      // debugger

      return <Team team={team} />
    })


    return(
      <div className="container team-list">
        <div className="row">
          <div className="col-10">
          {/* <Team currentTeam={this.props.currentTeam} className="currentTeam" /> */}
            <ul>
              {this.props.teams.length > 0 ? teams : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamsList;
