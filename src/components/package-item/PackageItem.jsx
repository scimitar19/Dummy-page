import styles from "./PackageItem.module.css";

const PackageItem = (props) => {
  return (
    <section className={styles["package-item"]} id={styles[props.id]}>
        {/* {console.log(props.id)} */}
      <a href="#">
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
      </a>
    </section>
  );
};

export default PackageItem;
