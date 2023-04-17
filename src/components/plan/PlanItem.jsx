import styles from "./PlanItem.module.css"

const ItemPlan = (props) => {

const planHandler = () => {
    props.plansFn("Logeged from PLANS>JSX");
    props.onDispatch({type: "showBackdrop"})
    
}

return (<article className={props.plan1 ? `${styles[props.plan]} ${styles[props.plan1]}`: styles[props.plan]} key={props.key}>
      <h1 className={props.h1 ? styles[props.h1]: ""}>{props.title}</h1>
      {props.h1 && <h1 className={styles["plan__title"]}>PLUS</h1>}
      <h2 className={styles[props.h2]}>{props.price}</h2>
      <h3>{props.description}</h3>
      <ul className={styles[props.plan__features]}>
        <li>{props.workspace}</li>
        <li>{props.traffic}</li>
        <li>{props.storage}</li>
        <li>{props.support}</li>
      </ul>
      <div>
        <button onClick={planHandler} className={styles.button}>CHOOSE PLAN</button>
      </div>
    </article>)
}

export default ItemPlan;