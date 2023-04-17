import Navigation from "../components/Navigation.jsx";
import Body from "./Body.jsx";
import Footer from "../components/Footer.jsx";
import MobileNav from "../components/mobile-nav/MobileNav.jsx";
import React, {useState} from "react";

const Home = ({appFn, onDispatch}) => {

  const [sideNav, setSideNav] = useState(false)

  const sideNavSwitchHandler = () => {
    setSideNav(val => {
      return !val;
    })
  }

  const callHomeHandler = () => {
     appFn();
  }

  return (
    <React.Fragment>
      <Navigation homeSideNavFn={sideNavSwitchHandler}/>
     {sideNav && <MobileNav/>}
      <Body onDispatch={onDispatch} homeFn={callHomeHandler}/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
