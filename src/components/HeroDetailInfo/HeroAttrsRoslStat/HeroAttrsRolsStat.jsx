import { useContext, memo } from "react";
import styleAttrRolStar from "./HeroAttrsRolsStat.module.scss";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { mediaLinks } from "../../../shared/utils/createUrl";
import agility from "../../../img/hero_agility.png";
import intelligence from "../../../img/hero_intelligence.png";
import strength from "../../../img/hero_strength.png";
import damage from "../../../img/icon_damage.png";
import attackTime from "../../../img/icon_attack_time.png";
import attackRange from "../../../img/icon_attack_range.png";
import projectileSpeed from "../../../img/icon_projectile_speed.png";
import armorImg from "../../../img/icon_armor.png";
import magicResist from "../../../img/icon_magic_resist.png";
import movementSpeed from "../../../img/icon_movement_speed.png";
import turnRate from "../../../img/icon_turn_rate.png";
import vision from "../../../img/icon_vision.png";

 function HeroAttrsRolsStat() {
  const { currentHeroData } = useContext(HeroDataContext);
  const { data: currentHero } = currentHeroData;

  if (!currentHero || currentHero.length === 0) {
    return <div></div>;
  }

  const {
    name_loc,
    max_health,
    max_mana,
    health_regen,
    mana_regen,
    str_base,
    agi_base,
    int_base,
    str_gain,
    agi_gain,
    int_gain,
    role_levels,
    damage_max,
    damage_min,
    attack_rate,
    attack_range,
    abilities,
    armor, 
    magic_resistance,
    movement_speed,
    turn_rate,
    sight_range_day,
    sight_range_night,
  } = currentHero[0];

  const integeraManaReg = Math.floor(mana_regen * 10) / 10;
  const integerHealthReg = Math.ceil(health_regen * 10) / 10;

  const roleNames = [
    "Carry",
    "Support",
    "Nuker",
    "Disabler",
    "Jungler",
    "Durable",
    "Escape",
    "Pusher",
    "Initiator",
  ];

  return (
    <div className={styleAttrRolStar["wrapper-attrs-rol-stat"]}>
      <div className={styleAttrRolStar["attrs-rols-stat"]}>
        <div className={styleAttrRolStar["attrs"]}>
          <div className={styleAttrRolStar["wrapper-hero-attrs"]}>
            <div className={styleAttrRolStar["hero-block"]}>
              <img
                src={mediaLinks.createUrl({
                  type: "heroImg",
                  heroName: name_loc,
                })}
                key={name_loc}
                alt={`picture of ${name_loc}`}
                className={styleAttrRolStar["hero-small-icon"]}
              />
              <div className={styleAttrRolStar["hero-hp"]}>
                <span className={styleAttrRolStar["hero-quantity-hp"]}>
                  {max_health}
                </span>
                <span className={styleAttrRolStar["regeneration-hp"]}>
                  +{integerHealthReg.toFixed(1)}
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
                <span className={styleAttrRolStar["quantity-attr"]}>
                  {str_base}
                </span>
                <span className={styleAttrRolStar["attribute-gain"]}>
                  +{str_gain.toFixed(1)}
                </span>
              </div>
              <div className={styleAttrRolStar["hero-atr"]}>
                <img
                  width="30"
                  height="30"
                  src={agility}
                  alt="picture of attribute"
                  className={styleAttrRolStar["attr-icon"]}
                />
                <span className={styleAttrRolStar["quantity-attr"]}>
                  {agi_base}
                </span>
                <span className={styleAttrRolStar["attribute-gain"]}>
                  +{agi_gain.toFixed(1)}
                </span>
              </div>
              <div className={styleAttrRolStar["hero-atr"]}>
                <img
                  width="30"
                  height="30"
                  src={intelligence}
                  alt="picture of attribute"
                  className={styleAttrRolStar["attr-icon"]}
                />
                <span className={styleAttrRolStar["quantity-attr"]}>
                  {int_base}
                </span>
                <span className={styleAttrRolStar["attribute-gain"]}>
                  +{int_gain.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
          <h3 className={styleAttrRolStar["title-block"]}>ATTRIBUTES</h3>
        </div>

        <div className={styleAttrRolStar["line-separator"]}></div>

        <div className={styleAttrRolStar["roles"]}>
          <ul className={styleAttrRolStar["roles-list"]}>
            {roleNames.map((roleName, index) => (
              <li key={index} className={styleAttrRolStar["role-item"]}>
                <span className={styleAttrRolStar["name-of-role"]}>
                  {roleName}
                </span>
                <div className={styleAttrRolStar["wrapper-bar"]}>
                  <div className={styleAttrRolStar["background"]}></div>
                  <div
                    className={styleAttrRolStar["filled"]}
                    style={{ width: `${role_levels[index] * 33.3}%` }} // Пример расчета ширины на основе значения role_levels
                  ></div>
                </div>
              </li>
            ))}
          </ul>
          <h3 className={styleAttrRolStar["title-block"]}>ROLES</h3>
        </div>

        <div className={styleAttrRolStar["line-separator"]}></div>

        <div className={styleAttrRolStar["stats"]}>
          <ul className={styleAttrRolStar["stats-list"]}>
            <li className={styleAttrRolStar["stats-item"]}>
              <h4 className={styleAttrRolStar["title-of-stat"]}>ATTACK</h4>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={damage}
                  alt="picture of damage"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${damage_min}-${damage_max}`}</span>
              </div>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={attackTime}
                  alt="picture of attackTime"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${attack_rate}`}</span>
              </div>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={attackRange}
                  alt="picture of attackRange"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${attack_range}`}</span>
              </div>
              <div className={`${ abilities[0].cast_ranges[0] === 0 ? styleAttrRolStar["hidden-block"] : styleAttrRolStar["wrapper-stats-img-value"]}`}>
                <img
                  width="24"
                  height="24"
                  src={projectileSpeed}
                  alt="picture of projectileSpeed"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${abilities[0].cast_ranges[0]}`}</span>
              </div>
            </li>

            <li className={styleAttrRolStar["stats-item"]}>
              <h4 className={styleAttrRolStar["title-of-stat"]}>DEFENSE</h4>

              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={armorImg}
                  alt="picture of armorImg"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${armor.toFixed(1)}`}</span>
              </div>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={magicResist}
                  alt="picture of magicResist"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${magic_resistance}%`}</span>
              </div>
            </li>

            <li className={styleAttrRolStar["stats-item"]}>
              <h4 className={styleAttrRolStar["title-of-stat"]}>MOBILITY</h4>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={movementSpeed}
                  alt="picture of movementSpeed"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${movement_speed}`}</span>
              </div>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={turnRate}
                  alt="picture of turnRate"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${turn_rate}`}</span>
              </div>
              <div className={styleAttrRolStar["wrapper-stats-img-value"]}>
                <img
                  width="24"
                  height="24"
                  src={vision}
                  alt="picture of vision"
                />
                <span
                  className={styleAttrRolStar["value-of-stat"]}
                >{`${sight_range_day}/${sight_range_night}`}</span>
              </div>
            </li>
          </ul>
          <h3 className={styleAttrRolStar["title-block"]}>STATS</h3>
        </div>
      </div>
    </div>
  );
}


export default memo(HeroAttrsRolsStat)
