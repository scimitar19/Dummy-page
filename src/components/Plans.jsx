import styles from "./Plans.module.css"
const Plans = () => {
return  (<div>
    <article className={styles.plan}>
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
    </article>
  </div>);
};

export default Plans;
