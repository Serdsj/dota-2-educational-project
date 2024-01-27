import { NavLink } from "react-router-dom";
import styleNavigator from "./HeroNavigator.module.scss";
import { useLocation, useParams } from 'react-router-dom';


export default function HeroNavigator({ prevName, nextName}) {
 
  const { heroName } = useParams();  // это имя которое вытащили из адресса страницы
  const { pathname } = useLocation(); // это часть url /hero/axe

  const prevHeroPath = pathname.replace( heroName, prevName );
 const nextHeroPath = pathname.replace( heroName, nextName );
  
  return (
    <div className={styleNavigator["wrapper-navigator"]}>
      <NavLink to={prevHeroPath} className={styleNavigator["arrow"]}></NavLink>
      <NavLink  to="/" className={styleNavigator["centre-link"]}>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
      </NavLink>
      <NavLink to={nextHeroPath} className={`${styleNavigator["arrow"]} ${styleNavigator["right-arrow"]}`}></NavLink>
    </div>
  );
}
