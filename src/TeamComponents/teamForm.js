import React from 'react';

class TeamForm extends React.Component {
  constructor() {
    super();

    this.state = {
      teamName: ''
      // heroes: []
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        teamName: this.state.teamName
      })
    }

    fetch('http://localhost:3001/api/v1/heroes', options)
    .then(resp => resp.json())
    .then(team => this.props.addTeam(team))

    this.setState({
      teamName: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="team name" value={teamName} onChange={this.handleChange}></input>
          <input type="submit">Create Team</input>
        </form>
      </div>
    )
  }
}

export default TeamForm;
