import React from "react";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import PackagePlans from "./PackagePlans.jsx";

const PackagesPage = () => {

    return (<React.Fragment>
                <Navigation/>
                <PackagePlans/>
                <Footer/>
            </React.Fragment>)
}

export default PackagesPage;