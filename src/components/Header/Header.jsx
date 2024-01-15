import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header className={styles["header"]}>
        <ul className={styles["header__menuList"]}>
          <li className={styles["header__menuList__item"]}>
            <NavLink to="/">
            <img className={styles['game-logo']} src="../src/img/dota2_logo_horiz.png" alt="Logo of dota 2" />
            </NavLink>
          </li>
          <li className={styles["header__menuList__item"]}> <NavLink to="/" className={styles["menu-link"]}>  HEROES  </NavLink> </li>
        </ul>
      </header>
    </>
  );
}
