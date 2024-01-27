import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeroDetailInfo from "../../components/HeroDetailInfo/HeroDetailnfo";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useHeroesList } from "../../query/useHeroesList";
import { useHeroesData } from "./useHeroesData";
import styles from "./HeroPage.module.scss"

export let HeroDataContext = createContext(null);

export default function HeroPage() {
  
  const { data: sortedData } = useHeroesList();
  const { heroName } = useParams();  // это имя которое вытащили из адресса страницы
  const { currentHeroData, prevHeroData, nextHeroData } = useHeroesData(sortedData, heroName);

  return (
    <MainLayout className={styles["hero-page"]}>
      <HeroDataContext.Provider value={{ currentHeroData, prevHeroData, nextHeroData }}> 
        <HeroDetailInfo />
      </HeroDataContext.Provider>
    </MainLayout>
  );
}
