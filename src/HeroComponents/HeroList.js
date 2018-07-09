
import HeroCard from './HeroCard'

const HeroList = (props) => {

  const heroes = props.heroes.map((hero) => {
    return <HeroCard key={hero.name} hero={hero}/>
  });

    return(
      <div>
        <ul>
          {heroes}
        </ul>
      </div>
    )

}

export default HeroList;
