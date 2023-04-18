import React from "react";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import PackagePlans from "./PackagePlans.jsx";
import styles from "./PackagesPage.module.css";

const PackagesPage = ({onDispatch}) => {
  return (
    <React.Fragment>
      <div className={styles.background}></div>
      <Navigation onDispatch={onDispatch}/>
      <PackagePlans onDispatch={onDispatch}/>
      <Footer />
    </React.Fragment>
  );
};

export default PackagesPage;
