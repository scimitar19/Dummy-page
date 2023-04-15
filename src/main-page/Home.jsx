import Navigation from "../components/Navigation.jsx";
import Body from "./Body.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";

const Home = ({appFn}) => {

  const callHomeHandler = () => {
     appFn();
  }

  return (
    <React.Fragment>
      <Navigation />
      <Body homeFn={callHomeHandler}/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
