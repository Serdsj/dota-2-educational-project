import { useContext } from "react";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { useCurrentAbilityData } from "../useCurrentAbilityData";
import { DamageType } from "./HeroAbilityDetails_DamageType/HeroAbilityDetails_DamageType";
import styleAbilityDetail from "./HeroAbilityDetails.module.scss";
import { mediaLinks } from "../../../shared/utils/createUrl";
import { chooseLinkAbilVideo } from "./chooseLinkAbilVideo";
import { formattingText } from "../../../shared/utils/formattingText";
import cooldownPicture from "../../../img/cooldown.png";
import parse from "html-react-parser";

export default function HeroAbilityDetails({abilityData, activeAbilityId, isAnimating, handleAbilityClick}) {
  const { currentHeroData } = useContext(HeroDataContext);
  const { data: currentHero } = currentHeroData;
  // const { abilityData, activeAbilityId, isAnimating, handleAbilityClick } =
  //   useCurrentAbilityData(currentHero);

  if (!abilityData) {
    return <div></div>;
  }

  const isActive = (currentId, activeId) => currentId === activeId;
  const { abilities } = currentHero[0];
  const {
    name_loc,
    damage,
    cooldowns,
    desc_loc,
    lore_loc,
    mana_costs,
    name,
    special_values,
    dispellable,
    durations,
    immunity,
  } = abilityData;

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
              // let abilityWithShard;

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
          <div className={styleAbilityDetail["wrapper-ability-rigth"]}>
            <div className={styleAbilityDetail["abil-icon-text-description"]}>
              <img
                src={mediaLinks.createUrl({
                  type: "abilityPicture",
                  heroName: currentHero[0].name_loc,
                  abilityName: name,
                })}
                alt={`${name_loc} picture`}
                className={styleAbilityDetail["ability-img"]}
              />
              <div className={styleAbilityDetail["wrapper-text-description"]}>
                <h3 className={styleAbilityDetail["name-of-ability"]}>
                  {name_loc}
                </h3>
                {abilityData.ability_is_granted_by_scepter ? (
                  <p className={styleAbilityDetail["text-new-abil"]}>
                    SCEPTER GRANTS NEW ABILITY
                  </p>
                ) : (
                  ""
                )}
                {abilityData.ability_is_granted_by_shard ? (
                  <p className={styleAbilityDetail["text-new-abil"]}>
                    SHARD GRANTS NEW ABILITY
                  </p>
                ) : (
                  ""
                )}
                <p className={styleAbilityDetail["text-description-abil"]}>
                  {parse(formattingText(abilityData))}
                </p>
              </div>
            </div>
            <div className={styleAbilityDetail["wrapper-details-ability"]}>
              <div className={styleAbilityDetail["generic-value"]}>
                <div className={styleAbilityDetail["column"]}>
                  <DamageType damageValue={damage} />
                </div>
                <div className={styleAbilityDetail["column"]}>
                  {immunity !== 0 ? (
                    <div
                      className={
                        styleAbilityDetail["wrapper-specific-values-item"]
                      }
                    >
                      PIERCES SPELL IMMUNITY:
                      <span
                        className={styleAbilityDetail["specific-value-item"]}
                      >
                        {" "}
                        {immunity === 3 ? "Yes" : "No"}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                    {dispellable !== 0 ? (
                    <div
                      className={
                        styleAbilityDetail["wrapper-specific-values-item"]
                      }
                    >
                      DISPELLABLE:
                      <span
                        className={styleAbilityDetail["specific-value-item"]}
                      >
                        {dispellable === 3 ? "Yes" : "No"}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styleAbilityDetail["specific-values"]}>
                {special_values.map(function (item) {
                  if (item.heading_loc) {
                    return (
                      <div
                      key={item.heading_loc}
                        className={
                          styleAbilityDetail["wrapper-specific-values-item"]
                        }
                      >
                        <span
                          className={
                            styleAbilityDetail["name-of-specific-value"]
                          }
                        >
                          {parse(item.heading_loc)} 
                        </span>
                        <span
                          className={styleAbilityDetail["specific-value-item"]}
                        >
                          {item.values_float.join("/")}
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
              {cooldowns[0] === 0 && mana_costs[0] === 0 ? (
                ""
              ) : (
                <div className={styleAbilityDetail["bottom-values"]}>
                  <div className={styleAbilityDetail["wrapper-values"]}>
                    <img
                      src={cooldownPicture}
                      alt={"cooldown picture"}
                      className={styleAbilityDetail["picture-cooldown"]}
                    />
                    <span className={styleAbilityDetail["quentity-of-values"]}>
                      {cooldowns.join("/")}
                    </span>
                  </div>
                  <div className={styleAbilityDetail["wrapper-values"]}>
                    <div className={styleAbilityDetail["blue-box"]}></div>
                    <span className={styleAbilityDetail["quentity-of-values"]}>
                      {mana_costs.join("/")}
                    </span>
                  </div>
                </div>
              )}

              <div className={styleAbilityDetail["lore-loc"]}>{lore_loc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// damage 1 - это физа, 2 - это магия , 4 - это чистый
// attack_capability - 1 это No Target
// dispellable - 3 это не рассеиваемый, 2 рассеиваемый, 0 вообще не вносим
// immunity - 4 это no, 3 - это yes
// behavior - 2 это passiv
// behavior - большое число это  unit - target
// behavior - "2052" это No Target
// behaivor - "48" это Point Target
