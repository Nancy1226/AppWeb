import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from "../redux/store/Store";
import Rotoplas from "../pages/Rotoplas";
import Cisterna from "../pages/Cisterna";
import Grafica from "../pages/Grafica";
import Login from '../pages/Login';
import Register from "../pages/Register";
import GraficaCisterna from "../pages/GraficaCisterna";

function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={Store}>
    <Routes>
    <Route path="/" element={<Login></Login>}></Route>  
    <Route path="/Rotoplas" element={<Rotoplas></Rotoplas>}></Route>
    <Route path="/Cisterna" element={<Cisterna></Cisterna>}></Route>
    <Route path="/Grafica" element={<Grafica></Grafica>}></Route>
    <Route path="/GraficaCisterna" element={<GraficaCisterna></GraficaCisterna>}></Route>
    <Route path="/Register" element={<Register></Register>} ></Route>
    </Routes>
    </Provider>
    </BrowserRouter>
    </>
  )
}

export default App;
