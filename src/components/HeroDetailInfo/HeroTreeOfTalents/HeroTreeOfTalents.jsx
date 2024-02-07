import styleTalents from "./HeroTreeOfTalents.module.scss";
import tree from "../../../img/tree-talents.svg";
import {parsingTalents} from "./parsingTalents";
import PropTypes from 'prop-types';

export default function TreeOfTalents({ heroData }) {

  return (
    <div className={styleTalents["wrapper-tree-of-talents"]}>
      <img
        className=""
        width="80"
        height="80"
        src={tree}
        alt="tree of talents"
      />
      <div className={styleTalents["tool-tip"]}>
        <div className={styleTalents["tooltip-body"]}>
          <div className={styleTalents["description-tree-talents"]}>
            <h3 className={styleTalents["title-tree"]}>TALENT TREE</h3>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 7)}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>25</div>
              </div>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 6)}
              </p>
            </div>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 5)}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>20</div>{" "}
              </div>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 4)}
              </p>
            </div>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 3)}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>15</div>{" "}
              </div>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 2)}
              </p>
            </div>
            <div className={styleTalents["block-of-talent"]}>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 1)}
              </p>
              <div className={styleTalents["wrapper-level-talent"]}>
                <div className={styleTalents["level-talent"]}>10</div>
              </div>
              <p className={styleTalents["description-talent"]}>
                {parsingTalents(heroData, 7)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TreeOfTalents.propTypes= {
  heroData: PropTypes.object,
}