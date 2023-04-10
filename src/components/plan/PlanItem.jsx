import {PLANS} from "../../../fetch-data";


const ItemPlan = () => {
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
}

export default ItemPlan;