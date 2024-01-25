import { getHeroData } from "../../shared/api/index";
import { useGetHeroesData } from "../../query/useGetHeroesData";
import { useMemo } from "react";

export function useHeroesData(heroesList, heroName) {
  const updatedHeroesList = useMemo(() => {
    return heroesList.map((item) => {
      return {
        ...item,
        name_loc: item.name_loc.toLowerCase().split(" ").join(""),
      };
    });
  }, [heroesList]);

  const heroNameToIndexMap = useMemo(() => {
    const collectionDataIndex = new Map(); // объект именами и индексами

    updatedHeroesList.forEach((hero, index) => {
      collectionDataIndex.set(hero.name_loc, index);
    });

    return collectionDataIndex;
  }, [updatedHeroesList]);

  let currentIndex = heroNameToIndexMap.get(heroName);
  let currentHeroId = updatedHeroesList[currentIndex]?.id;

  let prevHeroIndex =
    (currentIndex - 1 + updatedHeroesList.length) % updatedHeroesList.length;
  let nextHeroIndex = (currentIndex + 1) % updatedHeroesList.length;

  let prevHeroId = updatedHeroesList[prevHeroIndex]?.id;
  let nextHeroId = updatedHeroesList[nextHeroIndex]?.id;

  let ids = [currentHeroId, prevHeroId, nextHeroId];

  const response = useGetHeroesData(ids, getHeroData);

  const [currentHeroData, prevHeroData, nextHeroData] = response;

  return { currentHeroData, prevHeroData, nextHeroData };
}
