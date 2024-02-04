import { NavLink, useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { mediaLinks } from "../../../shared/utils/createUrl";
import { attributesHero } from "./heroSwitchData"
import styleHeroSwitch from "./HeroSwitch.module.scss";

export default function HeroSwitch() {
  const { prevHeroData, nextHeroData } = useContext(HeroDataContext);
  const { heroName } = useParams(); // это имя которое вытащили из адресса страницы
  const { pathname } = useLocation(); // это часть url /hero/axe

  const { data: prevHero } = prevHeroData;
  const { data: nextHero } = nextHeroData;

  if (
    !prevHero ||
    prevHero.length === 0 ||
    !nextHero ||
    nextHero.length === 0
  ) {
    return <div></div>;
  }

  const { name_loc: prevHeroName } = prevHero[0];
  const { name_loc: nextHeroName } = nextHero[0];
  const prevName = prevHeroName.toLowerCase().split(" ").join("");
  const nextName = nextHeroName.toLowerCase().split(" ").join("");
  const prevHeroPath = pathname.replace(heroName, prevName);
  const nextHeroPath = pathname.replace(heroName, nextName);
  const prevHeroAttr = attributesHero[prevHero[0].primary_attr] ?? null;
  const nextHeroAttr = attributesHero[nextHero[0].primary_attr] ?? null;
  const handlerScrollTop = function () {
    window.scrollTo(0, 0);
  } 

  return (
    <div className={styleHeroSwitch["heroes-switch"]}>
      <NavLink
        to={prevHeroPath}
        className={`${styleHeroSwitch["switch-hero"]} ${styleHeroSwitch["position-link"]}`}
        onClick={handlerScrollTop}
      >
       
          <img src={mediaLinks.createUrl({
            type: "heroPortrait",
            heroName: prevHeroName,
            format: "png"
          })} alt="picture of hero" className={`${styleHeroSwitch["hero-portrait-img"]} ${styleHeroSwitch["left-position"]}`} />
          <div className={styleHeroSwitch["some-hero-info"]}>
            <span className={styleHeroSwitch["switch-name"]}>
              PREVIOUS HERO
            </span>
            <span className={styleHeroSwitch["name"]}>{prevHeroName}</span>
            <div className={styleHeroSwitch["hero-attr-type-attack"]}>
              <img src={prevHeroAttr} className={styleHeroSwitch["hero-attr"]} alt="" />
              <span className={styleHeroSwitch["type-of-attack"]}>{prevHero[0].attack_capability === 1 ? "MELEE" : "RANGED"}</span>
            </div>
       
        </div>
      </NavLink>
      <NavLink onClick={handlerScrollTop} to="/" className={styleHeroSwitch["all-heroes"]}>
        <div className={styleHeroSwitch["wrapper-boxes"]}>
          <div className={styleHeroSwitch["box"]}></div>
          <div className={styleHeroSwitch["box"]}></div>
          <div className={styleHeroSwitch["box"]}></div>
          <div className={styleHeroSwitch["box"]}></div>
          <div className={styleHeroSwitch["box"]}></div>
          <div className={styleHeroSwitch["box"]}></div>
        </div>

        <span className={styleHeroSwitch["all-heroes-name"]}> ALL HEROES </span>
      </NavLink>
      <NavLink onClick={handlerScrollTop} to={nextHeroPath} className={styleHeroSwitch["switch-hero"]}>
      <img src={mediaLinks.createUrl({
            type: "heroPortrait",
            heroName: nextHeroName,
            format: "png"
          })} className={`${styleHeroSwitch["hero-portrait-img"]} ${styleHeroSwitch["right-position"]}`} alt="picture of hero" />
          <div className={styleHeroSwitch["some-hero-info"]}>
            <span className={styleHeroSwitch["switch-name"]}>NEXT HERO</span>
            <span className={styleHeroSwitch["name"]}>{nextHeroName}</span>
            <div className={styleHeroSwitch["hero-attr-type-attack"]}>
            <img src={nextHeroAttr} alt="" className={styleHeroSwitch["hero-attr"]} />
              <span className={styleHeroSwitch["type-of-attack"]}>{nextHero[0].attack_capability === 1 ? "MELEE" : "RANGED"}</span>
            </div>
          </div> 
      </NavLink>
    </div>
  );
}
