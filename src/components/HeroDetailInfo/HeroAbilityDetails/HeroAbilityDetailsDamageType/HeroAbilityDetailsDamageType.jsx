import styleTypeAttack from "./HeroAbilityDetailsDamageType.module.scss";
import PropTypes from 'prop-types';
export function DamageType({ damageValue }) {
  let damageType;
  let textStyle = {};

  switch (damageValue) {
    case 1:
      damageType = "Physical";
      textStyle = { color: "rgb(255, 0, 0)" };
      break;
    case 2:
      damageType = "Magical";
      textStyle = { color: "rgb(163, 220, 238)" };
      break;
    case 4:
      damageType = "Pure";
      textStyle = { color: "orange" };
      break;
    default:
      damageType = null;
  }

  return (
    damageType && (
      <div className={styleTypeAttack["type-attack"]}>
        DAMAGE TYPE:{" "}
        <span
          className={styleTypeAttack["type-attack-value"]}
          style={textStyle}
        >
          {damageType}
        </span>{" "}
      </div>
    )
  );
}

DamageType.propTypes= {
  damageValue: PropTypes.number
}
