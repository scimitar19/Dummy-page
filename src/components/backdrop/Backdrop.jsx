import styles from "./Backdrop.module.css";

const Backdrop = (props) => {

    
  const backdropHandler = (component) => {
    props.onDispatch({type: "removeBackdrop", visibleBackdrop: false})
    console.log("backdrop")
  };

  return (
    <div>
      {props.modal}
      <div onClick={backdropHandler} className={styles.backdrop}></div>
    </div>
  );
};

export default Backdrop;
