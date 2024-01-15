export default function HeroAbilityDetails(props) {
  return (
    <section className="ability-details">
      <h2 className="title-block">ABILITY DETAILS:</h2>

      <div className="wrapper-video-ability-description">
       <div className="ability-left">
        <div className="video-container">
          <video src="">
            <source />
          </video>
        </div>
        <ul className="ability-selector-list">
          <li className="ability-selector-item">
            <button className="switch-video"></button>
          </li>
        </ul>
       </div>
       <div className="ability-right">
        <div className="icon-text-description">
          <img src="" alt="" className="ability-img" />
         <div className="wrapper-text-description">
          <h3 className="name-of-ability">
            <p className="text-description"></p>
          </h3>
         </div>
        </div>
        <div className="wrapper-details"></div>
       </div>
      </div>
    </section>
  )
}
