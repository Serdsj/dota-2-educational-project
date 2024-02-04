import { useContext, createContext, useMemo, useRef } from "react";
import { HeroDataContext } from "../../pages/HeroPage/HeroPage";
import { useCurrentAbilityData } from "./useCurrentAbilityData";
import { getAbilityVideo } from "../../shared/api/index";
import { useQuery } from "@tanstack/react-query";
import HeroDescription from "./HeroDescription/HeroDescription";
import HeroAttrsRolsStat from "./HeroAttrsRoslStat/HeroAttrsRolsStat";
import HeroAbilityDetails from "./HeroAbilityDetails/HeroAbilityDetails";
import HeroSwitch from "./HeroSwitch/HeroSwitch";
import styleDetailInfo from "./HeroDetailnfo.module.scss";

export let AbilityContext = createContext(null);

export default function HeroDetailInfo() {
  const { currentHeroData } = useContext(HeroDataContext);
  const scollToRef = useRef();

  const allAbilities = useMemo(() => {
    if (
      !currentHeroData.data?.length ||
      !currentHeroData.data[0]?.abilities?.length
    ) {
      return []; // Возвращаем пустой массив, если данных нет или они некорректны
    }

    const filteredAbilities = currentHeroData.data[0]?.abilities
      .filter(
        (item) =>
          (item.ability_has_scepter && !item.ability_is_granted_by_scepter) ||
          (item.ability_has_shard && !item.ability_is_granted_by_shard) ||
          (item.ability_has_shard && item.ability_has_scepter && item.scepter_loc && item.shard_loc)
      )
      .map((item, index) => ({
        name: item.name,
        name_loc: item.name_loc,
        ability_has_scepter: item.ability_has_scepter,
        ability_has_shard: item.ability_has_shard,
        ability_is_granted_by_scepter: item.ability_is_granted_by_scepter,
        ability_is_granted_by_shard: item.ability_is_granted_by_shard,
        scepter_loc: item.scepter_loc,
        shard_loc: item.shard_loc,
        special_values: item.special_values,
        id: index,
        damage: 0,
        cooldowns: [0],
        desc_loc: "",
        lore_loc: item.lore_loc,
        mana_costs: [0],
        dispellable: 0,
        immunity: 0,
      }));

    return [...currentHeroData.data[0].abilities, ...filteredAbilities];
  }, [currentHeroData.data]);

  const { abilityData, activeAbilityId, isAnimating, handleAbilityClick } =
    useCurrentAbilityData(allAbilities);

  if (currentHeroData.isError) {
    console.error(`Error: ${currentHeroData.error.message}`);
    return (
      <div className="info-message">
        Sorry we have got the problem with server. You can visit later{" "}
      </div>
    );
  }

  if (!currentHeroData.data || currentHeroData.data.length === 0)
    return <div></div>;

  console.log(allAbilities);

  return (
    <div className={styleDetailInfo["wrapper-flex"]}>
      <AbilityContext.Provider value={{ handleAbilityClick, scollToRef }}>
        <HeroDescription />
        <HeroAttrsRolsStat />
        <HeroAbilityDetails
          abilityData={abilityData}
          activeAbilityId={activeAbilityId}
          isAnimating={isAnimating}
          handleAbilityClick={handleAbilityClick}
          allAbilities={allAbilities}
        />
      </AbilityContext.Provider>
      <HeroSwitch />
    </div>
  );
}


 //   const query = useQuery({
  //     queryKey: ["abilityVideo"],
  //     queryFn: () => {
  //       // Убедитесь, что abilityData и currentHeroData.data[0] существуют
  //       if (!abilityData || !currentHeroData?.data || currentHeroData?.data?.length === 0) {
  //         return []; // Возвращаем пустой массив, если проверка не пройдена
  //       }
    
  //       // Все проверки пройдены, можно безопасно вызывать getAbilityVideo
  //       return getAbilityVideo(abilityData, currentHeroData.data[0].name_loc, "webm", abilityData.name_loc);
  //     },
  //     options: {
  //       staleTime: Infinity, // Конфигурация для управления временем "устаревания" данных
  //     },
  //   });

  // console.log(query);