import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import SingleProperty from "./pages/SingleProperty"
import Error404 from "./pages/Error404"
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/properties"} element={<Properties />} />
        <Route path={"/properties/:id"} element={<SingleProperty />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer text={"Florida resort. All rights reserved."} />
    </div>
  );
}

export default App;
