import Plans from "./Plans.jsx";
import Features from "./Features.jsx";
import styles from "../App.module.css";

const Body = ({homeFn, onDispatch}) => {
      const callBodyHandler = () => {
        homeFn();
      }
        return (
          <main>
            <section id={styles["product-overview"]}>
              <h1>Get the freedom you deserve.</h1>
            </section>
            <section id={styles.plans}>
              <h1 className={styles["section-title"]}>Choose your plan</h1>
              <div className={styles["plan-list"]}>
              <Plans onDispatch={onDispatch} bodyFn={callBodyHandler}/>
              </div>
            </section>
            <Features/>
          </main>
        );
      
}

export default Body