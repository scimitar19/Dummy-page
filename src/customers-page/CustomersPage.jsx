import React from "react";
import Navigation from "../components/Navigation.jsx";
import CustomersList from "./CustomersList.jsx";
import Footer from "../components/Footer.jsx";

const CustomersPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <CustomersList/>
      <Footer />
    </React.Fragment>
  );
};

export default CustomersPage;
