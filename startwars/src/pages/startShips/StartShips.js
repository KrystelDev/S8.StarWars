import { Fragment } from "react";
import ListShips from "../../components/ListShips";
import NavBar from "../../components/NavBar";

function StartShips() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <ListShips></ListShips>
      </main>
    </Fragment>
  );
}

export default StartShips;
