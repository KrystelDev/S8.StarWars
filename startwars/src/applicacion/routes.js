import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import StartShips from "../pages/startShips/StartShips";
import SelectedStartShip from "../components/SelectedStartShip";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StartShips" element={<StartShips />} />
        <Route path="/detall/:name" element={<SelectedStartShip />} />
        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={() => <div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Path;
