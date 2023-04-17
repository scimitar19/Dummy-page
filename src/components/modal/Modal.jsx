import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ onDispatch }) => {
  
  const affirmativeHandler = () => {
    onDispatch({type: "removeBackdrop", link: "https://www.youtube.com"})
  };

  const negativeHandler = () => {
    onDispatch({type: "removeBackdrop", link: "#"})
  };

  return (
    <div className={styles.modal}>
      <h1 className={styles["modal__title"]}>Do you want to continue?</h1>
      <div className={styles["modal__actions"]} onClick={affirmativeHandler}>
        <Link to="start-hosting/index.html" className={styles["modal__action"]}>
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
  );
};

export default Modal;
