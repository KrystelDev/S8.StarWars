import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import ReactPlayer from "react-player";

function Home() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <ReactPlayer
          url="youtube.com/watch?v=SBLSTf7IgA0"
          className="react-player"
          playing
          controls={true}
        />
      </main>
    </Fragment>
  );
}
export default Home;
