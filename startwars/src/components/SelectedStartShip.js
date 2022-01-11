import { useParams, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { Fragment } from "react";
import styled from "styled-components";

function SelectedStartShip() {
  const { name } = useParams();
  const location = useLocation();
  const baseURL = "https://starwars-visualguide.com/assets/img/";
  let defaultURL = "big-placeholder.jpg";

  let Content = styled.div`
    background-image: url(${baseURL}starships/${location.state.id}.jpg),
      url(${baseURL}${defaultURL});
    height: 40vh;
    background-repeat: no-repeat;
  `;

  console.log("name", name);
  console.log("state", location.state);

  return (
    <Fragment>
      <NavBar></NavBar>
      <div>
        <Content></Content>
        <h1>{name}</h1>
        <p>Prueba: {location.state.name}</p>
      </div>
    </Fragment>
  );
}
export default SelectedStartShip;
