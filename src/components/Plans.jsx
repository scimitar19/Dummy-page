import PlanItem from "./plan/PlanItem.jsx";
import { PLANS } from "../fetch-data/data.jsx";
const Plans = () => {
  return PLANS.map((item) => {
    return (
      <PlanItem
        key={Math.random().toString()}
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
        onDispatch={item.onDispatch}
      />
    );
  });
};
export default Plans;


