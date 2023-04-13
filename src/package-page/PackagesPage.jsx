import React from "react";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import PackagePlans from "./PackagePlans.jsx";
import styles from "./PackagesPage.module.css"
import Backdrop from "../components/backdrop/Backdrop.jsx";

const PackagesPage = () => {

    return (<React.Fragment>
                <Backdrop/>
                <div className={styles.background}></div>
                <Navigation/>
                <PackagePlans/>
                <Footer/>
            </React.Fragment>)
}

export default PackagesPage;