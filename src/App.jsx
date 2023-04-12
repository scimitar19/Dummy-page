import Home from "./main-page/Home.jsx";
import PackagesPage from "./package-page/PackagesPage.jsx";
import CustomersPage from "./customers-page/CustomersPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<PackagesPage/>} />
        <Route path="/customers" element={<CustomersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


