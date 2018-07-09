import React from 'react';

export default class HeroCard extends React.Component {

  render() {
    return (
      <li>
        {this.props.hero.name} - {this.props.hero.power}
      </li>
    )
  }
}
