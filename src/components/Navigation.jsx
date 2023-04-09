import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles["main-header"]}>
      <div>
        <a href="index.html" className={styles["main-header__brands"]}>uHost</a>
      </div> 
      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav__items"]}>
          <li className={styles["main-nav__item"]}>
            <a href="packages/index.html">Packages</a>
          </li>
          <li className={styles["main-nav__item"]}>
            <a href="customers/index.html">Customers</a>
          </li>
          <li className={`${styles["main-nav__item"]} ${styles["main-nav__item--cta"]}`}>
            <a href="start-hosting/index.html">Start Hosting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;