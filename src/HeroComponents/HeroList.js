
import React from 'react';
import HeroCard from './HeroCard'

const HeroList = (props) => {
  
  const heroes = props.heroes.map((hero) => {
    return <HeroCard key={hero.id} hero={hero}/>
  });

    return(
      <div className="card hero-list" style={{width: "16rem"}}>
        <ul>
          {heroes}
        </ul>
      </div>
    )
}

export default HeroList;
