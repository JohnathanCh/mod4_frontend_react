import React from 'react';

export default class NavBar extends React.Component {


    render () {
        console.log(this.props);
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h2>Hero Draft</h2>

                {this.props.loggedIn ? <button className="logout" onClick={this.props.teamLogout} >Logout</button> : null}
            </nav>
        )
    }
}
