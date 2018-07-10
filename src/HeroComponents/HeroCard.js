import React from 'react';

export default class HeroCard extends React.Component {

  render() {
    return (
      <li>
        {this.props.hero.name}
        <img src={this.props.hero.image} alt="Whoops no Photo"/>
      </li>
    )
  }
}
