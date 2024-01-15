import styleAbilTalent from "./AbilitiesTalents.module.scss";
import HeroAbility from "../HeroAbilityItem/HeroAbilityItem";

export default function AbilitiesTalents({ heroAbilities }) {
  return (
    <div className="abilities-talents">
      
      <div className="wrapper-tree-of-talents">
        <img src="" alt="" className="icon-tree" />
        <div className="description-tree-talents"></div>
      </div>
    
      <div className="tree-of-talents"></div>
      
      <div className="wrapper-abilities">
        <h3 className="title-abilities">ABILITIES</h3>
        <ul className="hero-abilities-list">
          {props.heroAbilities.map(function (item) {
            <HeroAbility />;
          })}
        </ul>
      </div>

    
    </div>
  );
}
