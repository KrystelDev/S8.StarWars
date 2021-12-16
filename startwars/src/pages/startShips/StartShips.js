import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import ListShips from "../../components/ListShips";

function Home() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <ListShips></ListShips>
      </main>
    </Fragment>
  );
}
export default Home;
