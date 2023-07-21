import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState } from 'react'
// import viteLogo from '/vite.svg'
import Rotoplas from "../pages/Rotoplas";
import Cisterna from "../pages/Cisterna";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    {/*<Route path="/" element={<Login></Login>}></Route>*/}
    <Route path="/Rotoplas" element={<Rotoplas></Rotoplas>}></Route>
    <Route path="/Cisterna" element={<Cisterna></Cisterna>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
