import { NavLink, useLocation, useParams } from "react-router-dom";
import styleNavigator from "./HeroNavigator.module.scss";
import PropTypes from 'prop-types';

export default function HeroNavigator({ prevName, nextName}) {
 
  const { heroName } = useParams();
  const { pathname } = useLocation();

  const prevHeroPath = pathname.replace( heroName, prevName );
 const nextHeroPath = pathname.replace( heroName, nextName );

 const handlerScrollTop = function () {
  window.scrollTo(0, 0);
} 

  return (
    <div className={styleNavigator["wrapper-navigator"]}>
      <NavLink  onClick={handlerScrollTop} to={prevHeroPath} className={styleNavigator["arrow"]}></NavLink>
      <NavLink  onClick={handlerScrollTop}  to="/" className={styleNavigator["centre-link"]}>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
        <div className={styleNavigator["style-box"]}></div>
      </NavLink>
      <NavLink  onClick={handlerScrollTop} to={nextHeroPath} className={`${styleNavigator["arrow"]} ${styleNavigator["right-arrow"]}`}></NavLink>
    </div>
  );
}

HeroNavigator.propTypes= {
  prevName: PropTypes.string,
  nextName: PropTypes.string,
}
