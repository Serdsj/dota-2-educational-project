import styleTypeAttack from "./HeroAbilityDetails_DamageType.module.scss";
import PropTypes from 'prop-types';
export function DamageType({ damageValue }) {
  let damageType;
  let textStyle = {};

  switch (damageValue) {
    case 1:
      damageType = "Physical";
      textStyle = { color: "rgb(255, 0, 0)" }; // Устанавливаем красный цвет текста для физического урона
      break;
    case 2:
      damageType = "Magical";
      textStyle = { color: "rgb(163, 220, 238)" }; // Устанавливаем синий цвет текста для магического урона
      break;
    case 4:
      damageType = "Pure";
      textStyle = { color: "orange" }; // Устанавливаем оранжевый цвет текста для чистого урона
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
