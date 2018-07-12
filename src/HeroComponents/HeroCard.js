import React from 'react';

export default class HeroCard extends React.Component {

  render() {
    return (
      <div className="card-body" onClick={() => this.props.handleClick(this.props.hero)}>
        <h6 className="card-title">{this.props.hero.name}</h6>
        <img src={this.props.hero.image} className="card-img-top" alt="hero"/>
        <div className="card-body">
           {this.props.hero.race}
        </div>
      </div>
    )
  }
}
