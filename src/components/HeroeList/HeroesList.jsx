import HeroeItem from "../HeroeItem/HeroeItem";
import stylesHList from "./HeroesList.module.scss";
import {createUrlImg} from "../../shared/utils/createUrImg"
import {CONFIG} from '../../shared/config/'

export default function HeroesList({ heroesData, currentFilterAttr, currentFilterComp, searchValue }) {
  const urlImg = (name) => createUrlImg(`${CONFIG.IMG_URL}/heroes`, `${name}`, "png");
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
            url={urlImg(currentData.name_loc)}
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
