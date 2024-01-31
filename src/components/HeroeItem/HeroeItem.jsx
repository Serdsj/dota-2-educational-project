import styleHitem from "./HeroItem.module.scss";
import { NavLink } from "react-router-dom";
import agility from "../../img/hero_agility.png";
import intelligence from "../../img/hero_intelligence.png";
import strength from "../../img/hero_strength.png";
import universal from "../../img/hero_universal.png";

export default function HeroeItem({ url, id, localName, attr, isVisible }) {

  const attributes = {
    0: strength,
    1: agility,
    2: intelligence,
    3: universal,
  }
  const currentAttribute = attributes[attr] ?? null;

  const changeName = localName.toLowerCase().split(" ").join("");

  return (
    <li className= { `${!isVisible ? styleHitem["fade-out-then-move-left"] : styleHitem["fade-in-move-right"] }`}>
     <NavLink to={`hero/${changeName}`} className="link-description">
        <div
          className={`${styleHitem["heroe"]}`}
          data-id={id}
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className={styleHitem["wrapper-details"]}>
            {
              currentAttribute ? 
               <img
                className={styleHitem["attribute-picture"]}
                width="42"
                height="42"
                src={currentAttribute}
                alt={localName}
              /> : ''
            }
            <span className={styleHitem["name-heroe"]}>
              {localName}
            </span>
          </div>
        </div>
      </NavLink>
    </li>
  );
}
