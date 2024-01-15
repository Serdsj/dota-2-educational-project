export default function HeroAttrsRolsStat(props) {
  return (
    <div className="attrs-rols-stat">
      <div className="attrs">
        {" "}
        // после этого блока ::after сделать линию разделитель
        <div className="hero-block">
          <img src="" alt="" className="hero-small-icon" />
          <div className="hero-hp">
            <span className="hero-quantity-hp"></span>
            <span className="regeneration-hp"></span>
          </div>
          <div className="hero-mana">
            <span className="hero-quantity-mana"></span>
            <span className="regeneration-mana"></span>
          </div>
        </div>
        <div className="wrapper-attributes-details">
          <div className="attr-str">
            <img src="" alt="" className="attr-icon" />
            <span className="quantity-attr"></span>
            <span className="attribute-gain"></span>
          </div>
          <div className="attr-str">
            <img src="" alt="" className="attr-icon" />
            <span className="quantity-attr"></span>
            <span className="attribute-gain"></span>
          </div>
          <div className="attr-str">
            <img src="" alt="" className="attr-icon" />
            <span className="quantity-attr"></span>
            <span className="attribute-gain"></span>
          </div>
        </div>
        <h3 className="title-block">ATTRIBUTES</h3>
      </div>

      <div className="roles">       // после этого блока ::after сделать линию разделитель
        <ul className="wrapper-roles-list">
          <li className="role-item">
            <span className="name-of-role"></span>
            <div className="wrapper-bar">
              <div className="background"></div>
              <div className="filled"></div>
            </div>
          </li>
        </ul>
        <h3 className="title-block">ROLES</h3>
      </div>

      <div className="stats">
        <ul className="stats-list">
          <li className="stats-item"><div className="wrapper-stats"></div></li>
          <li className="stats-item"><div className="wrapper-stats"></div></li>
          <li className="stats-item"><div className="wrapper-stats"></div></li>
        </ul>
      <h3 className="title-block">STATS</h3>
      </div>
    </div>
  );
}
