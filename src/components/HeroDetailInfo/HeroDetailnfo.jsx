import { useContext, createContext, useMemo, useRef } from "react";
import { HeroDataContext } from "../../pages/HeroPage/HeroPage";
import { useCurrentAbilityData } from "./useCurrentAbilityData";
import { updateAbilityData } from "./updateAbilityData.js";
import {
  basicUrl,
  shardUrl,
  scepterUrl,
} from "../../shared/utils/createBasicShardScepterUrl";
import HeroDescriptionMemo from "./HeroDescription/HeroDescription";
import HeroAttrsRolsStatMemo from "./HeroAttrsRoslStat/HeroAttrsRolsStat";
import HeroAbilityDetails from "./HeroAbilityDetails/HeroAbilityDetails";
import HeroSwitch from "./HeroSwitch/HeroSwitch";
import styleDetailInfo from "./HeroDetailnfo.module.scss";

export let AbilityContext = createContext(null);

export default function HeroDetailInfo() {
  const { currentHeroData } = useContext(HeroDataContext);
  const scollToRef = useRef();
  const allAbilities = useMemo(
    () => updateAbilityData(currentHeroData, basicUrl, shardUrl, scepterUrl),
    [currentHeroData]
  );

  const {
    abilityData,
    activeAbilityId,
    isAnimating,
    videoRefs,
    handleAbilityClick,
  } = useCurrentAbilityData(allAbilities);

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

  return (
    <div className={styleDetailInfo["wrapper-flex"]}>
      <AbilityContext.Provider value={{ handleAbilityClick, scollToRef }}>
        <HeroDescriptionMemo />
        <HeroAttrsRolsStatMemo />
        <HeroAbilityDetails
          abilityData={abilityData}
          activeAbilityId={activeAbilityId}
          isAnimating={isAnimating}
          videoRefs={videoRefs}
          handleAbilityClick={handleAbilityClick}
          allAbilities={allAbilities}
        />
      </AbilityContext.Provider>
      <HeroSwitch />
    </div>
  );
}
