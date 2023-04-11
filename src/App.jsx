import Home from "./main-page/Home.jsx";
import PackagesPage from "./package-page/PackagesPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<PackagesPage/>} />
      </Routes>
      {/* {!<Navigation />} */}
      {/* {!<Body />} */}
    </BrowserRouter>
  );
}

export default App;


