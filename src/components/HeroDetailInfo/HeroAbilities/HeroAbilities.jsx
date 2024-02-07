import styleAbilities from "./HeroAbilities.module.scss";
import PropTypes from 'prop-types';
import { mediaLinks } from "../../../shared/utils/createUrl";
import { useContext, useMemo } from "react";
import {basicUrl} from "../../../shared/utils/createBasicShardScepterUrl";
import {AbilityContext} from "../HeroDetailnfo";
import { formattingText } from "../../../shared/utils/formattingText";
import parse from "html-react-parser";

export default function HeroAbilities({ heroData }) {

  const { handleAbilityClick, scollToRef } = useContext(AbilityContext);
   
  const filtredAbilities = useMemo(() => {
     const filtredAbil = heroData.abilities
    .filter(
      (ability, index) =>
        !ability.ability_is_granted_by_scepter &&
        !ability.ability_is_granted_by_shard &&
        !(heroData.id === 74 && index >= 4)
    ).map(function(item) {
      return {
        ...item,
        abilityVideoUrlJpg: basicUrl(
          heroData.name_loc,
          item.name,
          "jpg",
          item.ability_is_granted_by_scepter,
          item.ability_is_granted_by_shard
        ),
        abilityVideoUrlWebm: basicUrl(
          heroData.name_loc,
          item.name,
          "webm",
          item.ability_is_granted_by_scepter,
          item.ability_is_granted_by_shard
        ),
        abilityVideoUrlMp4: basicUrl(
          heroData.name_loc,
          item.name,
          "mp4",
          item.ability_is_granted_by_scepter,
          item.ability_is_granted_by_shard
        ), 
      }
    })
    return filtredAbil
  }, [heroData])

  return (
    <div className={styleAbilities["wrapper-abilities"]}>
      <ul className={styleAbilities["hero-abilities-list"]}>
        {filtredAbilities.map(function (item) {
            const description = formattingText(item)  
            return (
              <li
                key={item.id}
                className={styleAbilities["hero-abilities-item"]}
                onClick = {() => handleAbilityClick(item)}
              >
                <img
                  className={styleAbilities["hero-ability-icon"]}
                  src={mediaLinks.createUrl({
                    type: "abilityPicture",
                    heroName: heroData.name_loc,
                    abilityName: item.name,
                  })}
                  alt={`ability picture: ${item.name_loc}`}
                  onClick={() => scollToRef.current.scrollIntoView({ behavior: 'smooth' })}
                />
                <div className={styleAbilities["description-ability"]}>
                  <div className={styleAbilities["tootip-body"]}>
                    <div className={styleAbilities["wrapper-ability-video"]}>
                      <video
                        className={styleAbilities["ability-video"]}
                        autoPlay={true} // autoPlay без значения равносильно autoPlay={true}
                        preload="auto"
                        loop
                        playsInline
                        muted
                        poster={mediaLinks.createUrl({
                          type: "abilityVideo",
                          heroName: heroData.name_loc,
                          abilityName: item.name,
                          formatVideo: "jpg",
                        })}
                      >
                        <source
                          type="video/webm"
                          src={mediaLinks.createUrl({
                            type: "abilityVideo",
                            heroName: heroData.name_loc,
                            abilityName:  item.name,
                            formatVideo: "webm",
                          })}
                        />
                        <source
                          type="video/mp4"
                          src={mediaLinks.createUrl({
                            type: "abilityVideo",
                            heroName: heroData.name_loc,
                            abilityName:  item.name,
                            formatVideo: "mp4",
                          })}
                        />
                      </video>
                    </div>
                    <div className={styleAbilities["wrapper-description-text"]}>
                      <h3 className={styleAbilities["name-of-ability"]}>
                        {item.name_loc}
                      </h3>
                      <p className={styleAbilities["description-text"]}>
                        { parse(description) }
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

HeroAbilities.propTypes = {
  heroData: PropTypes.shape({
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability_is_granted_by_scepter: PropTypes.bool,
      ability_is_granted_by_shard: PropTypes.bool,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name_loc: PropTypes.string.isRequired
    })).isRequired,
    id: PropTypes.number.isRequired,
    name_loc: PropTypes.string.isRequired,
  }).isRequired,
};