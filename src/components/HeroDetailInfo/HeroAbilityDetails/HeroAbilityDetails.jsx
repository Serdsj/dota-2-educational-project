import { useContext } from "react";
import PropTypes from "prop-types";
import { AbilityContext } from "../HeroDetailnfo";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { DamageType } from "./HeroAbilityDetails_DamageType/HeroAbilityDetails_DamageType";
import styleAbilityDetail from "./HeroAbilityDetails.module.scss";
import { mediaLinks } from "../../../shared/utils/createUrl";
import  GetAbilityDetails  from "./GetAbilityDetails/GetAbilityDetails";
import {
  formattingText,
  formattingTextShard,
  formattingTextScepter,
} from "../../../shared/utils/formattingText";
import cooldownPicture from "../../../img/cooldown.png";
import parse from "html-react-parser";

export default function HeroAbilityDetails({
  abilityData,
  activeAbilityId,
  isAnimating,
  videoRefs,
  handleAbilityClick,
  allAbilities,
}) {
  const { currentHeroData } = useContext(HeroDataContext);
  const { data: currentHero } = currentHeroData;
  const { scollToRef } = useContext(AbilityContext);

  if (!abilityData) {
    return <div></div>;
  }

  const isActive = (currentId, activeId) => currentId === activeId;
  const {
    name_loc,
    damage,
    cooldowns,
    lore_loc,
    mana_costs,
    special_values,
    dispellable,
    immunity,
    ability_is_granted_by_shard,
    ability_is_granted_by_scepter,
    ability_has_scepter,
    ability_has_shard,
    desc_loc,
  } = abilityData;

  return (
    <section className={styleAbilityDetail["ability-details"]}>
      <h2 className={styleAbilityDetail["title-block"]}>ABILITY DETAILS:</h2>

      <div className={styleAbilityDetail["wrapper-video-ability-description"]}>
        <div className={styleAbilityDetail["ability-left"]}>
          <div className={styleAbilityDetail["video-container"]}>
            <ul className={"video-list"}>
              {allAbilities.map((ability) => (
                <li
                  key={ability.id}
                  className="card"
                  style={{
                    visibility:
                      ability.id === activeAbilityId ? "visible" : "hidden",
                  }}
                >
                  <video
                    className={`lazy ${styleAbilityDetail["ability-video"]}`}
                    key={ability.id}
                    ref={(el) => videoRefs.current.set(ability.id, el)}
                    autoPlay
                    preload="auto"
                    loop
                    playsInline
                    muted
                    poster={ability.abilityVideoUrlJpg}
                    data-src-webm={ability.abilityVideoUrlWebm}
                    data-src-mp4={ability.abilityVideoUrlMp4}
                  >
                    <source type="video/webm" />
                    <source type="video/mp4" />
                  </video>
                </li>
              ))}
            </ul>
            <div
              className={`${styleAbilityDetail["fade-out"]} ${
                isAnimating ? styleAbilityDetail["fade-in"] : ""
              }`}
            ></div>
          </div>
          <ul
            ref={scollToRef}
            className={styleAbilityDetail["ability-selector-list"]}
          >
            {allAbilities.map(function (currentAbil) {
              const { bcAganim, bcShard, order } =
              GetAbilityDetails(currentAbil);
              return (
                <li
                  key={currentAbil.id}
                  style={{ order: order }}
                  className={styleAbilityDetail["ability-selector-item"]}
                  onClick={() => handleAbilityClick(currentAbil)}
                >
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
                    {bcAganim || bcShard}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styleAbilityDetail["ability-right"]}>
          <div className={styleAbilityDetail["wrapper-ability-rigth"]}>
            <div className={styleAbilityDetail["abil-icon-text-description"]}>
              <ul>
                {allAbilities.map(function (imgItem) {
                  if (imgItem.desc_loc) {
                    return (
                      <li key={imgItem.id}>
                        <img
                          alt={`${imgItem.name_loc} picture`}
                          className={styleAbilityDetail["ability-img"]}
                          style={{
                            display:
                              imgItem.name_loc === name_loc ? "block" : "none",
                          }}
                          src={mediaLinks.createUrl({
                            type: "abilityPicture",
                            heroName: currentHero[0].name_loc,
                            abilityName: imgItem.name,
                          })}
                          loading="lazy"
                        />
                      </li>
                    );
                  }
                })}
              </ul>

              <div className={styleAbilityDetail["wrapper-text-description"]}>
                <h3 className={styleAbilityDetail["name-of-ability"]}>
                  {name_loc}
                </h3>
                {ability_is_granted_by_scepter ? (
                  <p className={styleAbilityDetail["text-new-abil"]}>
                    SCEPTER GRANTS NEW ABILITY
                  </p>
                ) : (
                  ""
                )}
                {ability_is_granted_by_shard ? (
                  <p className={styleAbilityDetail["text-new-abil"]}>
                    SHARD GRANTS NEW ABILITY
                  </p>
                ) : (
                  ""
                )}
                {ability_has_shard &&
                !desc_loc &&
                !ability_is_granted_by_shard ? (
                  <p className={styleAbilityDetail["text-new-abil"]}>
                    SHARD ABILITY UPGRADE
                  </p>
                ) : (
                  ""
                )}
                {ability_has_scepter &&
                !desc_loc &&
                !ability_is_granted_by_scepter ? (
                  <p className={styleAbilityDetail["text-new-abil"]}>
                    SCEPTER ABILITY UPGRADE
                  </p>
                ) : (
                  ""
                )}
                <p className={styleAbilityDetail["text-description-abil"]}>
                  {desc_loc ? parse(formattingText(abilityData)) : ""}
                  {!desc_loc && ability_has_shard
                    ? parse(formattingTextShard(abilityData))
                    : ""}
                  {!desc_loc && ability_has_scepter
                    ? parse(formattingTextScepter(abilityData))
                    : ""}
                </p>
              </div>
            </div>
            <div className={styleAbilityDetail["wrapper-details-ability"]}>
              <div className={styleAbilityDetail["generic-value"]}>
                <div className={styleAbilityDetail["column"]}>
                <DamageType damageValue={damage} />
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
              {abilityData.desc_loc === "" ? (
                ""
              ) : (
                <div className={styleAbilityDetail["specific-values"]}>
                  {special_values.length === 0
                    ? ""
                    : special_values.map(function (item) {
                        if (item.heading_loc) {
                          return (
                            <div
                              key={item.heading_loc}
                              className={
                                styleAbilityDetail[
                                  "wrapper-specific-values-item"
                                ]
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
                                className={
                                  styleAbilityDetail["specific-value-item"]
                                }
                              >
                                {item.is_percentage
                                  ? item.values_float
                                      .map((number) => `${number}%`)
                                      .join(" / ")
                                  : item.values_float.join("/")}
                              </span>
                            </div>
                          );
                        }
                      })}
                </div>
              )}
              {cooldowns[0] === 0 && mana_costs[0] === 0 ? (
                ""
              ) : (
                <div className={styleAbilityDetail["bottom-values"]}>
                  <div className={styleAbilityDetail["wrapper-values"]}>
                    <img
                      src={cooldownPicture}
                      alt={"cooldown picture"}
                      className={styleAbilityDetail["picture-cooldown"]}
                      loading="lazy"
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

HeroAbilityDetails.propTypes = {
  videoRefs: PropTypes.object,
  abilityData: PropTypes.shape({
    name_loc: PropTypes.string,
    damage: PropTypes.number,
    cooldowns: PropTypes.arrayOf(PropTypes.number),
    lore_loc: PropTypes.string,
    mana_costs: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string,
    special_values: PropTypes.arrayOf(
      PropTypes.shape({
        heading_loc: PropTypes.string,
        values_float: PropTypes.arrayOf(PropTypes.number),
        is_percentage: PropTypes.bool,
      })
    ),
    dispellable: PropTypes.number,
    immunity: PropTypes.number,
    ability_is_granted_by_scepter: PropTypes.bool,
    ability_is_granted_by_shard: PropTypes.bool,
    ability_has_scepter: PropTypes.bool,
    ability_has_shard: PropTypes.bool,
    desc_loc: PropTypes.string,
    abilityVideoUrlJpg: PropTypes.string,
    abilityVideoUrlMp4: PropTypes.string,
    abilityVideoUrlWebm: PropTypes.string,
    id: PropTypes.number,
  }),
  activeAbilityId: PropTypes.number,
  isAnimating: PropTypes.bool,
  handleAbilityClick: PropTypes.func.isRequired,
  allAbilities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
