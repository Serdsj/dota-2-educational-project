import { getHeroData } from "../../shared/api/index";
import { useState, useEffect } from "react";

export function useHeroData(heroId) {
  const [heroDetailData, setheroDetailData] = useState([]);
  const [errorData, setErrorData] = useState(null);
  const [isDataLoading, setisDataLoading] = useState(true);

  useEffect(() => {
    async function responseHeroesDetails() {
      try {
        let heroData = await getHeroData();

        if (heroData === null) {
          throw new Error("Network response was not ok");
        }

        setheroDetailData(heroData);
      } catch (error) {
        setErrorData(error);
      } finally {
        setisDataLoading(false);
      }
    }

    responseHeroesDetails();
  }, []);

  return {
    heroDetailData,
    errorData,
    isDataLoading,
  };
}
