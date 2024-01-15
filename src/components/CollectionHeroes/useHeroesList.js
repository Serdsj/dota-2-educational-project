import { useState, useEffect } from "react";
import { getHeroesList } from "../../shared/api/index";

export function useHeroesList() {
  const [heroesList, setHeroesList] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [errorListResp, setErrorListResp] = useState(null);

  useEffect(() => {
    async function responseHeroesList() {
      try {
        let responseAttrs = await getHeroesList();
        if (responseAttrs === null) {
          throw new Error("response is not Ok");
        }

        let copyResponse = [...responseAttrs];

        copyResponse.sort((a, b) => {
          const nameA = a.name_loc.toLowerCase();
          const nameB = b.name_loc.toLowerCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        setHeroesList(copyResponse);
      } catch (error) {
        setErrorListResp(error);
      } finally {
        setIsLoadingList(false);
      }
    }
    responseHeroesList();
  }, []);

  return {
    heroesList,
    isLoadingList,
    errorListResp,
    setHeroesList,
    setIsLoadingList,
    setErrorListResp,
  };
}
