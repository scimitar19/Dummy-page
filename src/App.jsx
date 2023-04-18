import Home from "./main-page/Home.jsx";
import PackagesPage from "./package-page/PackagesPage.jsx";
import CustomersPage from "./customers-page/CustomersPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal.jsx";
import { useState, useReducer } from "react";
import Backdrop from "./components/backdrop/Backdrop.jsx";
import MobileNav from "./components/mobile-nav/MobileNav.jsx";

function App() {
  function reducerFn(state, action) {
    console.log(state);
    if (action.type == "removeBackdrop") {
      return { ...state, visibleBackdrop: false, visibleSideNav: false };
    } else if (action.type == "showBackdrop") {
      return { ...state, visibleBackdrop: true}
     } else if(action.type== "showSideNav") {
        return {...state, visibleSideNav: true}
    } else {
      return { ...state };
    }
  }

  const [currentB, setBackdrop] = useState(false);
  const [sizedBackdrop, setSizedB] = useState(true);
  const [currState, dispatch] = useReducer(reducerFn, {
    visibleBackdrop: false,
    visibleSideNav: false,
    link: "#",
  });

  const callAppHandler = () => {
    setBackdrop((val) => {
      return (val = true);
    });
    setSizedB(true);
    console.log(currState);
  };

  return (
    <BrowserRouter>
      {currState.visibleBackdrop && (
        <Backdrop
          onDispatch={dispatch}
          modal={<Modal onDispatch={dispatch} />}
        />
      )}
      {currState.visibleSideNav && <Backdrop onDispatch={dispatch} mobileNav={<MobileNav/>}/>}
      <Routes>
        <Route path="/" element={<Home onDispatch={dispatch} appFn={callAppHandler} />} />
        <Route path="/packages" element={<PackagesPage onDispatch={dispatch}/>} />
        <Route path="/customers" element={<CustomersPage onDispatch={dispatch}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
