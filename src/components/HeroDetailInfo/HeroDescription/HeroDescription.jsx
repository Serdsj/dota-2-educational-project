import {useHeroData} from "../useHeroData"

export default function HeroDescription(props) {
  
  const {heroDetailData} = useHeroData()

  console.log(heroDetailData)

  return (
    <section className="hero-description">
      <div className="hero-vertical-bar">
        <img src="" alt="" className="attr-img-bar" />
        <span className="name-of-hero-bar"></span>
        <span className="hero-id"></span>
        <div className="vertical-line-bar"></div>
      </div>
      <section className="description">
        <div className="attribute">
          <img src="" alt="" className="attr-img" />
          <span className="attr"></span>
        </div>
        <h1 className="name-of-hero"></h1>
        <p className="short-description"></p>
        <p className="hero-history"></p>
        <button className="read-full-info"></button>
        <div className="wrapper-attack-complexity">
          <div className="wrapper-attack-type">
            <span className="title-characteristic">ATTACK TYPE</span>
            <div className="wrapper-icon-name">
              <img src="" alt="" className="type-attack-icon" />
              <span className="attack-type"></span>
            </div>
          </div>
          <div className="wrapper-complexity">
            <span className="title-characteristic">COMPLEXITY</span>
            <div className="complexity-icons">
              <div className="comp-icon"></div>
              <div className="comp-icon"></div>
              <div className="comp-icon"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
