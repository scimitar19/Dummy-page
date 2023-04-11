import PackageItem from "../components/package-item/PackageItem.jsx";
import { PACKAGE_DATA } from "../fetch-data/data.jsx";
import styles from "./PackagePlans.module.css";

const PackagePlans = () => {
  return (
    <main styles={styles.main}>
      {PACKAGE_DATA.map((item) => {
        return (
          <PackageItem h1={item.h1} h2={item.h2} p={item.p} id={item.id} />
        );
      })}
    </main>
  );
};

export default PackagePlans;
