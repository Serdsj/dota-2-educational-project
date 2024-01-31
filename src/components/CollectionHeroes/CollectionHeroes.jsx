import styles from "./collectionHeroes.module.scss";
import SearchCards from "../SearchCards/SearchCards";
import HeroesList from "../HeroeList/HeroesList";
import { useHeroesList } from "../../query/useHeroesList";
import { useFilterCollectionHeroes } from "./useFilterCollectionHeroes";
import { useInputHeroes } from "./useInputHeroes";

export default function CollectionHeroes() {

  const { data: sortedData, isLoading, error, isError,} = useHeroesList();

  const { value, setSearchHandler } = useInputHeroes();

  const {
    filterList,
    handleFilterClick,
    currentFilterAttr,
    currentFilterComp,
  } = useFilterCollectionHeroes(value, sortedData);

  // if (isLoading) {
  //   return <div className={styles["no-heroes-list"]}>Loading...</div>;
  // }

  if (isError) {
    return <div className={styles["no-heroes-list"]}>Error: {error.message}</div>;
  }

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
