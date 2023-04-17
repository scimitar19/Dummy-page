import Home from "./main-page/Home.jsx";
import PackagesPage from "./package-page/PackagesPage.jsx";
import CustomersPage from "./customers-page/CustomersPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/modal/Modal.jsx";
import { useState, useReducer } from "react";
import Backdrop from "./components/backdrop/Backdrop.jsx";

function App() {
  function reducerFn(state, action) {
    console.log(state);
    if (action.type == "removeBackdrop") {
      return { ...state, visibleBackdrop: false };
    } else if (action.type == "showBackdrop") {
      return { ...state, visibleBackdrop: true}
    } else {
      return { ...state };
    }
  }

  const [currentB, setBackdrop] = useState(false);
  const [sizedBackdrop, setSizedB] = useState(true);
  const [currState, dispatch] = useReducer(reducerFn, {
    visibleBackdrop: false,
    link: "#",
  });

  const callAppHandler = () => {
    setBackdrop((val) => {
      return (val = true);
    });
    setSizedB(true);
    console.log(currState);
  };

  // const backdropOff = () => {
  //   setSizedB(false);
  //   dispatch();
  //   console.log("from appp");
  // };

  // const buttonPrompt = () => {
  //   setBackdrop(false);
  //   console.log("aaaaaaaaaaaa");
  // };

  return (
    <BrowserRouter>
      {/* {true && <Modal appFn={backdropOff} appButton={buttonPrompt}/>}  */}
      {currState.visibleBackdrop && (
        <Backdrop
          onDispatch={dispatch}
          modal={<Modal onDispatch={dispatch} />}
        />
      )}
      <Routes>
        <Route path="/" element={<Home onDispatch={dispatch} appFn={callAppHandler} />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
