import React from 'react';
import HeroList from './HeroList';

export default class HeroContainer extends React.Component {

    state ={
        heroList: [],
    }

    componentDidMount() {
        // This is where we will make the fetch request to our backend
    }

    render () {
        return (
            <div className="heroContainer" >
                <h2>Hello from the Hero Container</h2>
                <HeroList />
            </div>
        )
    }
}