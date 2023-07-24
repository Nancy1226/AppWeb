import { BrowserRouter , Routes , Route } from "react-router-dom";
import Rotoplas from "../pages/Rotoplas";
import Cisterna from "../pages/Cisterna";
import Grafica from "../pages/Grafica";
import Login from '../pages/Login';
import Register from "../pages/Register";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login></Login>}></Route>  
    <Route path="/Rotoplas" element={<Rotoplas></Rotoplas>}></Route>
    <Route path="/Cisterna" element={<Cisterna></Cisterna>}></Route>
    <Route path="/Grafica" element={<Grafica></Grafica>}></Route>
    <Route path="/Register" element={<Register></Register>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
