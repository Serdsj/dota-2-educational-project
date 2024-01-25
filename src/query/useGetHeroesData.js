import { useQueries } from "@tanstack/react-query";

export function useGetHeroesData(heroesId = [], fetchFunc) {
  const responseData = useQueries({
    queries: heroesId.map((heroId) => ({
      queryKey: ["heroData", heroId],
      queryFn: () =>
        heroId !== null && heroId !== undefined
          ? fetchFunc({ id: heroId })
          : null,
      select: (heroesData) => {
        const heroData = heroesData?.result?.data?.heroes ?? [];
        if (heroData && Array.isArray(heroData) && heroData.length > 0) {
          return heroData;
        }
        return [];
      },
      staleTime: Infinity,
      enabled: heroId !== null,
      refetchOnWindowFocus: false, // отключаем перезапуска запроса при переключении между вкладками
    })),
  });

  return responseData;
}
