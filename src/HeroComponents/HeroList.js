
import React from 'react';
import HeroCard from './HeroCard'

const HeroList = (props) => {

  const heroes = props.heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero} handleClick={props.addHeroToTeam}/>
  });

    return(
      <div className="hero-list">
        <ul>
          <li  style={{width: "18rem"}}>
            {heroes}
          </li>
        </ul>
      </div>
    )
}

export default HeroList;
