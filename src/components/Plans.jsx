import PlanItem from "./plan/PlanItem.jsx";
import styles from "./Plans.module.css";
import { PLANS } from "../fetch-data/data.jsx";
const Plans = () => {
  return PLANS.map((item) => {
    return (
      <PlanItem
        h1={item.styling.h1}
        h2={item.styling.h2}
        title={item.title}
        price={item.price}
        description={item.description}
        plan={item.styling.article}
        plan1={item.styling.article1}
        plan__features={item.styling.ul}
        workspace={item.workspace}
        traffic={item.traffic}
        storage={item.storage}
        support={item.support}
      />
    );
  });
};
export default Plans;

{
  /* <article className={styles.plan}>
  <h1>FREE</h1>
  <h2>$0/month</h2>
  <h3>For hobby projects or small teams.</h3>
  <ul className={styles["plan__features"]}>
    <li>1 Workspace</li>
    <li>Unlimited Traffic</li>
    <li>10GB Storage</li>
    <li>Basic Support</li>
  </ul>
  <div>
    <button>CHOOSE PLAN</button>
  </div>
</article>
<article className={`${styles.plan} ${styles["plan--highlighted"]}`}>
  <h1 className={styles["plan__annotation"]}>RECOMMENDED</h1>
  <h1>PLUS</h1>
  <h2>$29/month</h2>
  <h3>For ambitious projects.</h3>
  <ul className={styles["plan__features"]}>
    <li>5 Workspaces</li>
    <li>Unlimited Traffic</li>
    <li>100GB Storage</li>
    <li>Plus Support</li>
  </ul>
  <div>
    <button>CHOOSE PLAN</button>
  </div>
</article>
<article className={styles.plan}>
  <h1>PREMIUM</h1>
  <h2>$99/month</h2>
  <h3>Your enterprise solution.</h3>
  <ul className={styles["plan__features"]}>
    <li>10 Workspaces</li>
    <li>Unlimited Traffic</li>
    <li>Unlimited Storage</li>
    <li>Priority Support</li>
  </ul>
  <div>
    <button>CHOOSE PLAN</button>
  </div>
</article> */
}
