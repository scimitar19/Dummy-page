import styles from "./Modal.module.css";
import { Link } from "react-router-dom";
import Backdrop from "../backdrop/Backdrop.jsx";
import { Fragment } from "react";

const Modal = ({ appFn, appButton }) => {
  const affirmativeHandler = () => {
    appButton();
  };

  const negativeHandler = () => {
    appButton();
  };

  return (
    <Fragment>
      <Backdrop modalFn={appFn} />
      <div className={styles.modal}>
        <h1 className={styles["modal__title"]}>Do you want to continue?</h1>
        <div className={styles["modal__actions"]} onClick={affirmativeHandler}>
          <Link
            to="start-hosting/index.html"
            className={styles["modal__action"]}
          >
            Yes!
          </Link>
          <button
            onClick={negativeHandler}
            className={`${styles["modal__action"]} ${styles["modal__action--negative"]}`}
            type="button"
          >
            No!
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
