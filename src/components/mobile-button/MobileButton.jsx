import styles from "./MobileButton.module.css";


const MobileButton = ({onDispatch}) => {

    const sideNavHandler = () => {
        onDispatch({type: "showSideNav"})
    }

   return (<button onClick={sideNavHandler} className={styles["toggle-button"]}>
    <span className={styles["toggle-button__bar"]}></span>
    <span className={styles["toggle-button__bar"]}></span>
    <span className={styles["toggle-button__bar"]}></span>
</button>)
}

export default MobileButton; 