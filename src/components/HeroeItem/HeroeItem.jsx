import styleHitem from "./HeroItem.module.scss";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
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
  const handlerScrollTop = function () {
    window.scrollTo(0, 0);
  } 

  return (
    <li className= { `${!isVisible ? styleHitem["fade-out-then-move-left"] : styleHitem["fade-in-move-right"] }`}>
     <NavLink  onClick={handlerScrollTop} to={`hero/${changeName}`} className="link-description">
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


HeroeItem.propTypes= {
  url: PropTypes.string,
  id: PropTypes.number,
  localName: PropTypes.string,
  attr: PropTypes.number, 
  isVisible:  PropTypes.bool
}
