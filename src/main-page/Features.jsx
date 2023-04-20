import Feature from "../components/feature/Feature.jsx";
import { FEATURES } from "../fetch-data/data.jsx";
import styles from "../App.module.css";
import styles1 from "./Features.module.css";

const Features = () => {
  return (
    <section id={styles1["key-features"]}>
      <h1 className={`${styles["section-title"]} ${styles1["section-title"]}`}>
        Many Good Reasons to Stick Around
      </h1>
      <ul className={styles1["key-feature__list"]}>
        {FEATURES.map((value) => {
          return (
            <Feature
              title={value.title}
              svgImage={value.svgImage}
              id={Math.random().toString()}
            ></Feature>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
