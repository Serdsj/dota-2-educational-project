import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import gitHub from "../../img/gitHub.svg"

export default function Header() {
  return (
    <>
      <header className={styles["header"]}>
        <ul className={styles["header__menuList"]}>
          <li className={styles["header__menuList__item"]}>
            <NavLink to="/">
              <img
                className={styles["game-logo"]}
                src="../src/img/dota2_logo_horiz.png"
                alt="Logo of dota 2"
              />
            </NavLink>
          </li>
          <li className={styles["header__menuList__item"]}>
            {" "}
            <NavLink to="/" className={styles["menu-link"]}>
              {" "}
              HEROES{" "}
            </NavLink>{" "}
          </li>
          <li className={`${styles["header__menuList__item"]} ${styles["logo-git-position"]}`}>
            <a href="https://github.com/Serdsj/dota-2-educational-project">
              <img
                className={styles["gitHub-logo"]}
                src={gitHub}
                alt="git hub page"
              />
            </a>
          </li>
        </ul>
      </header>
      
    </>
  );
}
