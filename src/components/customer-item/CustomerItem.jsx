import styles from "./customers.css";

const CustomerItem = ({ h1, h2, p, img, styling }) => {
  return (
      <div className={styles.testimonial} id={styles[styling]}>
        {console.log(styling)}
      <div className={styles["testimonial__image-container"]}>
        <img
          src={img}
          alt={`${h1} - Customer`}
          className={styles["testimonial__image"]}
        />
      </div>
      <div className={styles["testimonial__info"]}>
        <h1 className={styles["testimonial__name"]}>{h1}</h1>
        <h2 className={styles["testimonial__subtitle"]}>
          {h2}
          <a href="tech-analysis.com">tech-analysis.com</a>
        </h2>
        <p className={styles["testimonial__text"]}>{p}</p>
      </div>
    </div>
  );
};

export default CustomerItem;
