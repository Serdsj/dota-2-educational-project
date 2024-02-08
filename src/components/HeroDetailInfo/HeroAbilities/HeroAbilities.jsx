import styleAbilities from "./HeroAbilities.module.scss";
import PropTypes from "prop-types";
import { mediaLinks } from "../../../shared/utils/createUrl";
import { useContext, memo } from "react";
import { useAbilitiesDataAndEvent } from "./useAbilitiesDataAndEvent";
import { AbilityContext } from "../HeroDetailnfo";
import { formattingText } from "../../../shared/utils/formattingText";
import parse from "html-react-parser";

 function HeroAbilities({ heroData }) {
  const { handleAbilityClick, scollToRef } = useContext(AbilityContext);

  const  { filtredAbilities, videoRefs,  handleMouseEnter } = useAbilitiesDataAndEvent(heroData)

  return (
    <div className={styleAbilities["wrapper-abilities"]}>
      <ul className={styleAbilities["hero-abilities-list"]}>
        {filtredAbilities.map(function (item) {
          const description = formattingText(item);
          return (
            <li
              key={item.id}
              className={styleAbilities["hero-abilities-item"]}
              onClick={() => handleAbilityClick(item)}
            >
              <img
                className={styleAbilities["hero-ability-icon"]}
                src={mediaLinks.createUrl({
                  type: "abilityPicture",
                  heroName: heroData.name_loc,
                  abilityName: item.name,
                })}
                alt={`ability picture: ${item.name_loc}`}
                onClick={() =>
                  scollToRef.current.scrollIntoView({ behavior: "smooth" })
                }
                onMouseEnter={() => handleMouseEnter(item.id)}
              />
              <div className={styleAbilities["description-ability"]}>
                <div className={styleAbilities["tootip-body"]}>
                  <div className={styleAbilities["wrapper-ability-video"]}>
                  <video
                  className={`lazy ${styleAbilities["ability-video"]}`}
                  ref={el => videoRefs.current.set(item.id, el)}
                  autoPlay
                  preload="auto"
                  loop
                  playsInline
                  muted
                  poster={item.abilityVideoUrlJpg}
                  data-src-webm={item.abilityVideoUrlWebm}
                  data-src-mp4={item.abilityVideoUrlMp4}
                >
                  <source type="video/webm" />
                  <source type="video/mp4" />
                </video>
                  </div>
                  <div className={styleAbilities["wrapper-description-text"]}>
                    <h3 className={styleAbilities["name-of-ability"]}>
                      {item.name_loc}
                    </h3>
                    <p className={styleAbilities["description-text"]}>
                      {parse(description)}
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
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        ability_is_granted_by_scepter: PropTypes.bool,
        ability_is_granted_by_shard: PropTypes.bool,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name_loc: PropTypes.string.isRequired,
      })
    ).isRequired,
    id: PropTypes.number.isRequired,
    name_loc: PropTypes.string.isRequired,
  }).isRequired,
};


export default memo (HeroAbilities)