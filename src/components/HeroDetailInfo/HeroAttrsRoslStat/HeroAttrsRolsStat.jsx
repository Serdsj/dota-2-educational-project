import { useContext } from "react";
import styleAttrRolStar from "./HeroAttrsRolsStat.module.scss";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { createUrlImg } from "../../../shared/utils/createUrImg";
import { CONFIG } from "../../../shared/config";
import agility from "../../../img/hero_agility.png";
import intelligence from "../../../img/hero_intelligence.png";
import strength from "../../../img/hero_strength.png";
import universal from "../../../img/hero_universal.png";

export default function HeroAttrsRolsStat() {
  const { currentHeroData } = useContext(HeroDataContext);
  const { data: currentHero } = currentHeroData;

  if (!currentHero || currentHero.length === 0) {
    return <div>Loading or no data available</div>;
  }

  const { name_loc, max_health, max_mana, health_regen, mana_regen } =
    currentHero[0];
  const imgUrl = (name) =>
    createUrlImg(`${CONFIG.IMG_URL}/heroes`, `${name}`, "png");
  const integeraManaReg = Math.floor(mana_regen * 10) / 10;
  const integerHealthReg = Math.ceil(health_regen * 10) / 10;

  return (
    <div className={styleAttrRolStar["wrapper-attrs-rol-stat"]}>
      <div className={styleAttrRolStar["attrs-rols-stat"]}>
        <div className={styleAttrRolStar["attrs"]}>
          <div className={styleAttrRolStar["wrapper-hero-attrs"]}>
            <div className={styleAttrRolStar["hero-block"]}>
              <img
                src={imgUrl(name_loc)}
                alt={`picture of ${name_loc}`}
                className={styleAttrRolStar["hero-small-icon"]}
              />
              <div className={styleAttrRolStar["hero-hp"]}>
                <span className={styleAttrRolStar["hero-quantity-hp"]}>
                  {max_health}
                </span>
                <span className={styleAttrRolStar["regeneration-hp"]}>
                  +{integerHealthReg}
                </span>
              </div>
              <div className={styleAttrRolStar["hero-mana"]}>
                <span className={styleAttrRolStar["hero-quantity-mana"]}>
                  {max_mana}
                </span>
                <span className={styleAttrRolStar["regeneration-mana"]}>
                  +{integeraManaReg}
                </span>
              </div>
            </div>
            <div className={styleAttrRolStar["wrapper-attributes-details"]}>
              <div className={styleAttrRolStar["hero-atr"]}>
                <img
                  width="30"
                  height="30"
                  src={strength}
                  alt="picture of attribute"
                  className={styleAttrRolStar["attr-icon"]}
                />
                <span className={styleAttrRolStar["quantity-attr"]}></span>
                <span className={styleAttrRolStar["attribute-gain"]}></span>
              </div>
              <div className={styleAttrRolStar["hero-atr"]}>
                <img
                  width="30"
                  height="30"
                  src={agility}
                  alt="picture of attribute"
                  className={styleAttrRolStar["attr-icon"]}
                />
                <span className={styleAttrRolStar["quantity-attr"]}></span>
                <span className={styleAttrRolStar["attribute-gain"]}></span>
              </div>
              <div className={styleAttrRolStar["hero-atr"]}>
                <img
                  width="30"
                  height="30"
                  src={intelligence}
                  alt="picture of attribute"
                  className={styleAttrRolStar["attr-icon"]}
                />
                <span className={styleAttrRolStar["quantity-attr"]}></span>
                <span className={styleAttrRolStar["attribute-gain"]}></span>
              </div>
            </div>
          </div>
          <h3 className={styleAttrRolStar["title-block"]}>ATTRIBUTES</h3>
        </div>

        <div className={styleAttrRolStar["line-separator"]}></div>

        <div className={styleAttrRolStar["roles"]}>
          <ul className={styleAttrRolStar["wrapper-roles-list"]}>
            <li className={styleAttrRolStar["role-item"]}>
              <span className={styleAttrRolStar["name-of-role"]}></span>
              <div className={styleAttrRolStar["wrapper-bar"]}>
                <div className={styleAttrRolStar["background"]}></div>
                <div className={styleAttrRolStar["filled"]}></div>
              </div>
            </li>
          </ul>
          <h3 className={styleAttrRolStar["title-block"]}>ROLES</h3>
        </div>

        <div className={styleAttrRolStar["line-separator"]}></div>

        <div className={styleAttrRolStar["stats"]}>
          <ul className={styleAttrRolStar["stats-list"]}>
            <li className={styleAttrRolStar["stats-item"]}>
              <div className={styleAttrRolStar["wrapper-stats"]}></div>
            </li>
            <li className={styleAttrRolStar["stats-item"]}>
              <div className={styleAttrRolStar["wrapper-stats"]}></div>
            </li>
            <li className={styleAttrRolStar["stats-item"]}>
              <div className={styleAttrRolStar["wrapper-stats"]}></div>
            </li>
          </ul>
          <h3 className={styleAttrRolStar["title-block"]}>STATS</h3>
        </div>
      </div>
    </div>
  );
}
