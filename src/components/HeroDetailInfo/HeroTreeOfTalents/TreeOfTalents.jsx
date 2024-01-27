import styleTalents from "./TreeOfTalents.module.scss";
import tree from "../../../img/tree-talents.svg";

export default function TreeOfTalents({ heroTalents }) {
  console.log(heroTalents[7].name_loc);
  return (
    <div className={styleTalents["wrapper-tree-of-talents"]}>
      <img
        className={styleTalents["icon-tree"]}
        width="81"
        height="85"
        src={tree}
        alt="tree of talents"
      />
      <div className={styleTalents["tool-tip"]}>
        <div className={styleTalents["tooltip-body"]}>
          <div className={styleTalents["description-tree-talents"]}>
            <h3 className={styleTalents["title-tree"]}>TALENT TREE</h3>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[7].name_loc}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>25</div>
              </div>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[6].name_loc}
              </p>
            </div>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[5].name_loc}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>20</div>{" "}
              </div>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[4].name_loc}
              </p>
            </div>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[3].name_loc}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>15</div>{" "}
              </div>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[2].name_loc}
              </p>
            </div>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[1].name_loc}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>10</div>
              </div>
              <p className={styleTalents["description-talent"]}>
                {heroTalents[0].name_loc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
