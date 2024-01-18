// import { useState, useEffect } from "react";
// import { heroNameToIndexMap } from "../CollectionHeroes/CollectionHeroes";

// export function HeroesId({ heroName }) {
//   const [currentId, setCurrentId] = useState(null);
//   const [nextId, setNextId] = useState(null);
//   const [prevId, setPrevId] = useState(null);

//   useEffect(() => {
//     const currentIndex = heroNameToIndexMap[heroName];
//     const currentHeroId = heroes[currentIndex]?.id;
//     const prevHeroId = heroes[currentIndex - 1]?.id;
//     const nextHeroId = heroes[currentIndex + 1]?.id;

//     setNeighboringIds({
//       current: currentHeroId,
//       prev: prevHeroId,
//       next: nextHeroId,
//     });
//   }, [heroName, heroes]);
// }
