import Home from "./main-page/Home.jsx";
import PackagesPage from "./package-page/PackagesPage.jsx";
import CustomersPage from "./customers-page/CustomersPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Backdrop from "./components/backdrop/Backdrop.jsx";
import Modal from "./components/modal/Modal.jsx";
import {useState} from "react";


function App() {
  
  const [currentB, setBackdrop] = useState(false)
  const [sizedBackdrop, setSizedB] = useState(true)


  const callAppHandler = () => {
      setBackdrop((val) => {
         return val = true;
      });
      setSizedB(true);
      console.log("LOgged from App.jsx")
  }

  const someOther = () => {
    setSizedB(false)
    console.log("from appp")
  }
 
  const buttonPrompt = () => {
    setBackdrop(false)
  }

  return (
    <BrowserRouter>
     {/* {currentB && sizedBackdrop && (<Backdrop clicking={someOther}/>)} */}
     {currentB && sizedBackdrop && <Modal appFn={someOther} appButton={buttonPrompt}/>} 
      <Routes>
        <Route path="/" element={<Home  appFn={callAppHandler}/>} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/customers" element={<CustomersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




