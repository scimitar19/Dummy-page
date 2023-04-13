import Navigation from "../components/Navigation.jsx";
import Body from "./Body.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";
import Backdrop from "../components/backdrop/Backdrop.jsx";

const Home = () => {
  return (
    <React.Fragment>
      <Backdrop/>
      <Navigation />
      <Body/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
