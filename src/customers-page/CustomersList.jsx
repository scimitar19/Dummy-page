import CustomerItem from "../components/customer-item/CustomerItem.jsx";
import { CUSTOMERS_DATA } from "../fetch-data/data.jsx";

const CustomersList = () => {
  return CUSTOMERS_DATA.map((item) => {
    return (
      <CustomerItem
        key={Math.random().toString()}
        h1={item.h1}
        h2={item.h2}
        p={item.p}
        img={item.img}
        styling={item.styling}
      />
    );
  });
};

export default CustomersList;
