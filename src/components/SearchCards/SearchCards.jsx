import stylesSC from "./searchCards.module.scss";
import { filterAttrButtons, filterCompButtons } from "./dataFilter";
import PropTypes from 'prop-types';

export default function SearchCards({
  bindValue,
  handleClickFilter,
  currentFilterAttr,
  currentFilterComp,
}) {
  return (
    <div className={stylesSC["search-box"]}>
      <span className={stylesSC["search-box__name"]}>FILTER HEROES</span>
      <div className={stylesSC["wrapper-filter"]}>
        <span className={stylesSC["name-filter"]}>ATTRIBUTE</span>
        <ul className={stylesSC["attributes-filter-list"]}>
          {filterAttrButtons.map(({ id, type }) => (
            <li key={id} data-id={id} className={stylesSC["attribute-item"]}>
              <button  type="button"
                className={`${stylesSC["attribute-filter"]} ${
                  currentFilterAttr === id ? stylesSC["active"] : ""
                } ${stylesSC[type]}`}
                onClick={() => handleClickFilter(id, "attr")}
              ></button>
            </li>
          ))}
        </ul>
      </div>

      <div className={stylesSC["wrapper-filter"]}>
        <span className={stylesSC["name-filter"]}>COMPLEXITY</span>
        <ul className={stylesSC["list-complexity-filter"]}>
          {filterCompButtons.map(({ id, type }) => (
            <li key={id} data-id={id} className="item-complexity">
              <button type="button"
                className={`${stylesSC[type]} ${
                  currentFilterComp >= id ? stylesSC["active-complexity"] : ""
                }`}
                onClick={() => handleClickFilter(id, "comp")}
              ></button>
            </li>
          ))}
        </ul>
      </div>

      <div className={stylesSC["wrapper-search-form"]}>
        <div className={stylesSC["search-picture"]}></div>
        <form id="search-form" action="" className={stylesSC["search-form"]}>
          <label htmlFor="search"></label>
          <input
            className={stylesSC["search-form__input"]}
            id="search"
            type="text"
            autoComplete="off"
            onChange={(event) => bindValue(event)}
          />
        </form>
      </div>
    </div>
  );
}


SearchCards.propTypes= {
  bindValue: PropTypes.string,
  handleClickFilter: PropTypes.func.isRequired,
  currentFilterAttr: PropTypes.number,
  currentFilterComp: PropTypes.number, 
}