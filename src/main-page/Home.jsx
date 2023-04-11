import Navigation from "../components/Navigation.jsx";
import Body from "./Body.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Body/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
