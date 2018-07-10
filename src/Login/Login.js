import React from 'react';

export default class Login extends React.Component {
    
    state = {
        teamName: " ",
        password: " ",
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="teamName" placeholder="Enter Your Team Name" />
                    <input type="password" name="password" value={this.state.password}  placeholder="Enter your Password" />
                </form>
            </div>
        )
    }
}