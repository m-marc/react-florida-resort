import './App.css'
import Navbar from "./components/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Properties from "./pages/Properties"
import SingleProperty from "./pages/SingleProperty"
import Error404 from "./pages/Error404"
import {useEffect} from "react"
import data from "./data";

function App() {

  useEffect(() => {

  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/properties"} element={<Properties />} />
        <Route path={"/properties/:id"} element={<SingleProperty />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
