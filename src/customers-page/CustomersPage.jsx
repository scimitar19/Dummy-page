import React from "react";
import Navigation from "../components/Navigation.jsx";
import CustomersList from "./CustomersList.jsx";
import Footer from "../components/Footer.jsx";

const CustomersPage = ({onDispatch}) => {
  return (
    <React.Fragment>
      <Navigation onDispatch={onDispatch}/>
      <CustomersList/>
      <Footer />
    </React.Fragment>
  );
};

export default CustomersPage;
