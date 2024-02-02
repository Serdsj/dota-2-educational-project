import styleAbilities from "./HeroAbilities.module.scss";
import { mediaLinks } from "../../../shared/utils/createUrl";
import { useContext } from "react";
import {AbilityContext} from "../HeroDetailnfo"
import { formattingText } from "../../../shared/utils/formattingText";
import parse from "html-react-parser";

export default function HeroAbilities({ heroData }) {

  const { handleAbilityClick } = useContext(AbilityContext);
  console.log(handleAbilityClick)

  const filtredAbilities = heroData.abilities
    .filter(
      (ability, index) =>
        !ability.ability_is_granted_by_scepter &&
        !ability.ability_is_granted_by_shard &&
        !(heroData.id === 74 && index >= 4)
    )
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
                  onClick={() => console.log("click!!!")}
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
                          abilityName: item.name_loc,
                          formatVideo: "jpg",
                        })}
                      >
                        <source
                          type="video/webm"
                          src={mediaLinks.createUrl({
                            type: "abilityVideo",
                            heroName: heroData.name_loc,
                            abilityName: item.name_loc,
                            formatVideo: "webm",
                          })}
                        />
                        <source
                          type="video/mp4"
                          src={mediaLinks.createUrl({
                            type: "abilityVideo",
                            heroName: heroData.name_loc,
                            abilityName: item.name_loc,
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
