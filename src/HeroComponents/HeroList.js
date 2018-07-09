import React from 'react';
import HeroCard from './HeroCard';

export default class HeroList extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="heroList">
                <h4>Hello from the Hero List</h4>
                <HeroCard />
            </div>
        )
    }

}