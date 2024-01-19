import { getHeroData } from "../../shared/api/index";
import { useQuery } from "@tanstack/react-query";

export function useHeroesData(heroesList, heroName) {
  const heroNameToIndexMap = {}; // объект имен с индексами

  heroesList.forEach((hero, index) => {
    heroNameToIndexMap[hero.name_loc] = index;
  });

  console.log(heroNameToIndexMap);

  let currentIndex = heroNameToIndexMap[heroName];
  let currentHeroId = heroesList[currentIndex]?.id;

  let prevHeroIndex =
    (currentIndex - 1 + heroesList.length) % heroesList.length;
  let nextHeroIndex = (currentIndex + 1) % heroesList.length;

  let prevHeroId = heroesList[prevHeroIndex]?.id;
  let nextHeroId = heroesList[nextHeroIndex]?.id;

  const getId = (id) => (id !== null ? getHeroData(id) : null);

  const {
    data: currentHeroData,
    isLoading: isLoadingCurrentHero,
    error: errorCurrentHero,
    isError: isErrorCurrentHero,
  } = useQuery({
    queryKey: ["heroData", currentHeroId],
    queryFn: () => getId({ id: currentHeroId }),
    options: {
      enabled: currentHeroId !== null,
    },
  });

  const {
    data: prevHeroData,
    isLoading: isLoadingPrevHero,
    error: errorPrevHero,
    isError: isErrorPrevHero,
  } = useQuery({
    queryKey: ["heroData", prevHeroId],
    queryFn: () => getId({ id: prevHeroId }),
    options: {
      enabled: prevHeroId !== null,
    },
  });

  const {
    data: nextHeroData,
    isLoading: isLoadingNextHero,
    error: errorNextHero,
    isError: isErrorNextHero,
  } = useQuery({
    queryKey: ["heroData", nextHeroId],
    queryFn: () => getId({ id: nextHeroId }),
    options: {
      enabled: nextHeroId !== null,
    },
  });

  if (errorCurrentHero)
    console.error(`error about current hero ${errorCurrentHero}`);

  if (errorPrevHero) console.error(`error about prev hero  ${prevHeroData}`);

  if (errorNextHero) console.error(`error about next hero  ${errorNextHero}`);

  if (
    !Array.isArray(currentHeroData) ||
    !Array.isArray(prevHeroData) ||
    !Array.isArray(nextHeroData)
  ) {
    return [];
  }

  return {
    currentHeroData,
    prevHeroData,
    nextHeroData,
    isLoading: isLoadingCurrentHero || isLoadingPrevHero || isLoadingNextHero,
    isError: isErrorCurrentHero || isErrorPrevHero || isErrorNextHero,
    error: errorCurrentHero || errorPrevHero || errorNextHero,
  };
}
