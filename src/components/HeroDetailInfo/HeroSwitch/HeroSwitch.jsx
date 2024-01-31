import { NavLink } from "react-router-dom";

export default function HeroSwitch(props) {
  return (
    <div className="heroes-switch">
      <a className="previous-hero" href="">
        <div className="wrapper-prev-hero">
          <img src="" alt="" className="switch__hero-img" />
          <div className="some-hero-info">
            <span className="switch-name">PREVIOUS HERO</span>
            <span className="name"></span>
            <div className="img-type-attack">
              <img src="" alt="" />
              <span className="type-of-attack"></span>
            </div>
          </div>
        </div>
      </a>
      <a className="all-heroes" href="">
        <div className="wrapper-boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>

        <span className="all-heroes-name"> ALL HEROES </span>
      </a>
      <a className="next-hero" href="">
        <div className="wrapper-next-hero">
          <div className="some-hero-info">
            <span className="switch-name">NEXT HERO</span>
            <span className="name"></span>
            <div className="img-type-attack">
              <img src="" alt="" />
              <span className="type-of-attack"></span>
            </div>
          </div>
          <img src="" alt="" className="switch__hero-img" />
        </div>
      </a>
    </div>
  );
}



