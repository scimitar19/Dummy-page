import styles from "./Backdrop.module.css";

let component;
const Backdrop = (props) => {
  if (props.modal) {
    component = props.modal;
  } else {
    component = props.mobileNav;
  }

  const backdropHandler = () => {
    props.onDispatch({ type: "removeBackdrop", visibleBackdrop: false });
    console.log("backdrop");
  };

  return (
    <div>
      {component}
      <div onClick={backdropHandler} className={styles.backdrop}></div>
    </div>
  );
};

export default Backdrop;
