import { useParams, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { Fragment } from "react";
import styled from "styled-components";

function SelectedStartShip() {
  // const { name } = useParams();
  const location = useLocation();
  const baseURL = "https://starwars-visualguide.com/assets/img/";
  let defaultURL = "big-placeholder.jpg";

  let Content = styled.div`
    background-image: url(${baseURL}starships/${location.state.id}.jpg),
      url(${baseURL}${defaultURL});
    background-position: center;
    height: 40vh;
    background-repeat: no-repeat;
    border-bottom: 0.05rem solid rgba(255, 0, 0, 0.5);
  `;

  // console.log("name", name);
  console.log(location.state);

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="fileOfShip">
        <Content></Content>
        <h1>{location.state.name}</h1>
        <tbody>
          <tr>
            <td>Model: {location.state.model} </td>
            <td className="right">
              Manufacture: {location.state.manufacturer}
            </td>
          </tr>
          <tr>
            <td>Cost in credits: {location.state.cost_in_credits}</td>
            <td className="right">Length: {location.state.length}</td>
          </tr>
          <tr>
            <td>Atmospheric Speed: {location.state.max_atmosphering_speed}</td>
            <td className="right">Crew: {location.state.crew}</td>
          </tr>
        </tbody>
      </div>
    </Fragment>
  );
}
export default SelectedStartShip;
