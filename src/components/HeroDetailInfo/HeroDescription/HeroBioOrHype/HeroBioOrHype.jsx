import { useState } from "react";
import heroBioOrHypeStyle from "./HeroBioOrHype.module.scss";
import parse from "html-react-parser";
import melee from "../../../../img/melee.svg";
import ranged from "../../../../img/ranged.svg";
import { complexityHeroData } from "../heroDataDescription";

export function HeroBioOrHype({
  bioHero = "",
  hypeHero = "",
  typeAttack,
  complexity,
}) {
  // const [isBioHero, setIsBioHero] = useState(true);
  // const [isHypeHero, setIsHypeHero] = useState(true);
  const [isVisibleText, setIsVisibleText] = useState(true);

  const updatedTextHype = hypeHero
    .replace(/<b>/g, `<span className="${heroBioOrHypeStyle["bold"]}">`)
    .replace(/<\/b>/g, `</span>`);

  // const toggleBioHero = () => {
  //   setIsBioHero(!isBioHero);
  // };

  // const toggleHypeHero = () => {
  //   setIsHypeHero(!isHypeHero);
  // };

  const toggleText = () => {
    setIsVisibleText(!isVisibleText)
  }

  return (
    <div className={heroBioOrHypeStyle["hero-bio-or-hype"]}>   
      <div
        className={`${heroBioOrHypeStyle["wrapper-bio-hero"]} ${isVisibleText ? heroBioOrHypeStyle["hidden-text-bio"] : ""} `}
        // ${heroBioOrHypeStyle["hidden-text-bio"]}
      >
        <p className={heroBioOrHypeStyle["bio-hero-text"]}>{parse(bioHero)}</p>
        <button
          onClick={() => toggleText()}
          className={heroBioOrHypeStyle["style-button-toggle-text"]}
        >
          Close History
        </button>
      </div>

      <div className={`${heroBioOrHypeStyle["wrapper-hype-hero"]} ${!isVisibleText ? heroBioOrHypeStyle["hidden-text-hype"] : "" }`}>
        <p className={heroBioOrHypeStyle["hype-hero-text"]}>
          {parse(updatedTextHype)}
        </p>
        <button
          onClick={() => toggleText()}
          className={heroBioOrHypeStyle["style-button-toggle-text"]}
        >
          Read Full History
        </button>

        <div className={heroBioOrHypeStyle["wrapper-attack-type"]}>
          <span className={heroBioOrHypeStyle["title-characteristic"]}>
            ATTACK TYPE
          </span>
          <div className={heroBioOrHypeStyle["wrapper-icon-name"]}>
            <img
              width="24"
              height="24"
              src={typeAttack === 1 ? melee : ranged}
              alt={`type of attack icon`}
              className={heroBioOrHypeStyle["type-attack-icon"]}
            />
            <span className={heroBioOrHypeStyle["attack-type"]}>{`${
              typeAttack === 1 ? "MELEE" : "RANGED"
            }`}</span>
          </div>
        </div>
        <div className={heroBioOrHypeStyle["wrapper-complexity"]}>
          <span className={heroBioOrHypeStyle["title-characteristic"]}>
            COMPLEXITY
          </span>
          <div className={heroBioOrHypeStyle["wrapper-complexity-icons"]}>
            {complexityHeroData.map((heroComplexity) => {
              return (
                <div key={heroComplexity.id}
                  className={`${heroBioOrHypeStyle["comp-icon"]} ${
                    complexity >= heroComplexity.id
                      ? heroBioOrHypeStyle["active-comp"]
                      : ""
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// const parts = text.split('<b>');
// const newText = parts.map(part => {
//   const subParts = part.split('</b>');
//   if (subParts.length > 1) {
//     return `<span className="${heroDescpStyle.bold}">${subParts[0]}</span>${subParts[1]}`;
//   }
//   return part;
// }).join('');
