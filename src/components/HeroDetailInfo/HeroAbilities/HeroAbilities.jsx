import styleAbilitiesItem from "./HeroAbilities.module.scss";

export default function HeroAbilities({heroAbilities}) {
 
 const filtredAbilities = heroAbilities.filter((heroAbil) => {
    return (heroAbil.ability_has_scepter === false && heroAbil.ability_has_shard === false)
 })


 console.log (filtredAbilities)
    return (
    <div className="wrapper-abilities">
      <ul className="hero-abilities-list">
        <li className="hero-abilities-item">
          <img className="hero-ability-icon" src="" alt="" />
          <div className="description-ability"></div>
        </li>
      </ul>
    </div>
  );
}
