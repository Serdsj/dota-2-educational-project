import HeroeItem from "../HeroeItem/HeroeItem";
import stylesHList from "./HeroesList.module.scss";
import {createUrlImg} from "../../shared/utils/createUrImg"
import agility from "../../img/hero_agility.png";
import intelligence from "../../img/hero_intelligence.png";
import strength from "../../img/hero_strength.png";
import universal from "../../img/hero_universal.png";

export default function HeroesList({ heroesData, currentFilterAttr, currentFilterComp, searchValue }) {
  return (
    <ul className={`${stylesHList["heroes__list"]}`}>
      {heroesData.map(function (currentData) {
        const urlImg = createUrlImg(`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes`, `${currentData.name_loc}`, "png");

        let attribute = null;

        if (currentData.primary_attr === 3) attribute = universal;
        if (currentData.primary_attr === 0) attribute = strength;
        if (currentData.primary_attr === 2) attribute = intelligence;
        if (currentData.primary_attr === 1) attribute = agility;
        
        let isVisible = true;

        // Если установлен фильтр по атрибутам и герой не соответствует этому фильтру
        if (currentFilterAttr !== null && currentData.primary_attr !== currentFilterAttr) {
          isVisible = false;
        }
      
        // Если установлен фильтр по сложности и герой не соответствует этому фильтру
        else if (currentFilterComp !== null && currentData.complexity !== currentFilterComp) {
          isVisible = false;
        }

      // Фильтрация по поиску
      else if (!currentData.name_loc.toLowerCase().startsWith(searchValue.toLowerCase().trim())) {
        isVisible = false;
      }
      
      // else if (currentData.name_loc.toLowerCase()[0] === searchValue[0]) {
      //   isVisible = false;
      // }
        
        return (
          <HeroeItem
            key={currentData.id}
            url={urlImg}
            id={currentData.id}
            imgSrc={attribute}
            localName={currentData}
            isVisible={isVisible}       
          />
        );
      })}
    </ul>
  );
}
