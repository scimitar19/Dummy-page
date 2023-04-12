import styles from "./PackageItem.module.css";

const PackageItem = (props) => {
  return (
    <section className={styles["package-item"]} id={styles[props.id]}>
      <a href="#">
        {props.id == "plus" && <h2 className={styles["package__badge"]}>RECOMMENDED</h2>}
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
      </a>
    </section>
  );
};

export default PackageItem;
