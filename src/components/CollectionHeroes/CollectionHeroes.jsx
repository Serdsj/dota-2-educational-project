import styles from "./collectionHeroes.module.scss";
import SearchCards from "../SearchCards/SearchCards";
import HeroesList from "../HeroeList/HeroesList";
import { useHeroesList } from "../../query/useHeroesList";
import { useFilterCollectionHeroes } from "./useFilterCollectionHeroes";
import { useInputHeroes } from "./useInputHeroes";
 // крч я столкнулся с пробелмой глобального состояния 
// export const heroNameToIndexMap = {}; // это объект имен с индексами

export default function CollectionHeroes() {

  const { data: sortedData, isLoading, error, isError,} = useHeroesList();

  const { value, setSearchHandler } = useInputHeroes();

  const {
    filterList,
    handleFilterClick,
    currentFilterAttr,
    currentFilterComp,
  } = useFilterCollectionHeroes(value, sortedData);

  if (isLoading) {
    return <div className={styles["no-heroes-list"]}>Loading...</div>;
  }

  if (isError) {
    return <div className={styles["no-heroes-list"]}>Error: {error.message}</div>;
  }

  // filterList.forEach((hero, index) => {
  //   heroNameToIndexMap[hero.name_loc] = index;
  // });

  // console.log(`это объетк ключей созданный из фильтрованного списка heroNameToIndexMap ${heroNameToIndexMap}`)

  // useEffect(() => {
  //   let currentIndex = heroNameToIndexMap[currentHeroName];
  //   let currentHeroId = filterList[currentIndex]?.id;
  //   let prevHeroId = filterList[currentIndex - 1]?.id;
  //   let nextHeroId = filterList[currentIndex + 1]?.id;
  
  //   setNeighboringIds({ current: currentHeroId, prev: prevHeroId, next: nextHeroId });
  // }, [heroName, heroes]);

  return (
    <section className={styles["heroes"]}>
      <div className={styles["heroes__wrapper-text"]}>
        <h1 className={styles["heroes__title"]}> CHOOSE YOUR HERO</h1>
        <p className={styles["heroes__description"]}>
          {" "}
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's
          hero pool is massive and limitlessly diverse. Unleash incredible
          abilities and devastating ultimates on your way to victory.
        </p>
      </div>

      <SearchCards
        bindValue={setSearchHandler}
        handleClickFilter={handleFilterClick}
        currentFilterAttr={currentFilterAttr}
        currentFilterComp={currentFilterComp}
      />

      {(filterList.length === 0 && value) ? (
        <p className={styles["no-heroes-message"]}>
          NO HEROES MATCH YOUR FILTER
        </p>
      ) : (
        <div className={styles["animated-appear"]}>
          <HeroesList
            heroesData={filterList}
            currentFilterAttr={currentFilterAttr}
            currentFilterComp={currentFilterComp}
            searchValue={value}
          />
        </div>
      )}
    </section>
  );
}
