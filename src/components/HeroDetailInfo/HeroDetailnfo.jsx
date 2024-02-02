import { useContext, createContext } from "react";
import { HeroDataContext } from "../../pages/HeroPage/HeroPage";
import { useCurrentAbilityData } from "./useCurrentAbilityData";
import HeroDescription from "./HeroDescription/HeroDescription";
import HeroAttrsRolsStat from "./HeroAttrsRoslStat/HeroAttrsRolsStat";
import HeroAbilityDetails from "./HeroAbilityDetails/HeroAbilityDetails";
import HeroSwitch from "./HeroSwitch/HeroSwitch";
import styleDetailInfo from "./HeroDetailnfo.module.scss";
import gsap from "gsap"

export let AbilityContext = createContext(null);

export default function HeroDetailInfo() {
  const { currentHeroData } = useContext(HeroDataContext);
  const { abilityData, activeAbilityId, isAnimating, handleAbilityClick } =
    useCurrentAbilityData(currentHeroData.data);

  if (currentHeroData.isError) {
    console.error(`Error: ${currentHeroData.error.message}`);
    return (
      <div className="info-message">
        {" "}
        Sorry we have got the problem with server. You can visit later{" "}
      </div>
    );
  }

  if (!currentHeroData.data || currentHeroData.data.length === 0)
    return <div></div>;

  return (
    <div className={styleDetailInfo["wrapper-flex"]}>
      <AbilityContext.Provider value={{ handleAbilityClick }}>
        <HeroDescription />
        <HeroAttrsRolsStat />
        <HeroAbilityDetails
          abilityData={abilityData}
          activeAbilityId={activeAbilityId}
          isAnimating={isAnimating}
          handleAbilityClick={handleAbilityClick}
        />
      </AbilityContext.Provider>
      <HeroSwitch />
    </div>
  );
}
