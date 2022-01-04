import { Fragment } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function SelectedStartShip({ item, index }) {
  console.log("esto es la ficha de la nave: " + item.name);
  const { name } = useParams();
  const thisShip = item;

  return (
    <Fragment>
      <NavBar></NavBar>
      <div>
        <h1>{thisShip.name}</h1>
        <p>Prueba: {thisShip.model}</p>
      </div>
    </Fragment>
  );
}
export default SelectedStartShip;
