import React from 'react';

export default class Login extends React.Component {
    
    state = {
        login: {
            teamName: " ",
            password: " ",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.currentTarget);
        
        this.setState({
            login: {
                teamName: e.currentTarget.teamName.value,
                password: e.currentTarget.password.value
            }
        })
    }

    handleTeamNameInput = (e) => {
        console.log("Team Name input");
        console.log(e.currentTarget.value);
        
    }

    handlePasswordInput = (e) => {
        console.log("Password input");
        console.log(e.currentTarget.value);  
    }

    render() {
        console.log("state");
        console.log(this.state);
        
        
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="teamName" placeholder="Enter Your Team Name" onChange={this.handleTeamNameInput}/>
                    <input type="password" name="password" placeholder="Enter your Password" onChange={this.handlePasswordInput} />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}