import { useQuery } from "@tanstack/react-query";

export function useCustomHeroQuery(idHero, fetch) {
  const query = useQuery({
    queryKey: ["heroData", idHero],
    queryFn: () => (idHero !== null ? fetch({ id: idHero }) : null),
    options: {
      enabled: idHero !== null,
      staleTime: Infinity,
    },
  });

  return query;
}
