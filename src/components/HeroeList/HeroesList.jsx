import { memo } from "react";
import HeroeItem from "../HeroeItem/HeroeItem";
import stylesHList from "./HeroesList.module.scss";
import { mediaLinks } from "../../shared/utils/createUrl";
import PropTypes from 'prop-types';

 function HeroesList({ heroesData, currentFilterAttr, currentFilterComp, searchValue }) {

  const hasVisible = (currentData) => {
    // Если установлен фильтр по атрибутам и герой не соответствует этому фильтру
    if (currentFilterAttr !== null && currentData.primary_attr !== currentFilterAttr) {
      return false;
    }
  
    // Если установлен фильтр по сложности и герой не соответствует этому фильтру
    else if (currentFilterComp !== null && currentData.complexity !== currentFilterComp) {
      return false;
    }

    // Фильтрация по поиску
    else if (!currentData.name_loc.toLowerCase().startsWith(searchValue.toLowerCase().trim())) {
      return false;
    }

    return true
  }

  return (
    <ul className={`${stylesHList["heroes__list"]}`}>
      {heroesData.map((currentData) => {   
        return (
          <HeroeItem
            key={currentData.id}
            url={mediaLinks.createUrl({type:"heroImg", heroName:currentData.name_loc})}
            id={currentData.id}
            localName={currentData.name_loc}
            attr={currentData.primary_attr}
            isVisible={hasVisible(currentData)}       
          />
        );
      })}
    </ul>
  );
}

HeroesList.propTypes= {
  heroesData: PropTypes.array,
  currentFilterAttr: PropTypes.number,
  currentFilterComp: PropTypes.number,
  searchValue: PropTypes.string, 
}

export default memo(HeroesList)