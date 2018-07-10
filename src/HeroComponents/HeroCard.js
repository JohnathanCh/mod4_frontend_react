import React from 'react';

export default class HeroCard extends React.Component {

  render() {
    return (

      <li className="card-body">
        <h6 className="card-title">{this.props.hero.name}</h6>
        <img src={this.props.hero.image} className="card-img-top" alt="hero"/>
        <div className="card-body">
           {this.props.hero.race}
        </div>
      </li>
    )
  }
}
