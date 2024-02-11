import { useContext, useState, useEffect, memo } from "react";
import { HeroDataContext } from "../../../pages/HeroPage/HeroPage";
import { nameAttributesHero, attributesHero } from "./heroDataDescription";
import HeroBioOrHypeMemo from "./HeroDescriptionBioOrHype/HeroDescriptionBioOrHype";
import { mediaLinks } from "../../../shared/utils/createUrl";
import HeroNavigator from "../HeroNavigator/HeroNavigator";
import heroDescpStyle from "./HeroDescription.module.scss";
import HeroAbilitiesMemo from "../HeroAbilities/HeroAbilities";
import TreeOfTalentsMemo from "../HeroTreeOfTalents/HeroTreeOfTalents";

function HeroDescription() {
  const { currentHeroData, prevHeroData, nextHeroData } =
    useContext(HeroDataContext);

  const { data: currentHero } = currentHeroData;
  const { data: prevHero } = prevHeroData;
  const { data: nextHero } = nextHeroData;

  const [isCurrentAnimation, setIsCurrentAnimation] = useState(false);

  useEffect(() => {
    if (!currentHero || !currentHero[0]?.id) {
      return;
    }

    setIsCurrentAnimation(false);

    const timeoutId = setTimeout(() => {
      setIsCurrentAnimation(true);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [currentHero]);

  if (
    !currentHero ||
    currentHero.length === 0 ||
    !prevHero ||
    prevHero.length === 0 ||
    !nextHero ||
    nextHero.length === 0
  ) {
    return <section className={heroDescpStyle["hero-description"]}> </section>;
  }

  const {
    name_loc,
    primary_attr,
    npe_desc_loc,
    hype_loc,
    complexity,
    id,
    attack_capability,
    bio_loc,
    talents,
  } = currentHero[0];
  const { name_loc: prevHeroName } = prevHero[0];
  const { name_loc: nextHeroName } = nextHero[0];

  const currentName = name_loc;
  const prevName = prevHeroName.toLowerCase().split(" ").join("");
  const nextName = nextHeroName.toLowerCase().split(" ").join("");

  const currentAttributeHero = attributesHero[primary_attr] ?? null;
  const currentNameAttrHero = nameAttributesHero[primary_attr] ?? null;
  return (
    <section className={heroDescpStyle["hero-description"]}>
      <div
        className={`${
          isCurrentAnimation ? heroDescpStyle["background-animation"] : ""
        } ${heroDescpStyle["background-line"]}`}
      ></div>
      <div
        className={`${
          isCurrentAnimation ? heroDescpStyle["animation-move-right"] : ""
        }  ${heroDescpStyle["wrapper-hero-video"]}`}
      >
        <video
          className={heroDescpStyle["hero-video"]}
          key={id}
          autoPlay={true}
          preload="auto"
          loop
          playsInline
          muted
          poster={mediaLinks.createUrl({
            type: "heroVideo",
            heroName: currentName,
            formatVideo: "png",
          })}
        >
          <source
            type="video/webm"
            src={mediaLinks.createUrl({
              type: "heroVideo",
              heroName: currentName,
              formatVideo: "webm",
            })}
          />

          <img
            src={mediaLinks.createUrl({
              type: "heroVideo",
              heroName: currentName,
              formatVideo: "png",
            })}
            alt={`picture of hero ${currentName}`}
          />
        </video>
      </div>
      <div className={heroDescpStyle["background-fade-bottom"]}></div>
      <div
        className={`${
          isCurrentAnimation ? heroDescpStyle["animation-slide-down"] : ""
        } ${heroDescpStyle["hero-vertical-bar"]}`}
      >
        <img
          src={currentAttributeHero}
          alt={`picture of ${currentNameAttrHero}`}
          className={heroDescpStyle["attr-img-bar"]}
        />
        <span className={heroDescpStyle["name-of-hero-bar"]}>
          {currentName}
        </span>
        <span className={heroDescpStyle["hero-id"]}>{id}</span>
        <div className={heroDescpStyle["vertical-line-bar"]}></div>
      </div>
      <section
        className={`${
          isCurrentAnimation ? heroDescpStyle["animated-appear"] : ""
        } ${heroDescpStyle["description"]}`}
      >
        <div className={heroDescpStyle["attribute"]}>
          <img
            width="32"
            height="32"
            src={currentAttributeHero}
            alt={`name of attribute ${currentNameAttrHero}`}
            className={heroDescpStyle["attr-img"]}
          />
          <span className={heroDescpStyle["attr"]}>{currentNameAttrHero}</span>
        </div>
        <h1 className={heroDescpStyle["name-of-hero"]}>{currentName}</h1>
        <p className={heroDescpStyle["short-description"]}>{npe_desc_loc}</p>
        <HeroBioOrHypeMemo
          bioHero={bio_loc}
          hypeHero={hype_loc}
          typeAttack={attack_capability}
          complexity={complexity}
        />
      </section>
      <HeroNavigator prevName={prevName} nextName={nextName} />

      <div
        className={` ${
          isCurrentAnimation ? heroDescpStyle["animated-appear"] : ""
        } ${heroDescpStyle["wrapper-top-skills-bar"]}`}
      >
        <h3 className={heroDescpStyle["title-abilities"]}>ABILITIES</h3>
        <div className={heroDescpStyle["wrapper-talents-abilities"]}>
          <TreeOfTalentsMemo heroTalents={talents} heroData={currentHero[0]} />
          <HeroAbilitiesMemo heroData={currentHero[0]} />
        </div>
      </div>
    </section>
  );
}

const  HeroDescriptionMemo = memo(HeroDescription);

export default HeroDescriptionMemo
