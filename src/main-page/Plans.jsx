import PlanItem from "../components/plan/PlanItem.jsx";
import { PLANS } from "../fetch-data/data.jsx";

const Plans = ({bodyFn}) => {
  
  const callPlansHandler = () => {
       bodyFn();
  }

  return PLANS.map((item) => {
    return (
      <PlanItem
        plansFn={callPlansHandler}
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
