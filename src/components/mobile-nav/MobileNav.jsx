import styles from "./MobileNav.module.css";
import { Link } from "react-router-dom";
import Backdrop from "../backdrop/Backdrop.jsx";
import { Fragment, useState } from "react";

const MobileNav = () => {
  const [toggleB, setToggleB] = useState(true);

  const clickMe = () => {
    setToggleB((val) => {
        return !val
    });
  };
  

  return (
    <Fragment>
      {toggleB && (
        <div>
          <Backdrop sideNav={clickMe} mobileNav={}/>
          <nav className={styles["mobile-nav"]}>
            <ul className={styles["mobile-nav__items"]}>
              <li className={styles["mobile-nav__item"]}>
                <Link className={styles.link} to="#">
                  Packages
                </Link>
              </li>
              <li className={styles["mobile-nav__item"]}>
                <Link className={styles.link} to="#">
                  Customers
                </Link>
              </li>
              <li
                className={`${styles["mobile-nav__item"]} ${styles["mobile-nav__item--cta"]}`}
              >
                <Link className={styles.link} to="#">
                  Start Hosting
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

export default MobileNav;
