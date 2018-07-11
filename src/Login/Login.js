import React from 'react';

export default class Login extends React.Component {
    
    state = {
        login: {
            name: " ",
            password: " ",
        }
    }

    createTeam() {

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/api/v1/teams', options)
        .then(resp => resp.json())
        .then(team => this.props.teamLogin(team))
    }

    handleSignup = (e) => {
        e.preventDefault()
        this.createTeam()
        
    }



    handleTeamNameInput = (e) => {
        this.setState({
            login: {
                ...this.state.login,
                name: e.currentTarget.value
            }
        })
        
    }

    handlePasswordInput = (e) => { 
        this.setState({
            login: {
                ...this.state.login,
                password: e.currentTarget.value
            }
        })
    }

    render() {
        // console.log("Login state");
        // console.log(this.state);
        
        
        return (
            <div>
                <form onSubmit={this.handleSignup} >
                    <input type="text" name="name" placeholder="Enter Your Team Name" onChange={this.handleTeamNameInput} value={this.state.teamName} />
                    <input type="password" name="password" placeholder="Enter your Password" onChange={this.handlePasswordInput} value={this.state.password} />
                    <button type="submit" >Signup</button>
                </form>
            </div>
        )
    }
}