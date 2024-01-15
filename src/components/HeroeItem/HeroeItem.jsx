import styleHitem from "./HeroItem.module.scss";
import { NavLink } from "react-router-dom";

export default function HeroeItem({ url, id, imgSrc, localName, isVisible }) {
  return (
    <li className= { `${!isVisible ? styleHitem["fade-out-then-move-left"] : styleHitem["fade-in-move-right"] }`}>
      <NavLink to={`hero/${localName.name_loc}`} className="link-description">
        <div
          className={`${styleHitem["heroe"]}`}
          data-id={id}
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className={styleHitem["wrapper-details"]}>
            <img
              className={styleHitem["attribute-picture"]}
              width="42"
              height="42"
              src={imgSrc}
              alt={localName.name_loc}
            />
            <span className={styleHitem["name-heroe"]}>
              {localName.name_loc}
            </span>
          </div>
        </div>
      </NavLink>
    </li>
  );
}
