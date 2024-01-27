import { useContext } from "react";
import { HeroDataContext } from "../../pages/HeroPage/HeroPage";
import HeroDescription from "./HeroDescription/HeroDescription";
import HeroAttrsRolsStat from "./HeroAttrsRoslStat/HeroAttrsRolsStat";
import styleDetailInfo from "./HeroDetailnfo.module.scss";

export default function HeroDetailInfo () {

  const {currentHeroData} = useContext(HeroDataContext)

  // console.log(currentHeroData)
    
    if (currentHeroData.isLoading === true ) {
      return <div className={styleDetailInfo["info-message"]}> Loading...</div>
    }

    if (currentHeroData.isError) {
      console.error(`Error: ${currentHeroData.error.message}`);
      return <div className="info-message"> Sorry we have got the problem with server. You can visit later </div>
    }
     
    return (
        <div className={styleDetailInfo["wrapper-flex"]}>
        <HeroDescription />
        <HeroAttrsRolsStat />
        </div>
    )
}