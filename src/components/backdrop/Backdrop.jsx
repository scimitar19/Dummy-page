import styles from "./Backdrop.module.css";

const Backdrop = ({modalFn}) => {

    const backdropHandler = () => {
        modalFn();
    }

    return  <div onClick={backdropHandler} className={styles.backdrop}></div>
}

export default Backdrop;