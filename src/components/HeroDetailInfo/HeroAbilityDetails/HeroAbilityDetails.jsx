import { useContext } from "react";
import { useCurrentAbilityData } from "./useCurrentAbilityData";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import styleAbilityDetail from "./HeroAbilityDetails.module.scss";
import { mediaLinks } from "../../../shared/utils/createUrl";
import { chooseLinkAbilVideo } from "./chooseLinkAbilVideo";
import { formattingText } from "../../../shared/utils/formattingText";
import parse from "html-react-parser";
import imgAganim from "../../../img/aghs_scepter.png";

export default function HeroAbilityDetails(props) {
  const { currentHeroData } = useContext(HeroDataContext);
  const { data: currentHero } = currentHeroData;
  const { abilityData, activeAbilityId, isAnimating, handleAbilityClick } =
    useCurrentAbilityData(currentHero);

  if (!abilityData) {
    return <div></div>;
  }

  const isActive = (currentId, activeId) => currentId === activeId;
  const { abilities } = currentHero[0];

  // const anotherAbilLinks = !shardLink && !aganimLink ?

  //  const firstAbil = abilities[0].name_loc

  // mana_costs, special_values - это массивы
  // const   cooldowns, desc_loc, lore_loc, mana_costs, name, special_values
  return (
    <section className={styleAbilityDetail["ability-details"]}>
      <h2 className={styleAbilityDetail["title-block"]}>ABILITY DETAILS:</h2>

      <div className={styleAbilityDetail["wrapper-video-ability-description"]}>
        <div className={styleAbilityDetail["ability-left"]}>
          <div className={styleAbilityDetail["video-container"]}>
            <div
              className={`${styleAbilityDetail["fade-out"]} ${
                isAnimating ? styleAbilityDetail["fade-in"] : ""
              }`}
            ></div>
            <video
              className={styleAbilityDetail["ability-video"]}
              key={abilityData.name_loc}
              autoPlay={true} // autoPlay без значения равносильно autoPlay={true}
              preload="auto"
              loop
              playsInline
              muted
              poster={chooseLinkAbilVideo(
                abilityData.ability_is_granted_by_shard,
                abilityData.ability_is_granted_by_scepter,
                currentHero[0].name_loc,
                "jpg",
                abilityData.name_loc
              )}
            >
              <source
                type="video/webm"
                src={chooseLinkAbilVideo(
                abilityData.ability_is_granted_by_shard,
                abilityData.ability_is_granted_by_scepter,
                currentHero[0].name_loc,
                "webm",
                abilityData.name_loc
              )}
              />
              <source
                type="video/mp4"
                src={chooseLinkAbilVideo(
                  abilityData.ability_is_granted_by_shard,
                  abilityData.ability_is_granted_by_scepter,
                  currentHero[0].name_loc,
                  "mp4",
                  abilityData.name_loc
                )}
              />
            </video>
          </div>
          <ul className={styleAbilityDetail["ability-selector-list"]}>
            {abilities.map(function (currentAbil) {
              let order = 0; // это переменная для порядка элементов в flex контейнере
              let bcAganim = (<div className={styleAbilityDetail["special-abil"]}></div>);
             
              if (currentAbil.ability_is_granted_by_shard) order = 1;
              if (currentAbil.ability_is_granted_by_scepter) order = 2;
             
              let currentElement = (
                <div
                  style={{
                    backgroundImage: `url(${mediaLinks.createUrl({
                      type: "abilityPicture",
                      heroName: currentHero[0].name_loc,
                      abilityName: currentAbil.name,
                    })})`,
                  }}
                  className={`${styleAbilityDetail["switch-video"]} ${
                    isActive(currentAbil.id, activeAbilityId)
                      ? styleAbilityDetail["active-abil"]
                      : styleAbilityDetail["faded-element"]
                  }`}
                >
                  {order !== 0 ? bcAganim : ""}
                </div>
              );
              return (
                <li
                  key={currentAbil.id}
                  style={{ order: order }}
                  className={styleAbilityDetail["ability-selector-item"]}
                  onClick={() => handleAbilityClick(currentAbil)}
                >
                  {currentElement}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styleAbilityDetail["ability-right"]}>
          <div className={styleAbilityDetail["icon-text-description"]}>
            <img src="" alt="" className={styleAbilityDetail["ability-img"]} />
            <div className={styleAbilityDetail["wrapper-text-description"]}>
              <h3 className={styleAbilityDetail["name-of-ability"]}>
                <p className={styleAbilityDetail["text-description"]}></p>
              </h3>
            </div>
          </div>
          <div className={styleAbilityDetail["wrapper-details"]}></div>
        </div>
      </div>
    </section>
  );
}

// mediaLinks.createUrl({
//   type: "abilityVideo",
//   heroName: currentHero[0].name_loc,
//   abilityName: abilityData.name_loc,
//   formatVideo: "jpg",
// })



if (currentAbil.ability_has_shard && !currentAbil.ability_is_granted_by_shard ) {
                
} order = 1;