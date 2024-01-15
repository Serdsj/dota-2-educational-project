import { useState, useEffect } from "react";
import { getHeroStats } from "../../shared/api/index";

export function useGetHeroesStats(setFilter) {
  const [isLoading, setLoading] = useState(true); // для вывода загрузки. Новый хук
  const [heroStats, setHeroStats] = useState([]); // для массива с апишки. Новый хук.
  const [error, setError] = useState(null); // для вывода ошибки. Новый хук.

  useEffect(() => {
    // перенести
    async function responseHeroes() {
      try {
        let heroStatsData = await getHeroStats();

        if (heroStatsData === null) {
          throw new Error("Network response was not ok");
        }

        let copyResponse = [...heroStatsData];

        copyResponse.sort((a, b) => {
          const nameA = a.localized_name.toLowerCase();
          const nameB = b.localized_name.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        setHeroStats(copyResponse);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    responseHeroes();
  }, []);

  return {
    isLoading,
    heroStats,
    error,
    setLoading,
    setHeroStats,
    setError,
  };
}
