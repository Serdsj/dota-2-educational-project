import { getHeroesList } from "../shared/api/index";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function useHeroesList() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["heroList"],
    queryFn: () => getHeroesList(),
    select: (heroesList) => {
      const heroList = heroesList?.result?.data?.heroes ?? [];

      if (heroList && Array.isArray(heroList) && heroList.length > 0) {
        return heroList;
      }

      return [];
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const sortedData = useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }

    return [...data].sort((a, b) => {
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
  }, [data]);

  return {
    data: sortedData,
    isLoading,
    error,
    isError,
  };
}
