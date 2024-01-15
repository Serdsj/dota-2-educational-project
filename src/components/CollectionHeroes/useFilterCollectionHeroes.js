import { useState, useEffect } from "react";

export function useFilterCollectionHeroes(valueInput = "", heroeInfo = []) {
  const [filterList, setFilterList] = useState([]); // отфильтрованный лист

  const [currentFilterAttr, setCurrentFilterAttr] = useState(null); // фильтр по атрибутам
  const [currentFilterComp, setCurrentFilterComp] = useState(null); // фильтр сложности

  const [isAnimating, setIsAnimating] = useState(false); // для анимации

  const handleFilterClick = (filterValue, filterType) => {
    setIsAnimating(true); // Запуск анимации
    if (filterType === "attr") {
      setCurrentFilterAttr(
        currentFilterAttr === filterValue ? null : filterValue // это для повторного клика
      );
    } else if (filterType === "comp") {
      setCurrentFilterComp(
        currentFilterComp === filterValue ? null : filterValue // это для повторного клика
      );
    }
  };

  useEffect(() => {
    let resultFilter = [...heroeInfo];
    // запуск поиска
    if (valueInput) {
      setIsAnimating(true); // Запуск анимации

      setCurrentFilterAttr(null);
      setCurrentFilterComp(null);
      // сбрасываем фильтры если поиск начался
      resultFilter = resultFilter.filter(
        (hero) =>
          hero.name_loc
            .toLowerCase()
            .startsWith(valueInput.toLowerCase().trim()) // вернуть те свойства которые соответсвуют input
      );
    } else {
      // Фильтрация по атрибуту
      if (currentFilterAttr !== null) {
        resultFilter = resultFilter.filter(
          (item) => item.primary_attr === currentFilterAttr
        );
      }

      // Фильтрация по сложности
      if (currentFilterComp !== null) {
        resultFilter = resultFilter.filter(
          (element) => element.complexity === currentFilterComp
        );
      }
    }
    if (isAnimating) {
      // если анимация запущенна
      const timer = setTimeout(() => {
        setFilterList(resultFilter);
        setIsAnimating(false);
      }, 500); // Задержка для того чтобы класс успел добавиться

      return () => clearTimeout(timer); // чистим за собой таймеры
    } else {
      setFilterList(resultFilter);
    }
  }, [
    valueInput,
    currentFilterAttr,
    currentFilterComp,
    isAnimating,
    heroeInfo,
  ]);
  return {
    filterList,
    handleFilterClick,
    currentFilterAttr,
    currentFilterComp,
  };
}
